import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button } from '../../components/Button';
import { DrawerProvider, useDrawer } from './hooks/useDrawer';
import { Drawer } from './index';
import { ThemePreview } from '../ThemePreview';

export default {
  title: 'Components/Drawer',
  decorators: [
    (Story) => (
      <ThemePreview>
        <DrawerProvider>
          <Story />
        </DrawerProvider>
      </ThemePreview>
    ),
  ],
} as Meta;

const DrawerContent = ({ title = 'Detalhes' }: { title?: string }) => {
  const { closeDrawer } = useDrawer();

  return (
    <Drawer.Root>
      <Drawer.Header title={title} />
      <Drawer.Body>
        <p style={{ color: 'var(--colors-font-primary)', margin: 0 }}>
          Conteúdo do drawer. Role para ver o scroll.
        </p>
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} style={{ color: 'var(--colors-font-primary)', margin: 0 }}>
            Linha {i + 1} de conteúdo
          </p>
        ))}
      </Drawer.Body>
      <Drawer.Footer>
        <Button variant="tertiary" onClick={closeDrawer} style={{ flex: 1 }}>
          Cancelar
        </Button>
        <Button onClick={closeDrawer} style={{ flex: 1 }}>
          Confirmar
        </Button>
      </Drawer.Footer>
    </Drawer.Root>
  );
};

export const Default: StoryFn = () => {
  const { openDrawer } = useDrawer();

  return (
    <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Button onClick={() => openDrawer(<DrawerContent />)}>
        Abrir Drawer
      </Button>
    </div>
  );
};

export const Sizes: StoryFn = () => {
  const { openDrawer } = useDrawer();

  return (
    <div style={{ height: '500px', display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'center' }}>
      <Button variant="tertiary" onClick={() => openDrawer(<DrawerContent title="Small (320px)" />, { size: 'sm' })}>
        sm — 320px
      </Button>
      <Button onClick={() => openDrawer(<DrawerContent title="Medium (450px)" />, { size: 'md' })}>
        md — 400px
      </Button>
      <Button onClick={() => openDrawer(<DrawerContent title="Large (560px)" />, { size: 'lg' })}>
        lg — 560px
      </Button>
    </div>
  );
};

const NestedDrawerContent = () => {
  const { openDrawer } = useDrawer();

  return (
    <Drawer.Root>
      <Drawer.Header title="Drawer 1" />
      <Drawer.Body>
        <p style={{ color: 'var(--colors-font-primary)', margin: 0 }}>
          Clique para abrir um segundo drawer sobre este.
        </p>
      </Drawer.Body>
      <Drawer.Footer>
        <Button
          style={{ flex: 1 }}
          onClick={() =>
            openDrawer(
              <Drawer.Root>
                <Drawer.Header title="Drawer 2 (stacked)" />
                <Drawer.Body>
                  <p style={{ color: 'var(--colors-font-primary)', margin: 0 }}>
                    Segundo drawer empilhado sobre o primeiro.
                  </p>
                </Drawer.Body>
                <Drawer.Footer>
                  <Button style={{ flex: 1 }} onClick={() => {}}>
                    Fechar
                  </Button>
                </Drawer.Footer>
              </Drawer.Root>
            )
          }
        >
          Abrir Drawer 2
        </Button>
      </Drawer.Footer>
    </Drawer.Root>
  );
};

export const Stacked: StoryFn = () => {
  const { openDrawer } = useDrawer();

  return (
    <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Button onClick={() => openDrawer(<NestedDrawerContent />)}>
        Abrir Drawers Empilhados
      </Button>
    </div>
  );
};

export const NoCloseOnOverlay: StoryFn = () => {
  const { openDrawer } = useDrawer();

  return (
    <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onClick={() =>
          openDrawer(<DrawerContent title="Não fecha no overlay" />, {
            closeOnOverlayClick: false,
          })
        }
      >
        Abrir (sem fechar no overlay)
      </Button>
    </div>
  );
};
