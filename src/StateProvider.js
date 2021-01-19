import React, { createContext, useContext, useReducer } from "react";

// prepare the data layer
export const StateProviderContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => (
  // children are all child component(s) that is wrapped under the StateProvider context
  <StateProviderContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateProviderContext.Provider>
);

// this gives access to the values for which actions have been dispatched
export const useStateProviderValue = () => useContext(StateProviderContext);
