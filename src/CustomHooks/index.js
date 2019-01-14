import React, { useState } from 'react'

export function customHook() {
  const [value, setvalue] = useState('')

  return [value, setvalue]
}

export function useDouble(initialValue) {
  const [value, setValue] = useState(initialValue)

  function setDouble(value) {
    setValue(value * 2)
  }

  return [value, setDouble]
}

export default function CustomHooks() {
  const [value, setValue] = useDouble(0)

  return (
    <div>
      <p>{value}</p>
      <input onChange={(e) => {setValue(parseInt(e.target.value))}} />
    </div>
  )
}