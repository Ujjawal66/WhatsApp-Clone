import React, { useCallback, useEffect, useState, useRef, useReducer } from "react";
import {NavigationA, NavigationB} from "./component/navigation/Navigation.jsx";
import Chats from "./component/Chats.jsx";
import Calls from "./component/Calls.jsx";
import Updates from "./component/Updates.jsx";
import Community from "./component/Community.jsx";
import Camera from "./component/special/Camera.jsx";

const Screen1 = ({onClick, chats}) => {
  const ht2 = useRef();
  const [top, setTop] = useState(0);
  const [active, setActive] = useState("chat");
  useEffect(() => setTop(`-${ht2.current.clientHeight}px`), []);

  const shownn = (key) => {
    switch (key) {
      case 'chat': 
        return <Chats onClick={onClick} chats={chats}/>
      case 'update': 
        return <Updates/>
      case 'call': 
        return <Calls />
      case 'community':
        return <Community />
    }
    return <Chats onClick={onClick} chats={chats}/>
  }
  
  const [display, setDisplay] = useState(null);

  return (
    <>
      {display ? <Camera onChange={setDisplay}/>:
        (<><header style={{position: 'sticky', top,zIndex: 20}}>
        <NavigationA logo="WhatsApp" ht2={ht2} onChange={setDisplay}/>
        <NavigationB ht2={ht2} onChange={setActive} active={active}/>
      </header>
      {shownn(active)}</>)
      }
    </>
  )
}

export default Screen1;