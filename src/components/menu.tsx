import styled from "styled-components";

import React from 'react';
import { CvTheme } from "../styles/Theme";

const Menu = (props: {menuArray: Array<string>}) => {
    return (
       <MenuStyled>
           <UlStyled>
               {props.menuArray.map((item, index) => {
                   return <LiStyled key={index}><a href="">{item}</a></LiStyled>
               })}

           </UlStyled>
       </MenuStyled>
    );
};

export default Menu;
const MenuStyled = styled.nav `

`
const UlStyled = styled.ul `
    display: flex;
    gap:50px

`
const LiStyled = styled.li `
a {
    color: white;
    font-weight: 600;
    font-size: 18px;
    &:hover {
        color: ${CvTheme.colors.accent}
    }
}
`