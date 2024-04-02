import React from 'react';
import styled from "styled-components";

const Commm = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 5% 3%;
gap: 0.6rem;
img {
  width: 30rem;
  max-width: 40vw;
}
h3 {

}
p {
  width: 90%;
}
span {
  color: #008e6b;
}
button {
  margin: 2rem;
  background-color: #008e6b;
  color: #fff;
  border: none;
  width: 70%;
  height: 3rem;
  border-radius: 1.5rem;
  font-size: 1.1rem;
}
button:hover, button:focus {
  background-color: #008e6bd3;
}`

const Community = () => {
  return (
    <Commm>
      <img src="images/community.png" />
      <h3>Stay Connected with a community</h3>
      <p>Communities bring members together in topic-based groups, and make it easy to get admin announcements. Any community you're added to will appear here.</p>
      <span>See example communities</span>
      <button>Start your community</button>
    </Commm>
  )
}

export default Community;