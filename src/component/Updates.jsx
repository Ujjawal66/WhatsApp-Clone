import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import persons, { defaultStatus } from '../api.js';
import { Li } from './Chats.jsx'

const NayeLi = styled(Li)`
&:hover {
  background-color: initial;
}
  &:hover .lo>div {
    transform: scale(0.9);
}
`
const UpDiv = styled.div`
  cursor: default;
  padding: 1rem;
  .smalis {
    font-size: 0.75em;
    color: gray;
  }
  h3 {
    font-weight: normal;
  }
  .one {
    border-bottom: 1px solid #e6e4e4;
  }
  .one, .two{
    >h3 {
      display: flex;
      padding: 1rem 0.5rem;
      padding-bottom: 0;
      justify-content: space-between;
      align-item: centre;
    }}
  .two {
    p {
      padding: 1rem 0.5rem;
      color: grey;
    }
  }
  .
`
const StaTop = styled.div`
position: absolute;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
background-color: #000;
color: #fff;
top:0;left: 0;
z-index: 100;
.lo:hover {
  background-color: #ffffff60;
  border-radius: 1rem 1.4rem 1.4rem 1rem;
}
>ul {
  background-color: #0000002d;
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
}
>img {
  object-fit: contain;
  height: 100%;
  width: 100%;
}
>video {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.op {
  position: absolute;
  bottom: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 1rem; */
  i {
    font-size: 1.4rem;
    animation: jump 0.5s ease-in infinite alternate-reverse;
  }
  
  @keyframes jump {
    100% {
        transform: translate(0, -1rem);
    }
  }
}
`
const Updates = () => {
  const [statue, setStatue] = useState(null);
  let stPerson = persons.filter((item) => item.status);

  useEffect(() => {
    if (statue) {
      let p = setTimeout(() => {
        setStatue(null);
      }, 33000);
    }
  }, [statue]);
  return (
    <>
      {statue ? <Staus item={statue} onClick={setStatue} /> :
        <UpDiv>
          <div className="one">
            <h3>Status <i className="fa-solid fa-ellipsis-vertical"></i></h3>
            <List persons={[defaultStatus]} decoration='plus' />
            <span className="smalis">Recent updates</span>
            <List persons={stPerson} decoration='round' setStatue={setStatue} />
          </div>
          <div className="two">
            <h3>Channels <i className="fa-solid fa-plus"></i></h3>
            <p>Stay updated on topic that matters to you. Find channels to follow below.</p>
          </div>
        </UpDiv>
      }
    </>
  );
}

const List = ({ persons, decoration, setStatue }) => {
  return (
    <div style={{ margin: '0.5rem 0' }}>
      <ul>
        {persons.map((item) => <Item key={item.id} item={item} decoration={decoration} setStatue={setStatue} />)}
      </ul>
    </div>
  );
}
const Item = ({ item, setStatue, decoration = null }) => {
  return (
    <NayeLi onClick={() => setStatue && setStatue(item)}>
      <div className='lo'>
        <img src={item.dp || 'images/default.jpg'} />
        {
          decoration &&
          <div className={decoration}>
            {(decoration == 'plus') ? <i className="fa-solid fa-plus"></i> : null}
          </div>
        }
      </div>
      <div className='big'>
        <div>
          <h3>{item.name}</h3>
        </div>
        <div>
          <span className='light small'>{item.lastSeen}</span>
        </div>
      </div>
    </NayeLi>
  )
}

const Staus = ({ item, onClick }) => {
  return (
    <StaTop>
      <div className="kalu"></div>
      <ul>
        <NayeLi>
          <div className='lo' onClick={() => onClick(null)}>
            <i className="fa-solid fa-arrow-left"></i>
            <img src={item.dp || 'images/default.jpg'} />
          </div>
          <div className='big'>
            <div>
              <h3>{item.name}</h3>
            </div>
            <div>
              <span className='light small'>{item.lastSeen}</span>
            </div>
          </div>
        </NayeLi>
      </ul>
      {item.isStatusImage? <img src={item.status}/>:
      <video src={item.status} autoPlay></video>}
      <div className="op">
        <i className="fa-solid fa-chevron-up"></i>
        <span>Reply</span>
      </div>
    </StaTop>
  )
}
export default Updates;