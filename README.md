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
## Using the lib

To instal the lib in your project run:
```npm install https://github.com/splitwave-br/design-system-splitwave.git```
