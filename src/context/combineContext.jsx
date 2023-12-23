import React from 'react';
export const combineContexts = (...components) => {
  return components
    .reverse()
    .reduce(
      (AccumulatedComponents, CurrentComponent) => {
        return ({ children }) => {
          return (
            <AccumulatedComponents>
              <CurrentComponent>{children}</CurrentComponent>
            </AccumulatedComponents>
          );
        };
      },
      ({ children }) => <>{children}</>
    );
};