import styled from "styled-components";

import React from 'react';
import { CvTheme } from "../styles/Theme";

const Menu = (props: {menuArray: Array<string>}) => {
    return (
       <MenuStyled>
           <UlStyled>
               {props.menuArray.map((item, index) => {
                   return <LiStyled key={index}><a href="">
                       {item}
                       <Mask> <span> {item}</span> </Mask>
                       <Mask> <span> {item}</span> </Mask>
                   </a></LiStyled>
               })}

           </UlStyled>
       </MenuStyled>
    );
};

export default Menu;

const MenuStyled = styled.nav `
    @media ${CvTheme.media.tablet} {
        display: none;
    }

`
const UlStyled = styled.ul `
    display: flex;
    gap:50px

`

const Mask = styled.span `
    position: absolute;
    top: 0;left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: white;
    &+& {
        top: 50%;
        span {
        transform: translateY(-50%);
            display: inline-block;
    }
    }
`
const LiStyled = styled.li `
    position: relative;
a {

    font-weight: 600;
    font-weight: 600;
    font-size: 24px;
    color: transparent;
}
    &::before {
        content: '';
        display: inline-block;
        height: 1px;
        background-color:white;
        position: absolute;
        top:50%;
        left:-5px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
        
    }
    &:hover {
        &::before {
            transform: scale(1);
        }
        ${Mask} {
            transform: skewX(17deg) translateX(5px);
            color: ${CvTheme.colors.hover};

            & + ${Mask} {
            skewX(17deg) translateX(-5px);
                color: ${CvTheme.colors.hover};
            };
        };
    };
    `