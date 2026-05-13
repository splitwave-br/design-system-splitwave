import { Meta, StoryFn } from "@storybook/react";
import { Cell, Header, Table } from ".";
import { ThemePreview } from "../ThemePreview";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { useTableSelection } from "./hooks/useTableSelection";
import { useCallback, useMemo } from "react";

export default {
  component: Table,
  subcomponents: {
    Header: Header,
    Cell: Cell.Text,
  },
} as Meta;

export const Basic: StoryFn = () => {
  return (
    <Table
      data={[
        {
          id: "1",
          name: "Lucas Costa Amaral",
          email: "lucas@splitwave.com.br",
        },
        { id: "2", name: "Thiago Nunes", email: "thiago@splitwave.com.br" },
        { id: "3", name: "Eduardo Souto", email: "eduardo@splitwave.com.br" },
        { id: "4", name: "Erika Nishimura", email: "erika@splitwave.com.br" },
      ]}
      renderHeader={() => (
        <>
          <Header width="80px">#</Header>
          <Header identifier>Nome</Header>
          <Header>E-mail</Header>
        </>
      )}
      renderRow={(item) => {
        return (
          <>
            <Cell.Text>{item.id}</Cell.Text>
            <Cell.Text>{item.name}</Cell.Text>
            <Cell.Text>{item.email}</Cell.Text>
          </>
        );
      }}
    />
  );
};

export const TableWithCustomFields: StoryFn = () => {
  return (
    <ThemePreview>
      <Table
        data={[
          {
            date: "2024-09-28T15:30:00",
            orderId: "#9918202409280001",
            price: 349,
            product: "Camiseta",
            img: "https://dummyimage.com/100x100/ddd/000&text=Camiseta",
          },
          {
            date: "2024-09-28T14:28:00",
            orderId: "#9918202409280002",
            price: 199,
            product: "Calça",
            img: "https://dummyimage.com/100x100/ddd/000&text=Calça",
          },
          {
            date: "2024-09-28T13:12:00",
            orderId: "#9918202409280003",
            price: 29,
            product: "Boné",
            img: "https://dummyimage.com/100x100/ddd/000&text=Boné",
          },
          {
            date: "2024-09-28T09:49:00",
            orderId: "#9918202409280004",
            price: 99,
            product: "Tênis",
            img: "https://dummyimage.com/100x100/ddd/000&text=Tênis",
          },
        ]}
        keyExtractor={(item) => item.orderId}
        onRowClick={(item) => alert(`Clicked on ${item.product}`)}
        renderHeader={() => (
          <>
            <Header.Date>Data</Header.Date>
            <Header.Uuid>Código</Header.Uuid>
            <Header identifier>Produto</Header>
            <Header>Valor</Header>
          </>
        )}
        renderRow={(item) => {
          return (
            <>
              <Cell.Date>{item.date}</Cell.Date>
              <Cell.Text shouldTruncateText canCopy>
                {item.orderId}
              </Cell.Text>
              <Cell.Text>
                <Cell.Image src={item.img} />
                {item.product}
              </Cell.Text>
              <Cell.Price>{item.price}</Cell.Price>
            </>
          );
        }}
      />
    </ThemePreview>
  );
};

export const TableWithActions: StoryFn = () => {
  const getVariant = (status: string) => {
    if (status === "Ativo") return "success";
    if (status === "Inativo") return "error";
  };
  return (
    <Table
      data={[
        {
          date: "2024-09-28T15:30:00",
          id: "#9918202409280001",
          url: "https://link.com/9918202409280001",
          status: "Ativo",
        },
        {
          date: "2024-09-28T14:28:00",
          id: "#9918202409280002",
          url: "https://link.com/9918202409280002",
          status: "Ativo",
        },
        {
          date: "2024-09-28T13:12:00",
          id: "#9918202409280003",
          url: "https://link.com/9918202409280003",
          status: "Inativo",
        },
        {
          date: "2024-09-28T09:49:00",
          id: "#9918202409280004",
          url: "https://link.com/9918202409280004",
          status: "Ativo",
        },
      ]}
      renderHeader={() => (
        <>
          <Header.Date>Criado em</Header.Date>
          <Header.Uuid>Id</Header.Uuid>
          <Header minWidth="150px">Url</Header>
          <Header width="100px">Status</Header>
          <Header.Action isFixed>Ação</Header.Action>
        </>
      )}
      renderRow={(item) => {
        return (
          <>
            <Cell.Date>{item.date}</Cell.Date>
            <Cell.Text shouldTruncateText canCopy>
              {item.id}
            </Cell.Text>
            <Cell.Text shouldTruncateText canCopy>
              {item.url}
            </Cell.Text>
            <Cell.Badge variant={getVariant(item.status)}>
              {item.status}
            </Cell.Badge>
            <Cell.Actions
              isFixed
              renderTrigger={(props, ref) => {
                return (
                  <button
                    ref={ref}
                    {...props}
                    style={{
                      border: "none",
                      cursor: "pointer",
                      padding: "4px 8px",
                      fontSize: "12px",
                    }}
                  >
                    Ações
                  </button>
                );
              }}
            >
              <Cell.ActionItem>Editar</Cell.ActionItem>
              <Cell.ActionItem>Deletar</Cell.ActionItem>
            </Cell.Actions>
          </>
        );
      }}
    />
  );
};

export const TableWithSelection: StoryFn = () => {
  type TRow = {
    id: string;
    date: string;
    orderId: string;
    value: number;
    client: string;
    status: string;
  };

  const data: TRow[] = useMemo(
    () => [
      { id: "1", date: "2027-01-20T10:00:00", orderId: "32984874", value: 6290, client: "Afonso Silva Fagundes", status: "Aguardando resposta" },
      { id: "2", date: "2027-01-20T11:00:00", orderId: "32984875", value: 9120, client: "Aparecida Oliveira", status: "Aguardando resposta" },
      { id: "3", date: "2027-01-20T12:00:00", orderId: "32984876", value: 9120, client: "Benedito Silva", status: "Aguardando resposta" },
      { id: "4", date: "2027-01-20T13:00:00", orderId: "32984877", value: 5880, client: "Ricardo Oliveira", status: "Aguardando resposta" },
      { id: "5", date: "2027-01-20T14:00:00", orderId: "32984878", value: 7950, client: "Daniel Costa", status: "Defesa aceita" },
      { id: "6", date: "2027-01-20T15:00:00", orderId: "32984879", value: 6780, client: "Fabiana Almeida", status: "Defesa recusada" },
      { id: "7", date: "2027-01-20T16:00:00", orderId: "32984880", value: 8320, client: "Gabriel Rodrigues", status: "Defesa aceita" },
      { id: "8", date: "2027-01-20T17:00:00", orderId: "32984881", value: 7100, client: "Isabela Cunha", status: "Defesa aceita" },
    ],
    [],
  );

  const { selectedItems, isSelected, toggleItem, toggleAll, isAllSelected } =
    useTableSelection<TRow>({ items: data });

  const getStatusVariant = (status: string) => {
    if (status === "Defesa aceita") return "success";
    if (status === "Defesa recusada") return "error";
    return "blue";
  };

  return (
    <ThemePreview>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Table<TRow>
          data={data}
          renderHeader={() => (
            <>
              <Header.Checkbox checked={isAllSelected} onChange={toggleAll}>
                Data
              </Header.Checkbox>
              <Header.Uuid>ID do pedido</Header.Uuid>
              <Header>Valor</Header>
              <Header identifier minWidth="160px">Cliente</Header>
              <Header>Status</Header>
              <Header.Action isFixed>Ações</Header.Action>
            </>
          )}
          renderRow={(item) => (
            <>
              <Cell.Checkbox
                checked={isSelected(item.id)}
                onChange={() => toggleItem(item.id)}
              >
                <Cell.Date showTime={false}>{item.date}</Cell.Date>
              </Cell.Checkbox>
              <Cell.Text shouldTruncateText canCopy>{item.orderId}</Cell.Text>
              <Cell.Price>{item.value}</Cell.Price>
              <Cell.Text>{item.client}</Cell.Text>
              <Cell.Badge variant={getStatusVariant(item.status)}>{item.status}</Cell.Badge>
              <Cell.Actions isFixed>
                <Cell.ActionItem>Aceitar</Cell.ActionItem>
                <Cell.ActionItem>Recusar</Cell.ActionItem>
              </Cell.Actions>
            </>
          )}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 16px",
            borderRadius: "8px",
            background: "var(--color-background-elevated, #1a1a1a)",
            border: "1px solid var(--color-border, #333)",
          }}
        >
          <span style={{ fontSize: "14px" }}>
            {selectedItems.length} {selectedItems.length === 1 ? "item selecionado" : "itens selecionados"}
          </span>
          <div style={{ display: "flex", gap: "8px" }}>
            <Button
              variant="secondary"
              disabled={selectedItems.length === 0}
              onClick={() => alert(`Recusar ${selectedItems.length} itens`)}
            >
              <Icon name="cancel" size={2} />
              Recusar em lote
            </Button>
            <Button
              variant="secondary"
              disabled={selectedItems.length === 0}
              onClick={() => alert(`Aceitar ${selectedItems.length} itens`)}
            >
              <Icon name="check-circle" size={2} />
              Aceitar em lote
            </Button>
          </div>
        </div>
      </div>
    </ThemePreview>
  );
};

export const TableWithGroups: StoryFn = () => {
  type TTransaction = {
    id: string;
    groupKey: string;
    description: string;
    amount: number;
    status: string;
  };

  const data: TTransaction[] = [
    { id: "1", groupKey: "2024-10-24", description: "Recebimento de venda", amount: 38750, status: "Crédito" },
    { id: "2", groupKey: "2024-10-24", description: "Pagamento de fornecedor", amount: -18900, status: "Débito" },
    { id: "3", groupKey: "2024-10-24", description: "Recebimento de vendas do dia", amount: 96390, status: "Crédito" },
    { id: "4", groupKey: "2024-10-23", description: "Reembolso de despesas", amount: -30200, status: "Débito" },
    { id: "5", groupKey: "2024-10-23", description: "Crédito de vendas", amount: 22150, status: "Crédito" },
    { id: "6", groupKey: "2024-10-22", description: "Transferência recebida", amount: 15000, status: "Crédito" },
    { id: "7", groupKey: "2024-10-22", description: "Pagamento de serviço", amount: -4200, status: "Débito" },
  ];

  const DATE_LABELS: Record<string, string> = {
    "2024-10-24": "24 de outubro, quinta-feira",
    "2024-10-23": "23 de outubro, quarta-feira",
    "2024-10-22": "22 de outubro, terça-feira",
  };

  const separatorStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 12px",
    fontSize: "var(--font-size-3)",
    color: "var(--table-text-color-secondary)",
    backgroundColor: "var(--table-cell-background)",
    borderBottom: "1px solid var(--table-border-color)",
  };

  return (
    <Table<TTransaction>
      data={data}
      keyExtractor={(item) => item.id}
      renderHeader={() => (
        <>
          <Header>Descrição</Header>
          <Header>Status</Header>
          <Header>Valor</Header>
        </>
      )}
      renderRow={(item) => (
        <>
          <Cell.Text>{item.description}</Cell.Text>
          <Cell.Badge variant={item.amount > 0 ? "success" : "error"}>{item.status}</Cell.Badge>
          <Cell.Price hasHighlight>{item.amount}</Cell.Price>
        </>
      )}
      groups={{
        by: (item) => item.groupKey,
        renderSeparator: (key) => (
          <div style={separatorStyle}>
            <span>{DATE_LABELS[key]}</span>
            <span>{key}</span>
          </div>
        ),
      }}
    />
  );
};

export const TableWithGroupsAndActions: StoryFn = () => {
  type TEntry = {
    id: string;
    groupKey: string;
    groupLabel: string;
    closingBalance: number;
    description: string;
    amount: number;
    balance: number;
    type: "credit" | "debit";
  };

  const data: TEntry[] = [
    { id: "1", groupKey: "2024-10-24", groupLabel: "24 de outubro, quinta-feira", closingBalance: 410119.25, description: "Recebimento de venda", amount: 38750, balance: 410119.25, type: "credit" },
    { id: "2", groupKey: "2024-10-24", groupLabel: "24 de outubro, quinta-feira", closingBalance: 410119.25, description: "Pagamento de fornecedor", amount: 18900, balance: 371369.25, type: "debit" },
    { id: "3", groupKey: "2024-10-24", groupLabel: "24 de outubro, quinta-feira", closingBalance: 410119.25, description: "Recebimento de vendas do dia", amount: 96390, balance: 390269.25, type: "credit" },
    { id: "4", groupKey: "2024-10-23", groupLabel: "23 de outubro, quarta-feira", closingBalance: 293879.25, description: "Reembolso de despesas", amount: 30200, balance: 293879.25, type: "debit" },
    { id: "5", groupKey: "2024-10-23", groupLabel: "23 de outubro, quarta-feira", closingBalance: 293879.25, description: "Crédito de vendas", amount: 22150, balance: 324079.25, type: "credit" },
  ];

  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

  const separatorStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 12px",
    fontSize: "var(--font-size-3)",
    color: "var(--table-text-color-secondary)",
    backgroundColor: "var(--table-cell-background)",
    borderBottom: "1px solid var(--table-border-color)",
  };

  return (
    <ThemePreview>
      <Table<TEntry>
        data={data}
        keyExtractor={(item) => item.id}
        renderHeader={() => (
          <>
            <Header>Descrição</Header>
            <Header>Tipo</Header>
            <Header>Valor</Header>
            <Header>Saldo</Header>
            <Header.Action isFixed>Ações</Header.Action>
          </>
        )}
        renderRow={(item) => (
          <>
            <Cell.Text>{item.description}</Cell.Text>
            <Cell.Badge variant={item.type === "credit" ? "success" : "error"}>
              {item.type === "credit" ? "Crédito" : "Débito"}
            </Cell.Badge>
            <Cell.Price>{item.amount}</Cell.Price>
            <Cell.Price>{item.balance}</Cell.Price>
            <Cell.Actions isFixed>
              <Cell.ActionItem onClick={() => alert(`Detalhes: ${item.description}`)}>
                Detalhes
              </Cell.ActionItem>
            </Cell.Actions>
          </>
        )}
        groups={{
          by: (item) => item.groupKey,
          renderSeparator: (key, items) => (
            <div style={separatorStyle}>
              <span>{items[0].groupLabel}</span>
              <span>Saldo final do dia: R$ {formatCurrency(items[0].closingBalance)}</span>
            </div>
          ),
        }}
      />
    </ThemePreview>
  );
};

export const TableWithPages: StoryFn = () => {
  const generateFakeData = useCallback((quantity: number) => {
    const baseProducts = [
      "Camiseta",
      "Calça",
      "Boné",
      "Tênis",
      "Meia",
      "Cinto",
      "Relógio",
      "Chapéu",
      "Óculos",
      "Bolsa",
      "Mochila",
      "Carteira",
      "Sapato",
      "Sandália",
      "Sapatênis",
      "Chinelo",
      "Botina",
      "Bota",
      "Tênis de corrida",
      "Tênis de academia",
    ];

    return Array.from({ length: quantity }, (_, i) => {
      const baseProduct = baseProducts[i % baseProducts.length];
      return {
        id: `#${(i + 1).toString().padStart(3, "0")}`,
        product: `${baseProduct} ${i + 1}`,
        price: parseFloat((Math.random() * 400 + 9.99).toFixed(2)),
      };
    });
  }, []);

  const data = useMemo(() => generateFakeData(50), [generateFakeData]);

  return (
    <ThemePreview>
      <Table
        data={data}
        renderHeader={() => (
          <>
            <Header width="80px">Id</Header>
            <Header>Produto</Header>
            <Header>Preço</Header>
          </>
        )}
        renderRow={(item) => {
          return (
            <>
              <Cell.Text>{item.id}</Cell.Text>
              <Cell.Text>{item.product}</Cell.Text>
              <Cell.Price>{item.price}</Cell.Price>
            </>
          );
        }}
      />
    </ThemePreview>
  );
};
