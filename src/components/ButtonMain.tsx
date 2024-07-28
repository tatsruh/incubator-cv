import styled from "styled-components";
import React from 'react';
import {CvTheme} from "../styles/Theme";


export const ButtonMain = (props:ButtonMainProps) => {
    return (
        <ButtonMainStyled color={props.color}>
            <ButtonText>{props.buttontext}</ButtonText>


        </ButtonMainStyled>
    );
};

const ButtonMainStyled = styled.button   `
    width: 200px;
    height: 50px;
    background-color: ${props => props.color || CvTheme.colors.accent}
`
const ButtonText = styled.span `
`
type ButtonMainProps = {
    buttontext?: string
    color?:string

}
export default ButtonMain