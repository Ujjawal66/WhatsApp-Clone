import styled from "styled-components";
import React, { useCallback, useEffect, useState, useRef, useReducer } from "react";

const Con = styled.div`
background-color: #bff8d3;
width: max-content;
padding: 0.2rem 0.4rem;
margin: 0.3rem;
border-radius: 0.5em;
display: flex;
justify-content: center;
align-items: center;
max-width: 90%;
box-shadow: 0 1px 2px 0 grey;

gap: 0.2rem;
p {
  padding: 0.3rem;
}
${({myside})=> myside};
span {
  align-self: flex-end;
    white-space: nowrap;;
    font-size: 0.75em;
    color: grey;
}
i {
  color:royalblue;
}
`

const Boop = styled.div`
  position: absolute;
  width:100%;
  padding: 0 0.4rem;
  bottom: ${({iss}) => !iss ? '0': 'initial'};
`
const Pop = styled.div`
width: 100%;
position: absolute;
top: ${({h1}) => h1}px;
bottom: ${({h2}) => h2}px;
overflow-y: scroll;
`
const Baate =({list, hite}) => {
  const scroling = useRef();
  const ffo = useRef();
  const [isScroll, setIsScroll] = useState(null);
  useEffect(() => {
    let nowScr = scroling.current.scrollHeight- ffo.current.clientHeight;
    (nowScr>0)?setIsScroll(1) : setIsScroll(null);
      ffo.current.scrollTop = nowScr;
  })
  
  return (
    <Pop h1={hite[0]} h2={hite[1]} ref={ffo}>
      <Boop ref={scroling} iss={isScroll}>
        <div id="huhy">🔒 Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more</div>
        {list.map((item, index) => <Mine key={index} {...item}/>)}
      </Boop>
    </Pop>
  )
}

const Mine =({msg, time, mySide}) => {
  return (
    <Con className="str" myside={mySide?'margin-left:auto':'background-color:#fff'}><p>{msg}</p><span id="non">{time}&nbsp;
    {mySide&&<i className="fa-solid fa-check-double"></i>}</span></Con>
  )
}

export default Baate;