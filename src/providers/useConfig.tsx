import {
  Dispatch,
  ReactNode,
  Reducer,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

type Member = string;

export type Combinations = Member[];

export type State = {
  memberCount: number | null;
  groupCount: number | null;
  memberList: Member[] | null;
  higherCombination: Combinations | null;
  lowerCombination: Combinations | null;
};

export type Action =
  | {
      _t: "UPDATE_CONFIG";
      payload: {
        memberCount: number;
        groupCount: number;
      };
    }
  | {
      _t: "UPDATE_REGISTER";
      payload: {
        memberList: Member[];
      };
    }
  | {
      _t: "UPDATE_OPTION";
      payload: {
        higherCombination: Combinations;
        lowerCombination: Combinations;
      };
    };

const reducer: Reducer<State, Action> = (prevState: State, action: Action) => {
  switch (action._t) {
    case "UPDATE_CONFIG":
      return {
        ...prevState,
        memberCount: action.payload.memberCount,
        groupCount: action.payload.groupCount,
      };
    case "UPDATE_REGISTER":
      return {
        ...prevState,
        memberList: action.payload.memberList,
      };
    case "UPDATE_OPTION":
      return {
        ...prevState,
        higherCombination: action.payload.higherCombination,
        lowerCombination: action.payload.lowerCombination,
      };
  }
};

const initialState: State = {
  memberCount: null,
  groupCount: null,
  memberList: null,
  higherCombination: null,
  lowerCombination: null,
};

const ConfigContext = createContext<State | null>(null);
const ConfigSetterContext = createContext<Dispatch<Action> | null>(null);

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ConfigContext.Provider value={state}>
      <ConfigSetterContext.Provider value={dispatch}>
        {children}
      </ConfigSetterContext.Provider>
    </ConfigContext.Provider>
  );
};

export function useConfig() {
  const config = useContext(ConfigContext);
  const setConfig = useContext(ConfigSetterContext);

  return useMemo(() => ({ config, setConfig }), [config, setConfig]);
}

// export type State =
//   | {
//       _t: "initial";
//     }
//   | {
//       _t: "config-complete";
//       memberCount: number;
//       groupCount: number;
//     }
//   | {
//       _t: "register-complete";
//       memberCount: number;
//       groupCount: number;
//       memberList: Member[];
//     }
//   | {
//       _t: "option-completed";
//       memberCount: number;
//       groupCount: number;
//       memberList: Member[];
//       higherCombination: Combinations;
//       lowerCombination: Combinations;
//     };
