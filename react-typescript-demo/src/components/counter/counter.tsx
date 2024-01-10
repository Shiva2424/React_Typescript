import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState<number>(0)
    const [amount, setAmount] = useState<number>(0)
  return (
    <>
    <div role="count">{count}</div>
<button onClick={()=> setCount(prev => prev + 1)}>Increment</button>
<div>
<input type='number' value={amount} onChange={(e) => setAmount(parseInt(e.target.value))}/>
<button onClick={() => setCount(amount)}>Set</button>
</div>
    </>
  )
}

export default Counter