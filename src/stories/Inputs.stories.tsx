import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input } from "components";

export default {
  title: "misterdev32_s_application1/Input",
  component: Input,
};

export const SampleInput: Story<any> = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "square",
  color: "deep_purple_A700",
  size: "xs",
  variant: "fill",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
