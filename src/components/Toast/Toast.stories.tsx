// Toast.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { ToastProvider, useToast } from "./hooks/useToast";
import { Button } from "@/components/Button";

export default {
  title: "Components/Toast",
  tags: ["autodocs"],
  component: () => null, // Definido como null pois usaremos o ToastButtonDemo para exibir os Toasts
  decorators: [(Story) => <ToastProvider>{Story()}</ToastProvider>],
} as Meta;

let count = 0;
function ToastButtonDemo({ message, preset, title, timeout }: any) {
  const { openToast } = useToast();
  count++;

  return (
    <Button
      onClick={() =>
        openToast({
          message,
          preset,
          title: title && `${title} ${count}`,
          timeout,
        })
      }
    >
      Exibir Toast
    </Button>
  );
}

export const Default: StoryObj = {
  render: () => (
    <ToastButtonDemo message="Este é um toast padrão." timeout={3000} />
  ),
};

export const Success: StoryObj = {
  render: () => (
    <ToastButtonDemo
      message="Operação bem-sucedida!"
      preset="success"
      timeout={3000}
    />
  ),
};

export const Error: StoryObj = {
  render: () => (
    <ToastButtonDemo message="Ocorreu um erro!" preset="error" timeout={3000} />
  ),
};

export const CustomTitle: StoryObj = {
  render: () => (
    <ToastButtonDemo
      message="Mensagem personalizada com título"
      title="Atenção"
      timeout={3000}
    />
  ),
};

export const MultiplesMessages: StoryObj = {
  render: () => (
    <ToastButtonDemo
      message={["Mensagem 1", "Mensagem 2", "Mensagem 3", "Mensagem 4"]}
      title="Atenção"
      timeout={3000}
    />
  ),
};
