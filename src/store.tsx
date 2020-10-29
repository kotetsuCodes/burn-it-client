import React, { createContext, useReducer } from 'react';

type State = {
  count: number
}

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' }

type Context = {
  state: State,
  dispatch: React.Dispatch<State>
}

const initialState: State = {
  count: 0
}

const store = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

const { Provider } = store;

const mainReducer = (state: State, action: Action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {count: state.count + 1}
    case 'DECREMENT':
      return {count: state.count - 1}
    default:
      throw new Error()
  }
}


const StateProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }

