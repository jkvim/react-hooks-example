import React, { useState } from 'react'

const Child = ({ name, onChange }) => {
  console.log('render', name)
  return (
    <div>
      <p>name: {name}</p>
      <input onChange={onChange}/>
    </div>
  )
}

const useInput = (initialValue) => {
  const [state, setState] = useState(initialValue)

  const handleInputChange = (event) => {
    setState(event.target.value)
  }
  return [state, handleInputChange]
}


const Parent = () => {
  const [foo, setFoo] = useInput('foo')
  const [bar, setBar] = useInput('bar')

  return (
    <div>
      <Child name={foo} onChange={setFoo} />
      <Child name={bar} onChange={setBar} />
    </div>
  )
}

export default Parent