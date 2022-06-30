import React from 'react';
import styled from 'styled-components';
import ListEmployee from './employee';
import Logo from './logo';

const SideLeft:React.FC = () => {
  return (
    <Sidebar>
      <Logo />
      <ListEmployee></ListEmployee>
    </Sidebar>
  )
}

export default SideLeft;

const Sidebar = styled.div`
  background-color: #000000a1;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  min-width: 300px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 60px 0;
  height: 100vh;
`
