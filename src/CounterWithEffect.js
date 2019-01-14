import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Yout click ${count} times`
    console.log('subscribe', count)

    return () => {
      console.log(`unsubscribe ${count}`)
    }
  })

  return (
    <div>
      {count}
      <button onClick={() => setCount(count+1)}>+</button>
      <button onClick={() => setCount(count-1)}>-</button>
    </div>
  )
}

export default Counter
