import { Meta, StoryFn } from "@storybook/react";
import { Filter } from ".";
import { useFilter } from "./hooks/useFilter";
import { Icon } from "../Icon";

export default {
  title: "Components/Filter",
  component: Filter.Wrapper,
  subcomponents: {
    "Filter.Container": Filter.Container,
    "Filter.Button": Filter.Button,
    "Filter.Content": Filter.Content,
    "Filter.Field": Filter.Field,
    "Filter.Select": Filter.Select,
  },
  decorators: [
    (Story) => {
      const filterRegister = useFilter({});

      return (
        <Filter.Wrapper register={filterRegister}>
          <Story />
        </Filter.Wrapper>
      );
    },
  ],
} as Meta;

export const Basic: StoryFn = () => {
  return (
    <Filter.Container>
      <Filter.Button>Email</Filter.Button>
      <Filter.Content>
        <Filter.Field field={"email"} label={"E-mail"} />
      </Filter.Content>
    </Filter.Container>
  );
};

export const FilterWithSelect: StoryFn = () => {
  const ROLES = [
    { label: "Administrador", value: "master" },
    { label: "Lojista", value: "admin" },
    { label: "Não Aprovado", value: "default" },
  ];

  return (
    <Filter.Container>
      <Filter.Button>Permissão</Filter.Button>
      <Filter.Content>
        <Filter.Select
          label="Permissão"
          getLabel={(item) => item.label}
          getValue={(item) => item.value}
          field="role"
          options={ROLES}
        />
      </Filter.Content>
    </Filter.Container>
  );
};

export const FilterWithCheckboxes: StoryFn = () => {
  const PAYMENT_METHODS = [
    { label: "Pago", id: "PAGO" },
    {
      id: "PENDENTE",
      label: "Pendente",
    },
  ];

  return (
    <Filter.Container>
      <Filter.Button>Status</Filter.Button>
      <Filter.Check
        getLabel={(option) => option.label}
        getValue={(option) => option.id}
        field="paymentMethod"
        options={PAYMENT_METHODS}
      />
    </Filter.Container>
  );
};

export const SortFilter: StoryFn = () => {
  return (
    <Filter.Container>
      <Filter.Button icon={() => <Icon name="sort" size={1} />}>
        Ordem
      </Filter.Button>
      <Filter.Sort
        getLabel={(item) => item.label}
        getValue={(item) => item.value}
        field={"orderByField"}
        options={[
          { label: "Alfabética", value: "client-asc" },
          "divider",
          { label: "Total em vendas (crescente)", value: "totalSales-asc" },
          {
            label: "Total em vendas (decrescente)",
            value: "totalSales-desc",
          },
          "divider",
          {
            label: "Lucro do gateway (crescente)",
            value: "profitGateway-asc",
          },
          {
            label: "Lucro do gateway (decrescente)",
            value: "profitGateway-desc",
          },
          "divider",
          { label: "Reserva financeira (crescente)", value: "reserve-asc" },
          {
            label: "Reserva financeira (decrescente)",
            value: "reserve-desc",
          },
        ]}
      />
    </Filter.Container>
  );
};
