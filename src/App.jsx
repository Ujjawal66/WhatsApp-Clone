import React, { useCallback, useEffect, useState, useRef, useReducer } from "react";
import Screen1 from "./Screen1.jsx";
import Screen2 from "./Screen2.jsx";
import chat from './api.js';

const nowTime = () => {
  let t = new Date().toLocaleTimeString().split(" ");
  let t1= t[0].split(":");
  let tim = t1.slice(0, 2).join(":") +" "+ t[1];
  return tim;
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