import styled from "styled-components";

import React from 'react';

const Menu = (props: {menuArray: Array<string>}) => {
    return (
       <MenuStyled>
           <ul>
               {props.menuArray.map((item, index) => {
                   return <li key={index}><a href="">{item}</a></li>
               })}

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