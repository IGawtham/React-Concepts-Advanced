import React from 'react';
const Context = React.createContext()//we can create default provider value by passing arg to createContext method

const Provider = Context.Provider
const Consumer = Context.Consumer

export { Provider, Consumer }