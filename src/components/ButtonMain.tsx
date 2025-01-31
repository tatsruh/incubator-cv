import styled from "styled-components";
import React from 'react';
import {CvTheme} from "../styles/Theme";
type LinkProps = {
    src: string;
    text: string;
    color?: string;
}

export const ButtonMain = (props:LinkProps) => {
    return (
        <LinkStyled color={props.color} href={props.src} target="_blank">
            {props.text}
        </LinkStyled>
    );
};

// const ButtonMainStyled = styled.button   `
//     max-width: 200px;
//     height: 50px;
//     background-color: ${props => props.color || CvTheme.colors.accent}
// `

const LinkStyled = styled.a `
    justify-content: center;
    color: white;
    width: 140px;
    height: 50px;
    background-color: ${props => props.color || CvTheme.colors.accent};
    display: flex;
    align-items: center;
    padding: 0 15px;
    font-size: 16px;
    text-align: center;
    border: 2px solid #7562E0;
    border-radius: 8px;
    &:hover {
        cursor: pointer;
        background-color: ${CvTheme.colors.hover};
        border-color: ${CvTheme.colors.hover};
    }
 
`
export default ButtonMain