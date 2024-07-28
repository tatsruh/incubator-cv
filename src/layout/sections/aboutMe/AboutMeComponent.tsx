import React from 'react';
import {FlexWrapper} from "../../../components/Wrapper";
import styled from "styled-components";
import {Icon} from "../../../components/Icon";
import {CvTheme} from "../../../styles/Theme";

export const AboutMeComponent = (props:AboutMeComponentProps) => {
    return (
        <AboutMeComponentStyled as={FlexWrapper} direction="column" justify="flex-end" align="start" color = {props.color} >
    <Icon idSvg={props.idSVG}/>
            <Text>{props.text}</Text>
        </AboutMeComponentStyled>
    );
};

const AboutMeComponentStyled = styled.div `
    width: 255px;
    height: 255px;
    background-color: ${props => props.color || CvTheme.colors.accent};
    margin-right: 15px;
`
const Text = styled.span `
`
type AboutMeComponentProps = {
    color?:string
    idSVG: string
    text:string

}