import styled from "styled-components";
import React from 'react';
import {CvTheme} from "../styles/Theme";
import {ButtonSvgStyled, ButtonText } from "./ButtonSvg";


export const ButtonMain = (props:ButtonMainProps) => {
    return (
        <ButtonMainStyled width={props.width} color={props.color}>
            <ButtonText>{props.buttontext}</ButtonText>


        </ButtonMainStyled>
    );
};

// const ButtonMainStyled = styled.button   `
//     max-width: 200px;
//     height: 50px;
//     background-color: ${props => props.color || CvTheme.colors.accent}
// `
const ButtonMainStyled = styled(ButtonSvgStyled) `
    justify-content: center;
    
`
type ButtonMainProps = {
    buttontext?: string
    color?:string
width: string
}
export default ButtonMain