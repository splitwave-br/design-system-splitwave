# Table

Tabela com suporte a paginação (interna ou externa), responsividade mobile, estado de loading via skeleton e layout em CSS Grid.

---

## Uso básico

```tsx
import { Table, Header, Cell } from "design-system"

type TData = {
  id: string
  date: Date
  name: string
  price: number
  status: string
}

function Component() {
  return (
    <Table<TData>
      data={[
        { id: "A1", date: new Date(), name: "Thiago Nunes", price: 1000, status: "Pendente" },
        { id: "A2", date: new Date(), name: "Lucas Costa", price: 1500, status: "Fechado" },
      ]}
      renderHeader={() => (
        <>
          <Header.Date>Data</Header.Date>
          <Header identifier>Cliente</Header>
          <Header>Valor</Header>
          <Header>Status</Header>
          <Header.Action isFixed />
        </>
      )}
      renderRow={({ date, name, price, status }) => (
        <>
          <Cell.Date>{date}</Cell.Date>
          <Cell.Text>{name}</Cell.Text>
          <Cell.Price>{price}</Cell.Price>
          <Cell.Badge variant="success" size="md">{status}</Cell.Badge>
          <Cell.Actions isFixed>
            <Cell.ActionItem onClick={() => {}}>Editar</Cell.ActionItem>
          </Cell.Actions>
        </>
      )}
    />
  )
}
```

---

## Props do `Table`

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `data` | `T[]` | — | Array de dados a renderizar |
| `renderHeader` | `() => JSX.Element` | — | Fragment com componentes `Header.*` |
| `renderRow` | `(item: T) => JSX.Element` | — | Fragment com componentes `Cell.*` |
| `renderEmptyState` | `() => JSX.Element` | — | Renderizado quando `isEmpty` é `true` |
| `isEmpty` | `boolean` | `false` | Exibe o estado vazio em vez das linhas |
| `onRowClick` | `(item: T) => void` | — | Callback ao clicar em uma linha (adiciona hover) |
| `keyExtractor` | `(item: T, index: number) => string` | `item.id` | Chave única por linha |
| `pagination` | `TPagination` | — | Controle externo de paginação (ver abaixo) |

---

## Paginação

### Interna (automática)

Não passe a prop `pagination`. O hook `usePagination` divide `data` em páginas de `limit` itens (padrão: 15) no cliente, com 300 ms de delay simulado entre páginas.

### Externa (controlada)

Passe o objeto `pagination` para controlar o estado fora do componente — útil quando os dados vêm de uma API paginada.

```tsx
<Table
  data={currentPageRows}
  pagination={{
    currentPage,       // índice base 0
    totalPages,
    pages,             // T[][] opcional — usado para cache local de páginas
    isLoading,
    limit: 20,
    onClickNextPage:   handleNext,
    onClickPrevPage:   handlePrev,
    onPageInputChange: handleGoTo,
  }}
  ...
/>
```

O componente `Pagination` exibe botões Anterior/Próximo e um input de página com debounce de 500 ms. O valor do input é clampado entre 1 e `totalPages`.

---

## Layout de colunas

A tabela usa **CSS Grid**. As larguras das colunas são calculadas a partir dos `Header.*` na ordem em que aparecem no `renderHeader`:

| Prop no `Header` | Comportamento no grid |
|---|---|
| `width="200px"` | Coluna fixa no valor informado |
| `minWidth="120px"` | `minmax(120px, 1fr)` |
| sem props | `1fr` |

Variantes tipadas têm larguras padrão embutidas em `Header/constants.ts`:

| Variante | Largura padrão |
|---|---|
| `Header.Date` | `140px` |
| `Header.Uuid` | `minmax(120px, 1fr)` |
| `Header.Action` | `100px` |

---

## Comportamento mobile

Detectado via `useWindowSize`. Em mobile:

- O header é **ocultado**.
- O grid passa a ser `"auto 1fr"` (duas colunas: label + valor).
- Cada linha exibe o nome da coluna ao lado de cada célula.
- A coluna marcada com `identifier` no `Header` é movida para o **topo da linha** (posição de destaque). Se nenhuma coluna tiver `identifier`, a primeira é usada.

```tsx
<Header identifier>Nome do Cliente</Header>
```

---

## Estado de loading

Quando `pagination.isLoading` é `true`, o componente renderiza `FakeRows`: linhas com `Cell.Skeleton` no lugar dos dados reais, mantendo a estrutura do grid.

---

## Componentes `Header`

| Componente | `displayName` | Quando usar |
|---|---|---|
| `<Header>` | — | Coluna genérica |
| `<Header.Date>` | `"Date"` | Colunas de data (largura fixa 140 px) |
| `<Header.Uuid>` | `"Uuid"` | Identificadores longos (min 120 px) |
| `<Header.Action>` | `"Action"` | Coluna de ações (largura fixa 100 px) |

Props comuns: `isFixed`, `width`, `minWidth`, `identifier`.

---

## Componentes `Cell`

| Componente | Props principais | Descrição |
|---|---|---|
| `Cell.Text` | `isFixed`, `shouldTruncateText`, `canCopy`, `onCopy` | Texto genérico; copia para clipboard ao clicar quando `canCopy` |
| `Cell.Date` | `showTime` (padrão `true`) | Formata `Date \| string` como `DD/MM/YY` + `HH:mm` via dayjs |
| `Cell.Price` | `hasHighlight` | Moeda via `formatCurrency`; com `hasHighlight`, colore positivo/negativo |
| `Cell.Badge` | `variant`, `size` (props do `Badge`) | Wrapper do componente `Badge` |
| `Cell.Actions` | `isFixed`, `renderTrigger`, `onClick` | Dropdown de ações; trigger padrão é o ícone `more` |
| `Cell.ActionItem` | — | Item do dropdown (re-export de `Dropdown.Item`) |
| `Cell.Image` | `src` | Imagem com estilo aplicado via CSS Module |
| `Cell.Card` | `className` | Wrapper com visual de card |
| `Cell.Placeholder` | — | Texto de placeholder estilizado |
| `Cell.Skeleton` | — | Usado internamente pelo estado de loading |

---

## Arquitetura interna

```
Table/
├── index.tsx              # Componente raiz — orquestra grid, paginação e mobile
├── types.ts               # ITableData, TTable, TCell
├── utils.ts               # getIdentifierIndex, reorderCells
├── variables.scss         # Variáveis CSS do componente
├── styles.module.scss     # Layout CSS Grid + estilos de row/header
├── hooks/
│   └── usePagination.tsx  # Paginação interna com estado e delay simulado
└── components/
    ├── Header/
    │   ├── index.tsx      # Header base + Header.Date, .Uuid, .Action
    │   ├── Date/          # displayName "Date"
    │   ├── Uuid/          # displayName "Uuid"
    │   ├── Action/        # displayName "Action"
    │   └── constants.ts   # COLUMNS_WIDTH — larguras padrão por displayName
    ├── Cell/
    │   ├── index.ts       # Namespace Cell com todos os sub-componentes
    │   ├── Text/
    │   ├── Date/
    │   ├── Price/
    │   ├── Badge/
    │   ├── Actions/
    │   ├── Image/
    │   ├── Card/
    │   ├── Placeholder/
    │   └── Skeleton/
    ├── Row/               # Renderiza uma linha, reordena células no mobile
    ├── Rows/              # Itera data[], delega ao FakeRows quando isLoading
    ├── FakeRows/          # Linhas skeleton para o estado de loading
    └── Pagination/        # UI de paginação com input debounced
```
