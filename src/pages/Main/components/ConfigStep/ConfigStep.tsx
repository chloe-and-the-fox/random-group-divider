import { Step } from "@providers";

import { ConfigStepTitle } from "./ConfigStepTitle";
import { ConfigStepDescription } from "./ConfigStepDescription";
import { ConfigStepContent } from "./ConfigStepContent";

export const ConfigStep: Step = {
  _t: "config",
  title: <ConfigStepTitle />,
  subTitle: <ConfigStepDescription />,
  isOpen: false,
  disabled: false,
  content: <ConfigStepContent />,
  contentHeight: 0,
};
