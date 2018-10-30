import React from 'react'
import { useInput, useOnMount, useOnUnmount } from 'react-hanger'

function Todo() {
  const newTodo = useInput('')
  useOnMount(() => {
    console.log('onMount')
  })

  useOnUnmount(() => {
    console.log('onUnmount')
  })

  return (
    <input value={newTodo.value} onChange={newTodo.onChange} />
  )
}

export default Todo