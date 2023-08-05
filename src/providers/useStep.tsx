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

export type Step = SectionType & {
  index: number;
};

export type State = {
  steps: Step[];
};

export type Action =
  | {
      _t: "OPEN_STEP";
      payload: Step["index"];
    }
  | {
      _t: "UPDATE_STEP";
      payload: {
        index: Step["index"];
        step: Partial<Step>;
      };
    };

const reducer = (prevState: State, action: Action) => {
  switch (action._t) {
    case "OPEN_STEP":
      return {
        ...prevState,
        steps: prevState.steps.map((step) => {
          if (step.index === action.payload) {
            return { ...step, isOpen: true };
          }
          return { ...step, isOpen: false };
        }),
      };
    case "UPDATE_STEP":
      return {
        ...prevState,
        steps: prevState.steps.map((step) => {
          if (step.index === action.payload.index) {
            return { ...step, ...action.payload.step };
          }
          return step;
        }),
      };
  }
};

const initialState: State = {
  steps: [ConfigStep, RegisterStep, OptionStep],
};

const StepContext = createContext<State | null>(null);
const StepSetterContext = createContext<Dispatch<Action> | null>(null);

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
