import React, { useCallback, useEffect, useState, useRef, useReducer } from "react";
import Screen1 from "./Screen1.jsx";
import Screen2 from "./Screen2.jsx";
import chat from './api.js';

const nowTime = () => {
  let date = new Date(); 
  let h=date.getHours(), m=date.getMinutes(), og="AM";
  if(h>12) {h-=12;og="PM"}
  else if(h==0) h=12;
  return h+':'+m+' '+og;
}
const App = () => {
  const [chats, setChats] = useState(chat);
  const [person, setPerson] = useState(null);
  const chatClick = (id) => {
    let now = chats.map((p) => {
      if (p.id === id) {
        setPerson(p);
        return { ...p, unread: null };
      }
      else return p;
    });
    setChats(now);
  };
  
  const onSend = (event, value) => {
    event.preventDefault();
    if(!value) return;
    let convo = person.conversation.concat(
      { msg: value, mySide: true, time: nowTime() });
    let now = chats.map((p) => {
      if (p.id === person.id) {
        return { ...p, conversation: convo, end: value };
      }
      else return p;
    });
    setChats(now);
    setPerson({ ...person, conversation: convo });
  }

  return (
    <>
      {(!person) ? <Screen1 onClick={chatClick} chats={chats} /> :
        <Screen2 person={person} backFunction={setPerson} onSend={onSend} />}
    </>
  )
}
export default App;