"use client";

import React, { createContext, useContext, useState } from "react";
import { Toast, ToastProps } from "@/components/Toast";

interface ToastProviderProps {
  children: React.ReactNode;
}

interface IToast {}

interface IToastContextData {
  openToast: (params: ToastProps) => void;
  openToastSuccess: (message: string, params?: ToastProps) => void;
  openToastError: (message: string, params?: ToastProps) => void;
}

interface ToastPropsWithId extends ToastProps {
  id?: string;
}

const ToastContext = createContext({} as IToastContextData);

const defaultTimeout = 5000;
let id = 0;

function ToastProvider({ children }: ToastProviderProps) {
  const [toastMessagesQueue, setToastMessagesQueue] = useState<
    ToastPropsWithId[]
  >([]);

  const openToast = (toastProps: ToastProps) => {
    id++;

    setToastMessagesQueue((prev) => {
      if (toastProps.priority) {
        return [
          {
            id: `toast-message-${id}`,
            timeout: defaultTimeout,
            ...toastProps,
          },
        ];
      }

      return [
        ...prev,
        {
          id: `toast-message-${id}`,
          timeout: defaultTimeout,
          ...toastProps,
        },
      ];
    });
  };

  const openToastSuccess = (message: string, toastProps?: ToastProps) => {
    openToast({
      success: true,
      priority: true,
      ...toastProps,
      message,
    });
  };

  const openToastError = (message: string, toastProps?: ToastProps) => {
    openToast({
      error: true,
      priority: true,
      ...toastProps,
      message,
    });
  };

  const handleShift = () => {
    setToastMessagesQueue((prev) => {
      return [...prev.slice(1)];
    });
  };

  return (
    <ToastContext.Provider
      value={{
        openToast,
        openToastSuccess,
        openToastError,
      }}
    >
      {children}
      {toastMessagesQueue?.[0] && (
        <Toast
          key={toastMessagesQueue?.[0].id}
          {...(toastMessagesQueue?.[0] || {})}
          onClose={handleShift}
        />
      )}
    </ToastContext.Provider>
  );
}

function useToast(): IToastContextData {
  return useContext(ToastContext);
}

export { ToastProvider, useToast };
