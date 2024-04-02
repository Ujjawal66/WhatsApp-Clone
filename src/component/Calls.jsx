import React from 'react';
import styled from "styled-components";
import persons, { defaultStatus } from '../api.js';
import { Li } from './Chats.jsx'

const UpDiv = styled.div`
  cursor: default;
  padding: 1rem 0.5rem;
  .marg {
    margin:0 1rem;
  }
`

const NayeLi = styled(Li)`
&:hover {
  background-color: initial;
}
.rtIcon {
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  color: #008e6b;
}
.rtIcon:hover {
  background-color: #80808020;
}
.cover {
  position: absolute;
  inset: 0;
  background-color: #008e6b;
  color: #fff;
  border-radius: 50%;
  font-size: 1.1rem;
  display: flex; align-items: center; justify-content: center;
}
`
const Calls = () => {
  const defaultCalls = {...defaultStatus, name:"Create call link", lastSeen: "Share a link for your whatsapp call"};
  return (
    <UpDiv>
      <List persons={[defaultCalls]} decoration='cover' no={1}/>
      <span className='marg'>Recent</span>
      <RandomCall times={11} persons={persons}/>
    </UpDiv>
  );
}

const RandomCall = ({times, persons}) => {
  const loop = (tim, per) => {
    let arr = [];
    for(let i = 0; i < tim; i++) {
      let x = Math.round(Math.random() * (per.length-1));
      arr.push(per[x]);
    }
    return arr;
  }
  return(
    <List persons={loop(times, persons)} />
  )
}

const List = ({ persons, decoration, no }) => (
  <div style={{ margin: '0.5rem 0' }}>
    <ul>
      {persons.map((item, index) => <Item key={index} item={item} decoration={decoration} no={no}/>)}
    </ul>
  </div>
)
const Item = ({ item, decoration, no }) => {
  return (
    <NayeLi>
      <div className='lo'>
        <img src={item.dp || 'images/default.jpg'} />
        {decoration && <div className={decoration}><i className="fa-solid fa-link"></i></div>}
      </div>
      <div className='big'>
        <div>
          <h3>{item.name}</h3>
        </div>
        <div>
          <span className='light y'>{item.lastSeen}</span>
        </div>
      </div>
      {no?null: <div className="rtIcon"><i className="fa-solid fa-phone"></i></div>}
    </NayeLi>
  )
}

export default Calls;