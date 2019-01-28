import React, { useState, useEffect } from 'react'

const CountDown = () => {
  const [count, setCount] = useState(10)

  useEffect(() => {
    setInterval(() => {
      setCount(count => count - 1)
    }, 1000)

  }, [])

  return (
    <p>{count}</p>
  )
}

export default CountDown