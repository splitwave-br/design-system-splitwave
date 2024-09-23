import type { StoryObj } from "@storybook/react";
declare const meta: {
    component: ({ children, variant, size, type, disabled, loading, className, ...props }: import("./index").ButtonProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Secondary: Story;
export declare const Outline: Story;
export declare const Danger: Story;
export declare const Success: Story;
export declare const Text: Story;
