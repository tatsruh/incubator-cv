import styled, {css} from "styled-components";

import React, {useState} from 'react';
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

const BurgerMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onClickBtn = () => { setMenuIsOpen(!menuIsOpen) }
    const onClickWrapper = () => {setMenuIsOpen(false)}
    return (
        <BurgerMenuStyled >
            <BurgerButton isOpen={menuIsOpen} onClick={onClickBtn}>
                <span></span>
            </BurgerButton>
            <Wrapper isOpen={menuIsOpen} onClick={onClickWrapper}>
                <UlStyled>
                    {items.map((item, index) => {
                        return <LiStyled key={index}><a href={`#${item.href}`}>
                            {item.title}
                            <Mask> <span> {item.title}</span> </Mask>
                            <Mask> <span> {item.title}</span> </Mask>
                        </a></LiStyled>
                    })}

                </UlStyled>
            </Wrapper>

        </BurgerMenuStyled>
    );
};

export default BurgerMenu;

const BurgerMenuStyled = styled.nav  `
display: none;
  
    @media ${CvTheme.media.tablet} {
        display: block;
        
    }
 

`
const Wrapper = styled.div <{isOpen:boolean}> `
    display: none;
    ${props => props.isOpen && css <{isOpen:boolean}> `
        display: flex;
        align-items: center;
        justify-content: center;
        
    `}
    ul {
    flex-direction: column;
    align-items: center;
        justify-content: center;
    background-color: ${CvTheme.colors.darkBackground} ;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
}
`
const BurgerButton = styled.button <{isOpen:boolean}>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
   z-index: 9999999999;

    span {
        background-color: white;
        display: block;
        width: 36px;
        height: 2px;
        position: absolute;
        left: 40px;
        bottom: 60px;
      ${props => props.isOpen && css <{isOpen:boolean}> `
         background-color: rgba(255,0,0,0);
         `}
        &::before {
            content: '';
            background-color: white;
            display: block;
            width: 36px;
            height: 2px;
            transform: translateY(10px);
            ${props => props.isOpen && css <{isOpen:boolean}> `
       transform: translateY(0) rotate(45deg);
        
    `}
        }
        &::after {
            content: '';
           background-color: white;
            display: block;
            width: 36px;
            height: 2px;
            transform: translateY(-12px);
            ${props => props.isOpen && css <{isOpen:boolean}> `
       transform: translateY(-2px) rotate(-45deg);
        
    `}


        }
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

