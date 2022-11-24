import React, { createContext } from 'react';
import PDP from "./PDP";

export const MyContext = createContext(undefined);

function ProviderDesignPattern() {

  return (
    <MyContext.Provider value="Hello World">
      <PDP />
    </MyContext.Provider>
  );
}

export default ProviderDesignPattern;