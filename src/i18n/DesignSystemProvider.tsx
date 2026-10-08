"use client";

import React, { createContext, useContext, useMemo } from "react";
import { ptBR } from "./locales/ptBR";
import type {
  TDesignSystemMessages,
  TDesignSystemMessagesOverride,
} from "./types";

const MessagesContext = createContext<TDesignSystemMessages>(ptBR);

export type DesignSystemProviderProps = {
  locale?: TDesignSystemMessages;
  messages?: TDesignSystemMessagesOverride;
  children: React.ReactNode;
};

const mergeMessages = (
  locale: TDesignSystemMessages,
  messages?: TDesignSystemMessagesOverride,
): TDesignSystemMessages => {
  if (!messages) return locale;

  const sections = Object.keys(
    messages,
  ) as (keyof TDesignSystemMessagesOverride)[];

  return sections.reduce(
    (merged, section) => ({
      ...merged,
      [section]: { ...locale[section], ...messages[section] },
    }),
    locale,
  );
};

export function DesignSystemProvider({
  locale = ptBR,
  messages,
  children,
}: DesignSystemProviderProps) {
  const value = useMemo(
    () => mergeMessages(locale, messages),
    [locale, messages],
  );

  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  );
}

// Interno da lib: sem provider, devolve o ptBR
export const useMessages = () => useContext(MessagesContext);
