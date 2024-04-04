import styled from "styled-components";
import React, { useCallback, useEffect, useState, useRef, useReducer } from "react";
const Form=styled.form`
display: flex;
gap: 0.7rem;
align-items: center;
position: fixed;
bottom: 0;
width: 100%;
input {
  width: 100%;
  height: 3rem;
  border-radius: 1.5rem;
  border: none;outline: none;
  padding: 1rem 3rem;
  font-size: 1.3rem;
  box-shadow: 0 0 2px 0 #0000006e;
  margin: 0.3rem;
}
label {flex: 1 1 auto;
  position: relative;}
button {
  display: flex;
    justify-content: center;align-items: center;
    border: none;
    height: 3rem;
    width: 3rem;
    background-color: #1bc097;
    border-radius: 50%;
    i {
      color: #fff;
    font-size: 1.2rem;
    }
}
i {
  position: absolute;
  font-size: 1.4rem;
  top: 50%;
  color: gray;
  transform: translate(0, -50%);
&.a {
  left: 1.3rem;
}
&.d{right: 0.6rem; transition: 0s}
&.c {right: 3rem; transition: 0s}
&.b {right: 5.7rem;}
}
`
const SendMsg =({onSend, h}) => {
  const [value, setValue] = useState("");
  const b = useRef();
  const c = useRef();
  const d = useRef();
  const handlerChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if(!value) {
      b.current.style.right = "5.7rem";
      c.current.style.display = "initial";
      d.current.style.display = "initial";
    }
    else {
      b.current.style.right = "0.6rem";
      c.current.style.display = "none";
      d.current.style.display = "none";
    }
  }, [value])
  

  return (
    <Form onSubmit={(event) => {
      onSend(event, value);
      setValue("");
    }} ref={h}>
      <label>
        <i className="fa-regular fa-face-smile-beam a"></i>
        <input type="text" placeholder="Message" value={value} onChange={handlerChange} autoFocus/>
        <i className="fa-solid fa-paperclip b" ref={b}></i>
        <i className="fa-brands fa-bitcoin c" ref={c}></i>
        <i className="fa-solid fa-camera d" ref={d}></i>
      </label>
      <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
    </Form>
  )
}

export default SendMsg;