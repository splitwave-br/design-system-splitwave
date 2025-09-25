import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemePreview } from "../ThemePreview";
import { Sidebar } from "./index";
import { Route } from "./components/types/route";
import { Button } from "../Button";
import { Icon } from "../Icon";

const meta = {
  component: Sidebar,
  tags: ["autodocs"],
  args: {
    children: undefined,
  },
} as Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockRoutes: Route[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "home",
  },
  {
    name: "Clientes",
    path: "/clients",
    icon: "clients",
    children: [
      { name: "Lista de Clientes", path: "/clients/list" },
      { name: "Adicionar Cliente", path: "/clients/add" },
      { name: "Importar Clientes", path: "/clients/import" },
    ],
  },
  {
    name: "Financeiro",
    path: "/financial",
    icon: "billing",
    children: [
      { name: "Faturas", path: "/financial/invoices" },
      { name: "Pagamentos", path: "/financial/payments" },
      { name: "Relatórios", path: "/financial/reports" },
    ],
  },
  {
    name: "Configurações",
    path: "/settings",
    icon: "config",
  },
];

export const Default: Story = {
  render: (args) => {
    const [activeRoute, setActiveRoute] = useState("/dashboard");
    const [openGroups, setOpenGroups] = useState<string[]>([]);

    const getIsRouteActive = (path: string) => activeRoute === path;

    const handleGroupClick = (groupPath: string) => {
      setOpenGroups((prev) =>
        prev.includes(groupPath)
          ? prev.filter((p) => p !== groupPath)
          : [...prev, groupPath],
      );
    };

    const handleItemClick = (path: string) => {
      setActiveRoute(path);
    };

    return (
      <Sidebar {...args}>
        <Sidebar.NavSection>
          <Sidebar.NavItem
            route={mockRoutes[0]}
            isActive={getIsRouteActive(mockRoutes[0].path)}
            onClick={() => handleItemClick(mockRoutes[0].path)}
          />

          <Sidebar.NavGroup
            route={mockRoutes[1]}
            isOpened={openGroups.includes(mockRoutes[1].path)}
            onClick={() => handleGroupClick(mockRoutes[1].path)}
            onClickItem={() => {}}
            getIsRouteActive={getIsRouteActive}
          />

          <Sidebar.NavGroup
            route={mockRoutes[2]}
            isOpened={openGroups.includes(mockRoutes[2].path)}
            onClick={() => handleGroupClick(mockRoutes[2].path)}
            onClickItem={() => {}}
            getIsRouteActive={getIsRouteActive}
          />

          <Sidebar.NavItem
            route={mockRoutes[3]}
            isActive={getIsRouteActive(mockRoutes[3].path)}
            onClick={() => handleItemClick(mockRoutes[3].path)}
          />
        </Sidebar.NavSection>
        <Sidebar.Footer>
          <p style={{flex:1}}>Footer</p>
          <Button variant="link-gray">
            <Icon name="logout" />
            Sair
          </Button>
        </Sidebar.Footer>
      </Sidebar>
    );
  },
};

export const WithDisabledItems: Story = {
  render: (args) => {
    const [activeRoute, setActiveRoute] = useState("/dashboard");

    const getIsRouteActive = (path: string) => activeRoute === path;

    const disabledRoutes: Route[] = [
      { name: "Dashboard", path: "/dashboard", icon: "home" },
      { name: "Relatórios", path: "/reports", icon: "chart", disabled: true },
      {
        name: "Analytics",
        path: "/analytics",
        icon: "analytics-up",
        disabled: true,
      },
      { name: "Configurações", path: "/settings", icon: "config" },
    ];

    return (
      <ThemePreview showMenu>
        <Sidebar {...args}>
          <Sidebar.NavSection>
            {disabledRoutes.map((route) => (
              <Sidebar.NavItem
                key={route.path}
                route={route}
                isActive={getIsRouteActive(route.path)}
                disabled={route.disabled}
                onClick={() => !route.disabled && setActiveRoute(route.path)}
              />
            ))}
          </Sidebar.NavSection>
        </Sidebar>
      </ThemePreview>
    );
  },
};

export const ItemsWithoutIcons: Story = {
  render: (args) => {
    const [activeRoute, setActiveRoute] = useState("/item1");

    const routesWithoutIcons: Route[] = [
      { name: "Item sem ícone 1", path: "/item1" },
      { name: "Item sem ícone 2", path: "/item2" },
      { name: "Item sem ícone 3", path: "/item3" },
    ];

    return (
      <ThemePreview>
        <Sidebar {...args}>
          <Sidebar.NavSection>
            {routesWithoutIcons.map((route) => (
              <Sidebar.NavItem
                key={route.path}
                route={route}
                isActive={activeRoute === route.path}
                onClick={() => setActiveRoute(route.path)}
              />
            ))}
          </Sidebar.NavSection>
        </Sidebar>
      </ThemePreview>
    );
  },
};
