import Nav from "./components/nav/nav";
import Trigger from "./components/trigger/trigger";

export interface ITabTrigger {
  label: string;
  path: string;
  isDisabled?: boolean;
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
