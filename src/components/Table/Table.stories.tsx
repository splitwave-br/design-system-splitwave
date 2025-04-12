import { Meta, StoryFn } from "@storybook/react";
import { Cell, Header, Table } from ".";
import { ThemePreview } from "../ThemePreview";
import React, { useCallback, useMemo } from "react";

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
