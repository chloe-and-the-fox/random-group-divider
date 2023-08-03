import { ConfigStep, OptionStep, RegisterStep } from "@pages/Main/components";
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

export type Step = {
  index: number;
  title: ReactNode;
  isOpen: boolean;
  disabled: boolean;
  content: ReactNode;
};

export type State = {
  steps: Step[];
};

export type Action = {
  _t: "STEP_OPEN";
  payload: Step["index"];
};

const reducer = (prevState: State, action: Action) => {
  switch (action._t) {
    case "STEP_OPEN":
      return {
        ...prevState,
        steps: prevState.steps.map((step) =>
          step.index === action.payload
            ? { ...step, isOpen: true }
            : { ...step, isOpen: false }
        ),
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
