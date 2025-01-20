import { Meta, StoryFn } from "@storybook/react";
import { ThemePreview } from "../ThemePreview";
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
        <div style={{ height: 500 }}>
          <Filter.Wrapper register={filterRegister}>
            <Story />
          </Filter.Wrapper>
        </div>
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
    <Filter.Responsive>
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
    </Filter.Responsive>
  );
};

export const FilterWithCheckboxes: StoryFn = () => {
  const PAYMENT_METHODS = [
    { label: "Pago", id: "PAGO" },
    { label: "Pendente", id: "PENDENTE" },
    { label: "Em Processamento", id: "EM_PROCESSAMENTO" },
    { label: "Aguardando Pagamento", id: "AGUARDANDO_PAGAMENTO" },
    { label: "Cancelado", id: "CANCELADO" },
    { label: "Estornado", id: "ESTORNADO" },
    { label: "Chargeback", id: "CHARGEBACK" },
    { label: "Aprovado", id: "APROVADO" },
    { label: "Rejeitado", id: "REJEITADO" },
    { label: "Expirado", id: "EXPIRADO" },
    { label: "Parcialmente Pago", id: "PARCIALMENTE_PAGO" },
    { label: "Pagamento Em Análise", id: "PAGAMENTO_EM_ANALISE" },
    { label: "Pagamento Não Autorizado", id: "PAGAMENTO_NAO_AUTORIZADO" },
    { label: "Agendado", id: "AGENDADO" },
    { label: "Concluído", id: "CONCLUIDO" },
  ];

  return (
    <Filter.Container>
      <Filter.Button>Status</Filter.Button>
      <Filter.Check
        hasClear
        label="Status"
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

export const DateFilter: StoryFn = () => {
  return (
    <Filter.Container>
      <Filter.Button>Data</Filter.Button>
      <Filter.Content>
        <Filter.Date label="Por período" isPeriod />
        {/* <Filter.Date
          field="createdAt"
          label="Data de criação"
          isPeriod={false}
        />
        <Filter.Date
          field="updatedAt"
          label="Data da última atualização"
          isPeriod={false}
        /> */}
      </Filter.Content>
    </Filter.Container>
  );
};

export const MultipleFilters: StoryFn = () => {
  const PAYMENT_METHODS = [
    { label: "Pago", id: "PAGO" },
    {
      id: "PENDENTE",
      label: "Pendente",
    },
  ];
  const shouldShow = false;
  return (
    <Filter.Responsive>
      <Filter.Container>
        <Filter.Button>Cliente</Filter.Button>
        <Filter.Content>
          <Filter.Field field={"customerEmail"} label={"E-mail"} />
          <Filter.Field field={"customerName"} label={"Nome do cliente"} />
          <Filter.Field field={"customerCpfCnpj"} label={"CPF/CNPJ"} />
          <Filter.Field field={"customerPhone"} label={"Telefone"} />
        </Filter.Content>
      </Filter.Container>

      {shouldShow && (
        <Filter.Container>
          <Filter.Button>Id do pedido</Filter.Button>
          <Filter.Content>
            <Filter.Field field={"orderId"} label={"Id do pedido"} />
          </Filter.Content>
        </Filter.Container>
      )}
      <Filter.Container>
        <Filter.Button>Preço</Filter.Button>
        <Filter.Content>
          <Filter.Field field={"minPrice"} label={"Mínimo"} />
          <Filter.Field field={"maxPrice"} label={"Máximo"} />
        </Filter.Content>
      </Filter.Container>

      <Filter.Container>
        <Filter.Button>Método de pagamento</Filter.Button>
        <Filter.Check
          label="Método de pagamento"
          getLabel={(option) => option.label}
          getValue={(option) => option.id}
          field="paymentMethod"
          options={PAYMENT_METHODS}
        />
      </Filter.Container>
      <Filter.Container>
        <Filter.Button>Data</Filter.Button>
        <Filter.Content>
          <Filter.Date label="Por período" isPeriod />
          <Filter.Date
            field="createdAt"
            label="Data de criação"
            isPeriod={false}
          />
          <Filter.Date
            field="updatedAt"
            label="Data da última atualização"
            isPeriod={false}
          />
        </Filter.Content>
      </Filter.Container>
      <Filter.Container shouldEjectOnMobile={false}>
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
    </Filter.Responsive>
  );
};

export const DarkOrLightTheme: StoryFn = {
  render: () => (
    <ThemePreview>
      <Filter.Container>
        <Filter.Button>Data</Filter.Button>
        <Filter.Content>
          <Filter.Date label="Por período" isPeriod />
          <Filter.Date
            field="createdAt"
            label="Data de criação"
            isPeriod={false}
          />
        </Filter.Content>
      </Filter.Container>
    </ThemePreview>
  ),
};
