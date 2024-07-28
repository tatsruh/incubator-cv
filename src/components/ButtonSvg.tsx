import styled from "styled-components";
import React from 'react';
import {Icon} from "./Icon";

export const ButtonSvg = (props:ButtonSvgProps) => {
    return (
        <ButtonSvgStyled>
            <ButtonText>{props.buttontext}</ButtonText>
            <Icon idSvg={props.idSvg}/>

        </ButtonSvgStyled>
    );
};

export default ButtonSvg;
 const ButtonSvgStyled = styled.button     `
`
const ButtonText = styled.span `
`

type ButtonSvgProps = {
     buttontext?: string;
     idSvg: string
}