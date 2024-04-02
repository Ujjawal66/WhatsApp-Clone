import React, { useCallback, useEffect, useState, useRef, useReducer } from "react";
import { NavigationC } from "./component/navigation/Navigation";
import Baate from "./component/Baate";
import SendMsg from "./component/SendMsg";

const Screen2 = ({person, backFunction, onSend}) => {
  const h1 = useRef();
  const h2 = useRef();
  const [hite, setHite] = useState([]);
  useEffect(() => {
    let newTop = h1.current.clientHeight
    let perHeight = (h1.current.clientHeight+h2.current.clientHeight)/innerHeight;
    setHite([newTop, 100 - (perHeight*100)]);
  }, [h1, h2]);
  
  return (
    <>
      <div id="ko">
        <NavigationC pp={person.dp} name={person.name} backFunction={backFunction} h={h1}/>
        <Baate list={person.conversation} hite={hite}/>
        <SendMsg onSend={onSend} h={h2}/>
      </div>
    </>
  )
}

export default Screen2;