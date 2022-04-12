import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import React from "react";
import { Props, TextboxWithCounter } from "./";

type Story = ComponentStoryObj<typeof TextboxWithCounter>;
type Meta = ComponentMeta<typeof TextboxWithCounter>;
const defaultArgs: Props = {
  title: "姓名",
  limit: 5,
};

export default {
  args: { ...defaultArgs },
  component: TextboxWithCounter,
  decorators: [
    (Story) => (
      <div style={{ padding: "24px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Template: Story = {
  storyName: "初期表示",
};

export const TypeText: Story = {
  storyName: "3文字入力",
  play: async ({ canvasElement }) => {
    const { getByRole } = within(canvasElement);
    await userEvent.type(getByRole("textbox"), "あいう");
  },
};

export const LimitOvered: Story = {
  storyName: "文字数制限オーバー",
  play: async ({ canvasElement }) => {
    const { getByRole } = within(canvasElement);
    await userEvent.type(getByRole("textbox"), "あいうえおかきくけこ");
  },
};

export const ShowTooltip: Story = {
  storyName: "ツールチップ表示",
  args: {
    describe: "空白を入れずに入力してください",
  },
  play: async ({ canvasElement }) => {
    const { getByText } = within(canvasElement);
    await userEvent.hover(getByText("姓名"));
  },
};
