import styled from "styled-components";

import React from 'react';
import { CvTheme } from "../styles/Theme";
const items = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "About Me",
        href: "about"
    },
    {
        title: "Skills",
        href: "skills"
    },
    {
        title: "Projects",
        href: "projects"
    },
    {
        title: "Contact",
        href: "contact"
    },

]

const Menu = () => {
    return (
       <MenuStyled>
           <UlStyled>
               {items.map((item, index) => {
                   return <LiStyled key={index}><a href={`#${item.href}`} >
                       {item.title}
                       <Mask> <span> {item.title}</span> </Mask>
                       <Mask> <span> {item.title}</span> </Mask>
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