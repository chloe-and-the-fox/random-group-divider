import { SectionType } from "@design-components/Section";
import { ConfigStep, OptionStep, RegisterStep } from "@pages/Main/components";
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

export type StepTag = "config" | "register" | "option";
export type Step = SectionType & {
  _t: StepTag;
};

export type State = {
  currentStep: StepTag;
  currentStepStatus: Step;
  steps: Step[];
};

export type Action =
  | {
      _t: "OPEN_STEP";
      payload: {
        _t: Step["_t"];
      };
    }
  | {
      _t: "UPDATE_STEP";
      payload: {
        _t: Step["_t"];
        step: Partial<Step>;
      };
    };

const reducer = (prevState: State, action: Action) => {
  switch (action._t) {
    case "OPEN_STEP":
      const targetStep =
        prevState.steps.find((step) => step._t === action.payload._t) ||
        prevState.steps[0];
      targetStep.isOpen = true;
      targetStep.disabled = false;

      return {
        ...prevState,
        currentStep: action.payload._t,
        currentStepStatus: targetStep,
        steps: prevState.steps.map((step) => {
          if (step._t === action.payload._t) {
            return targetStep;
          }
          return { ...step, isOpen: false };
        }),
      };
    case "UPDATE_STEP":
      if (prevState.currentStep !== action.payload._t) {
        console.log("only current steps can be updated");
        return prevState;
      }
      return {
        ...prevState,
        currentStepStatus: {
          ...prevState.currentStepStatus,
          ...action.payload.step,
        },
        steps: prevState.steps.map((step) => {
          if (step._t === action.payload._t) {
            return { ...step, ...action.payload.step };
          }
          return step;
        }),
      };
  }
};

const initialState: State = {
  currentStep: "config",
  currentStepStatus: ConfigStep,
  // TODO: cannot reference this components before initialization --- these values are used in the components
  steps: [ConfigStep, RegisterStep, OptionStep],
};

const StepContext = createContext<State>(initialState);
const StepSetterContext = createContext<Dispatch<Action>>(() => {});

export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StepContext.Provider value={state}>
      <StepSetterContext.Provider value={dispatch}>
        {children}
      </StepSetterContext.Provider>
    </StepContext.Provider>
  );
};

export function useStep() {
  const state = useContext(StepContext);
  const setStep = useContext(StepSetterContext);

  return useMemo(() => ({ state, setStep }), [state, setStep]);
}
