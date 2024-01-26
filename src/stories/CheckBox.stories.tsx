import React from "react";
import { CheckBox } from "components";
import { Meta, Story } from "@storybook/react";

export default {
  title: "misterdev32_s_application1/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox: Story<any> = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  shape: "round",
  color: "black_900",
  size: "xs",
  variant: "outline",
  label: "Checkbox",
  inputClassName: "mr-1",
};
