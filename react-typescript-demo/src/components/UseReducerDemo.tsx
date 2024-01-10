import React, { useReducer } from 'react'

type stateProp = {
    count: number,
}

type actionProp = {
    type: 'increment' | 'decrement',
    payload: number,
}

type updateActionProp = {
    type: 'reset',
}

const initialState = { count: 0};

const reducer = (state: stateProp, action: actionProp | updateActionProp) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.payload}
            case 'decrement':
            return {count: state.count - action.payload}
            case 'reset':
                return initialState;
        default:
            return state;
    }

}

function UseReducerDemo() {

    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <div>UseReducerDemo</div>
    <div>{state.count}</div>
    <button onClick={() => {dispatch({type: 'increment',payload: 1})}}>Increment</button>
    <button onClick={() => {dispatch({type: 'decrement',payload: 1})}}>Decrement</button>
    </>
  )
}

export default UseReducerDemo