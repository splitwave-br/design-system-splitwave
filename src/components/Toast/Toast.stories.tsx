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

function ToastButtonDemo({ message, success, error, title, timeout }: any) {
  const { openToast } = useToast();

  return (
    <Button
      onClick={() =>
        openToast({
          message,
          success,
          error,
          title,
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
      success={true}
      timeout={3000}
    />
  ),
};

export const Error: StoryObj = {
  render: () => (
    <ToastButtonDemo message="Ocorreu um erro!" error={true} timeout={3000} />
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
