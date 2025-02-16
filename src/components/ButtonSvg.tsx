import styled from "styled-components";
import React from 'react';
import {Icon} from "./Icon";
import { CvTheme } from "../styles/Theme";
type ButtonSvgProps = {
    buttontext?: string;
    idSvg?: string;
    color?: string;
    width: string;
    href?: string
}
 const ButtonSvg = (props:ButtonSvgProps) => {
    return (
        <ButtonSvgStyled  href={props.href} color={props.color} width={props.width}>
            <ButtonText>{props.buttontext}</ButtonText>
            <Icon width="20px" height="20px" viewBox="20px" idSvg={props.idSvg}/>

        </ButtonSvgStyled>
    );
};
export const ButtonText = styled.a`
    font-size: 16px;
    color: white;
    font-weight: 600;
    margin: 12px 5px;
`

export const ButtonSvgStyled = styled.a<ButtonSvgProps> `
    width: ${props => props.width};
     height: 50px;
     background-color: ${props => props.color || CvTheme.colors.accent};
     display: flex;
     align-items: center;
     justify-content: space-around;
     padding: 10px 20px;
    font-size: 16px;
    text-align: center;
    margin: 50px;
    margin-left: 0;
    
   
     border: 2px solid #7562E0;
     border-radius: 8px;
     &:hover {
         cursor: pointer;
         background-color: ${CvTheme.colors.hover};
         border-color: ${CvTheme.colors.hover};
     }
 `
export default ButtonSvg;