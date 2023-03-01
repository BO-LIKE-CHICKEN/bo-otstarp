import React from "react";
import { action } from "@storybook/addon-actions";
import TestButton from "./TestButton";

export default {
  title: "TestButton",
  component: TestButton,
};

export const Default = (): JSX.Element => (
  <TestButton label="Default Button" onClick={action("clicked")} />
);

export const Custom = (): JSX.Element => (
  <TestButton label="Custom Button" onClick={action("clicked")} />
);
