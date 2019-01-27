import React, { forwardRef, useRef, useImperativeHandle } from "react";

function FancyInput(props, ref) {
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    }
  }));
  return <input ref={inputRef} />
}

const MyInput = forwardRef(FancyInput)


const InputUser = () => {
  const myInput = useRef()
  const focus = () => {
    myInput.current.focus()
  }

  return (
    <div>
      <MyInput ref={myInput}/>
      <button onClick={focus}>focus</button>
    </div>
  )
}

export default InputUser