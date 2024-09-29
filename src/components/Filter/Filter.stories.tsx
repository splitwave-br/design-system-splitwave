import { Meta, StoryFn } from "@storybook/react";
import { Filter } from ".";
import { useFilter, useFilterContext } from "./hooks/useFilter";

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
