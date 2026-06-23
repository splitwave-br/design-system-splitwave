'use client';

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import useAdjustScrollbar from '@/hooks/useAdjustScrollbar';
import DrawerPortalEntry from '../components/Entry';

export interface DrawerOptions {
  size?: 'sm' | 'md' | 'lg';
  closeOnOverlayClick?: boolean;
  onClose?: (...args: any) => void;
}

interface IDrawerContextData {
  openDrawer: (component: ReactNode, options?: DrawerOptions) => void;
  closeDrawer: (...args: any) => void;
  closeAll: (...args: any) => void;
}

export interface IDrawerEntry {
  id: string;
  component: ReactNode;
  options?: DrawerOptions;
  state: 'open' | 'closing';
}

const DrawerContext = createContext({} as IDrawerContextData);

let drawerId = 0;

const ANIMATION_DURATION = 300;

function DrawerProvider({ children }: { children: ReactNode }) {
  const [queue, setQueue] = useState<IDrawerEntry[]>([]);
  const { handleRemoveScrollbar } = useAdjustScrollbar();

  useEffect(() => {
    handleRemoveScrollbar(queue.length > 0);
  }, [handleRemoveScrollbar, queue.length]);

  const openDrawer = (component: ReactNode, options?: DrawerOptions) => {
    drawerId++;
    setQueue((prev) => [
      ...prev,
      { id: `drawer-${drawerId}`, component, options, state: 'open' },
    ]);
  };

  const closeDrawer = (...args: any) => {
    setQueue((prev) => {
      if (prev.length === 0) return prev;
      const lastIndex = prev.length - 1;
      if (prev[lastIndex].state === 'closing') return prev;
      return prev.map((entry, i) =>
        i === lastIndex ? { ...entry, state: 'closing' as const } : entry
      );
    });

    setTimeout(() => {
      setQueue((prev) => {
        const newQueue = [...prev];
        const closed = newQueue.pop();
        closed?.options?.onClose?.(...args);
        return newQueue;
      });
    }, ANIMATION_DURATION);
  };

  const closeAll = (...args: any) => {
    setQueue((prev) =>
      prev.length === 0
        ? prev
        : prev.map((entry) => ({ ...entry, state: 'closing' as const }))
    );

    setTimeout(() => {
      setQueue((prev) => {
        // Only the topmost drawer fires its onClose.
        prev[prev.length - 1]?.options?.onClose?.(...args);
        return [];
      });
    }, ANIMATION_DURATION);
  };

  return (
    <DrawerContext.Provider value={{ openDrawer, closeDrawer, closeAll }}>
      {children}
      {queue.map((entry, index) => (
        <DrawerPortalEntry
          key={entry.id}
          entry={entry}
          index={index}
          totalCount={queue.length}
          onClose={closeDrawer}
        />
      ))}
    </DrawerContext.Provider>
  );
}

function useDrawer(): IDrawerContextData {
  return useContext(DrawerContext);
}

export { DrawerProvider, useDrawer };
