import React from 'react';
import styled from "styled-components";
export const Li = styled.li`
cursor: default;
position: relative;
display: flex;
padding: 0.75rem;
gap: 0.7rem;
  &:hover {
    background-color: #8080801a;
  }
  img {
    width: 3.1rem;
    height: 3.1rem;
    border-radius: 50%;
  }
  .big{
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1 1 auto;
  }
  .lo {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  .big>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .light {
    color: grey;
    font-size: 1em;
  }
  .small {
    font-size: 0.75em;
  }
  .notif {
    font-size: 0.8rem;
    display: flex;
    justify-content: center; align-items: center;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    background-color: #01e9af;
    color: #fff;
  }
  .y {
    max-width: 95%;
  }
  .plus {
    position: absolute;
    bottom: 0;
    right: 0;
    border: 2px solid #fff;
    color: #fff;
    /* transform: translate(0, -50%); */
    background-color: #03b689;
    border-radius: 50%;
    display: flex;
    justify-content: center; align-items: center;
    height: 1.4em;width: 1.4em;
}
.round {
    position: absolute;
    inset: -1px;
    border-radius: 50%;
    outline: 2px solid #03b689;
    background-color: transparent;
}
  h3 {
    font-weight: normal;
    font-size: 1.1em;
  }
`;

const Chats = ({onClick, chats}) => {
  return (
    <>
      <List chats={chats} onClick={onClick}/>
    </>
  )
}

const List =({chats, onClick}) => (
  <div style={{margin: '0.5rem 0'}}>
      <ul>
        {chats.map((item) => <Item key={item.id} item={item} onClick={onClick}/>)}
      </ul>
    </div>
)
const Item =({item, onClick}) => {
  return (
    <Li onClick={() => onClick(item.id)}>
      <img src={item.dp || 'images/default.jpg'} />
      <div className='big'>
        <div>
          <h3>{item.name}</h3>
          <span className='light small'>{item.lastSeen}</span>
        </div>
        <div>
          <span className='light'>{item.end}</span>
          {item.unread&&<span className='notif'>{item.unread}</span>}
        </div>
      </div>

    </Li>
  )
}

export default Chats;