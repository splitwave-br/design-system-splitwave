#### How to use

```ts
    import { Table, Header, Cell } from "@/components/Table"

    function Component() {
        return (
            <Table<TData>
                data={[
                    { id: 'A1', date: new Date(), name: 'Thiago Nunes', price: 1000, status: 'Pendente' },
                    { id: 'A2', date: new Date(), name: 'Lucas Costa Amaral', price: 1500, status: 'Fechado' }
                ]}
                renderHeader={() => (
                    <>
                        <Header>Data</Header>
                        <Header>Cliente</Header>
                        <Header>Valor Solicitado</Header>
                        <Header>Status</Header>
                        <Header isFixed />
                    </>
                )}
                renderRow={({ date, name, price, status }) => (
                    <>
                        <Cell.Date>{date}</Cell.Date>
                        <Cell.Text>{name}</Cell.Text>
                        <Cell.Price>{price}</Cell.Price>
                        <Cell.Badge variant='success' size='md'>
                        {status}
                        </Cell.Badge>
                        <Cell.Actions isFixed >
                            <Cell.ActionItem onClick={() => console.log("Clicou")}>
                                <Icon name="money-exchange" />
                                Alterar taxas
                            </Cell.ActionItem>
                            <Cell.ActionItem>
                                <Icon name="pencil-edit" />
                                Editar
                            </Cell.ActionItem>
                        </Cell.Actions>
                    </>
                )}
            />
        )
    }
```
