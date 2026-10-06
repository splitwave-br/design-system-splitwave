# Design system

This repository is for the Seller and Admin projects. The application is built
using typescript.

# Content #

- [CHANGELOG.md](./CHANGELOG.md)

## Adding new components

To add new components for the library:

- Create a new folder for component inside src/components;
- Desenvolva e documente o componente usando storybook ```npm run storybook```;
- Run 
```npm run build```
__it will clean dist folder before generate it again and create the declarations files for each
component__

- Faça o push de sua branch
- Verifique o comportamento, instalando a lib no projeto em que você está trabalhando a partir da sua branch:
   ```bash
   npm install github:splitwave-br/design-system-splitwave#your-branch-name
- Quando estiver satisfeito com suas alterações, crie uma solicitação pull para mesclar seu branch com o dev.
- Atualize a main para geração automática de versionamento
## Using the lib

To instal the lib in your project run:
```npm install https://github.com/splitwave-br/design-system-splitwave.git```

## Internacionalização (i18n)

Os textos internos dos componentes (paginação, filtros, `DatePicker`, `Select`, `Toast` etc.) vêm de um dicionário da lib. O idioma é escolhido pelo `DesignSystemProvider`, que deve ficar **por fora** do `ModalProvider`, `ToastProvider` e `DrawerProvider` pra valer também no que eles renderizam.

```tsx
import { DesignSystemProvider, en, ptBR } from "design-system";

<DesignSystemProvider locale={locale === "en" ? en : ptBR}>
  <ToastProvider>
    <ModalProvider>{children}</ModalProvider>
  </ToastProvider>
</DesignSystemProvider>
```

Pra trocar só alguns textos, passe `messages` parcial. O resto continua vindo do `locale`:

```tsx
<DesignSystemProvider locale={en} messages={{ select: { empty: "Nothing here" } }}>
```

Sem provider, tudo sai em `pt-BR`. No Storybook, o idioma é trocado pelo ícone de globo na toolbar.

### Regras de negócio

- **RN-1** Sem `DesignSystemProvider`, todo texto e toda data renderizam idênticos aos de antes do i18n (`pt-BR`).
- **RN-2** Com `locale={en}`, os textos de `Pagination`, `Filter`, `DatePicker`, `ConfirmationModal`, `Select`, `MultiSelect`, `Input`, `Toast` e `Cell.Text` saem em inglês, inclusive os renderizados por `ModalProvider`, `ToastProvider` e `DrawerProvider`.
- **RN-3** Prop explícita do consumidor (`placeholder`, `title` do `Toast`) vence o dicionário.
- **RN-4** Calendário e rótulo do `Filter.Date` usam o `dateLocale` do dicionário. O valor emitido continua `yyyy-MM-dd`.
- **RN-5** `messages` parcial sobrescreve só as chaves passadas, o resto vem do `locale`.
- **RN-6** A lib não ganha dependência de runtime nova. `date-fns` e `react-day-picker` são `peerDependencies`.
- `Cell.Date` (`DD/MM/YY`) e `formatCurrency` (`pt-BR`) não mudam com o idioma.
