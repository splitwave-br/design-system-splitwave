import type { StoryObj } from "@storybook/react";
declare const meta: {
    component: ({ name, size, className }: {
        name: import("./index").TIcons;
        size?: import("./index").TIconSizes;
        className?: string;
    }) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
