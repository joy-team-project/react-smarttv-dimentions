import React, { createContext, useState } from "react";
import { scaleFont } from "./utils/scale.util";

export interface IDimentionContext {
  dimention: { width: number; height: number };
  setAppDimention: () => void;
}

const DEFAULT_VALUE = scaleFont();

export const DimentionContext = createContext({
  dimention: DEFAULT_VALUE,
  setAppDimention: () => {},
} as IDimentionContext);

export const DimentionProvider = ({ children }: { children: any }) => {
  const [dimention, setAppDimention] = useState(DEFAULT_VALUE);

  const setDimention = () => {
    setAppDimention(scaleFont());
  };

  return (
    <DimentionContext.Provider
      value={{
        dimention: dimention,
        setAppDimention: setDimention,
      }}
    >
      {children}
    </DimentionContext.Provider>
  );
};

export interface DimentionProps {
  dimentionContext?: IDimentionContext;
}

export function withDimentionContext<T>(
  WrappedComponent: React.ComponentType<T>
) {
  return class extends React.Component<T> {
    render() {
      return (
        <DimentionContext.Consumer>
          {(context) => (
            <WrappedComponent
              dimentionContext={context}
              {...(this.props as T)}
            />
          )}
        </DimentionContext.Consumer>
      );
    }
  };
}

export { scaleFont };
