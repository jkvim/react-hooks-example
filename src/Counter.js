import React from 'react';
import withHooks, { useState } from './WithHooks'

function Counter() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <div>
      {count}
      <button onClick={() => setCount(count+1)}>+</button>
      <button onClick={() => setCount(count-1)}>-</button>
      <br />
      {name}
      <input onChange={(e) => {setName(e.target.value)}}/>
    </div>
  )
}

export default withHooks(Counter)
