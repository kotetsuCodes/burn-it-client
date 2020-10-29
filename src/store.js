import React, { createContext, useReducer } from 'react'

const initialState = { count: 0 }
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ( {children}) => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log('state', state)

    switch(action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        throw new Error()
      }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }

