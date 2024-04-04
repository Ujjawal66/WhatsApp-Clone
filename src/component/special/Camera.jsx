import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
position: absolute;
padding: 2rem 2rem;
z-index: 100;
top: 0; left: 0;
bottom: 0; right: 0;
background-color: black;
color: #fff;
font-size: 1.3rem;
display: flex;
flex-direction: column;
justify-content: space-between;
.flex1, .flex2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex2 {
  >div {
    width: 3.8rem;
    height: 3.8rem;
    background-color: #fff;
    border-radius: 50%;
    border: 8px solid #000;
    outline: 4px solid #fff;
    position: relative;
    ::after {
      content: "";
      position: absolute;
      top: -80%;left: 35%;
      width: 0.5rem;
      height: 2px;
      transform: rotate(-30deg) translate(0, 0);
      background-color: #fff;
      border-radius: 1px;
  }
  ::before {
      content: "";
      position: absolute;
      top: -80%;right: 35%;
      width: 0.5rem;
      height: 2px;
      transform: rotate(30deg) translate(0, 0);
      background-color: #fff;
      border-radius: 1px;
  }
  }
}
i {
  width:2.2rem;
  height:2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
i:hover {
  background-color: #d3d3d350;
}

`

const Camera = ({onChange}) => {
  return (
    <Container>
      <div className="flex1">
        <i className="fa-solid fa-xmark" onClick={() => onChange(null)}></i>
        <i className="fa-solid fa-bolt-lightning"></i>
      </div>
      <div className="flex2">
        <i className="fa-solid fa-image"></i>
        <div></div>
        <i className="fa-solid fa-arrows-rotate"></i>
      </div>
    </Container>
  )
}

export default Camera;