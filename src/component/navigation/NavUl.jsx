import styled from "styled-components";
export const NavUl = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    background-color: #008e6b;
    font-size: 1.25em;
    color: white;
    gap: 1em;
    padding: 10px 0;

    li.icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2em;
      width: 2em;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        background-color: #ffffff1c;
      }
    }
    .log0{
      margin-right: auto;
      margin-left: 1em;
      cursor: default;
    }
`;
export const NavUl2 = styled.ul`
  box-shadow: 0 3px 2px 0 #00000010;
  list-style-type: none;
  display: flex;
  align-items: center;
  background-color: #008e6b;
  font-size: 1.25em;
  color: white;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2em;
    flex: 1 0 auto;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background-color: #ffffff1c;
    }
    &.active {
      border-bottom: 3px solid #fff;
    }
  }
  .smal {
    flex: 0 0 2.5em;
  }
`;

export const NavUl3 = styled.ul`
position: fixed;
top: 0;
width: 100%;
display: flex;
list-style-type: none;
align-items: center;
background-color: #008e6b;
color: #fff;
gap: 0.5rem;
font-size: 1.1rem;
img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-left: 0.2rem;
}
li {
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #c9c6c633;
    }
    cursor: pointer;
}
.b {
  height: 3rem;
  width: 4rem;
  border-radius: 1.5rem;
}
.c {
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
}
.d {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
}
h3 {
  font-weight: normal;
  font-size: 1.1em;
  width: auto;
}
span {
  color: #e2e2e2;
  font-size: 0.75em;
  width: 100%;
}
`;