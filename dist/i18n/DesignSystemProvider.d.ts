import React from "react";
import type { TDesignSystemMessages, TDesignSystemMessagesOverride } from "./types";
export type DesignSystemProviderProps = {
    locale?: TDesignSystemMessages;
    messages?: TDesignSystemMessagesOverride;
    children: React.ReactNode;
};
export declare function DesignSystemProvider({ locale, messages, children, }: DesignSystemProviderProps): import("react/jsx-runtime").JSX.Element;
export declare const useMessages: () => TDesignSystemMessages;
