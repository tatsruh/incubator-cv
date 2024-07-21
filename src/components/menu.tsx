import styled from "styled-components";

import React from 'react';

const Menu = () => {
    return (
       <MenuStyled>
           <ul>
               <li><a href="">Home</a></li>
               <li><a href="">About Me</a></li>
               <li><a href="">Projects</a></li>
               <li><a href="">Contact</a></li>
           </ul>
       </MenuStyled>
    );
};

export default Menu;
const MenuStyled = styled.nav `
   ul {
       display: flex;
       gap: 50px;
   }
`