"use client";

import React from "react";
import Nav from "./components/nav/nav";
import Trigger from "./components/trigger/trigger";
import "./variables.scss";

export interface ITabTrigger {
  label: string;
  path: string;
  isDisabled?: boolean;
  relatedPath?: string;
}

export interface ITabsProps {
  tabs: ITabTrigger[];
  currentPath?: string;
}

export const Tabs = ({ tabs, currentPath }: ITabsProps) => {
  return (
    <Nav>
      {tabs.map((tab) => (
        <Trigger
          key={tab.path}
          relatedPath={tab.relatedPath}
          isDisabled={tab.isDisabled}
          path={tab.path}
          currentPath={currentPath}
        >
          {tab.label}
        </Trigger>
      ))}
    </Nav>
  );
};
