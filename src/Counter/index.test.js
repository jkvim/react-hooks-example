import React from 'react'
import 'react-testing-library/cleanup-after-each'
import {render, fireEvent} from 'react-testing-library'

import Counter from './CounterClass'

test('counter increments the count', () => {
  const {container} = render(<Counter />)
  const pTag = container.firstChild.childNodes[0]
  const button = container.firstChild.childNodes[1]

  expect(pTag.textContent).toBe('0')
  fireEvent.click(button)
  expect(pTag.textContent).toBe('1')
})