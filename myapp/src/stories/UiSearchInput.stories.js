import { useState } from "react";
import UiSearchInput from "../ui-kit/UiSearchInput";

const meta = {
  title: "Ui-Kit/UiSearchInput",
  component: UiSearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "filled", "standard"],
    },
    size: {
      control: "select",
      options: ["small", "medium"],
    },
  },
};

export default meta;

const Template = (args) => {
  const [value, setValue] = useState("");
  return (
    <UiSearchInput
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  placeholder: "Поиск фильмов...",
};

export const WithValue = {
  args: {
    value: "Мстители",
    placeholder: "Поиск фильмов...",
    onChange: () => null,
  },
};

export const Sizes = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "300px" }}>
      <UiSearchInput size="small" placeholder="Small size" />
      <UiSearchInput size="medium" placeholder="Medium size" />
    </div>
  ),
};

export const Variants = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "300px" }}>
      <UiSearchInput variant="outlined" placeholder="Outlined" />
      <UiSearchInput variant="filled" placeholder="Filled" />
      <UiSearchInput variant="standard" placeholder="Standard" />
    </div>
  ),
};