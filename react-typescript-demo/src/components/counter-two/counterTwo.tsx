import React from 'react'
import {CounterTwoProps} from './counter-two.types'

function CounterTwo(props: CounterTwoProps) {
  return (
    <>
    <div>Counter two</div>
    <p>Count {props.count}</p>
    {
        props.increment && (
<button onClick={props.increment}>Increment</button>
        )
    }
    {
        props.decrement && (
<button onClick={props.decrement}>Decrement</button>
        )
    }
    
    </>
  )
}

export default CounterTwo;