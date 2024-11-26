"use client";

import React, { createContext, useContext, useState } from "react";
import { PresetEnum, Toast, ToastProps } from "@/components/Toast";
import styles from "../styles.module.scss";
import { generateUUID } from "@/utils/generateUUID";

interface ToastPropsWithId extends ToastProps {
  id: string;
}

interface ToastPropsWithArrayMessages extends Omit<ToastProps, "message"> {
  message: string | string[];
}

interface ToastProviderProps {
  children: React.ReactNode;
}

interface IToastContextData {
  openToast: (params: ToastPropsWithArrayMessages) => void;
  openToastSuccess: (
    message: string | string[],
    params?: ToastPropsWithArrayMessages,
  ) => void;
  openToastError: (
    message: string | string[],
    params?: ToastPropsWithArrayMessages,
  ) => void;
}

const ToastContext = createContext({} as IToastContextData);

const defaultTimeout = 5000;

function ToastProvider({ children }: ToastProviderProps) {
  const [toastMessagesQueue, setToastMessagesQueue] = useState<
    ToastPropsWithId[]
  >([]);

  const getNewToastMessagesQueue = (
    prev: ToastPropsWithId[],
    toastProps: ToastProps,
  ) => {
    const newToast: ToastPropsWithId = {
      timeout: defaultTimeout,
      ...toastProps,
      id: `${generateUUID()}`,
    };

    return [...prev, newToast];
  };

  const openToast = (toastProps: ToastPropsWithArrayMessages) => {
    const message = toastProps.message;

    if (typeof message === "string")
      setToastMessagesQueue((prev) =>
        getNewToastMessagesQueue(prev, toastProps as ToastProps),
      );

    if (Array.isArray(message)) {
      for (const msg of message) {
        setToastMessagesQueue((prev) =>
          getNewToastMessagesQueue(prev, { ...toastProps, message: msg }),
        );
      }
    }
  };

  const openToastSuccess = (
    message: string | string[],
    toastProps?: ToastPropsWithArrayMessages,
  ) => {
    openToast({ preset: PresetEnum.Success, ...toastProps, message });
  };

  const openToastError = (
    message: string | string[],
    toastProps?: ToastPropsWithArrayMessages,
  ) => {
    openToast({ preset: PresetEnum.Error, ...toastProps, message });
  };

  const closeToast = (id: string) => {
    setToastMessagesQueue((prev) => prev.filter((toast) => toast.id !== id));
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
      <div className={styles.wrapperContainer}>
        {toastMessagesQueue.map((toastMessage) => (
          <Toast
            key={`toast-message-${toastMessage.id}`}
            {...toastMessage}
            onClose={() => closeToast(toastMessage.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function useToast(): IToastContextData {
  return useContext(ToastContext);
}

export { ToastProvider, useToast };
