import React from 'react';
import {FlexWrapper} from "../../../components/Wrapper";
import styled from "styled-components";
import {Icon} from "../../../components/Icon";
import {CvTheme} from "../../../styles/Theme";

export const AboutMeComponent = (props:AboutMeComponentProps) => {
    return (
        <AboutMeComponentStyled as={FlexWrapper} direction="column" wrap="wrap" justify="flex-end" align="start" color = {props.color} >
    <Icon idSvg={props.idSVG}/>
            <Text>{props.text}</Text>
        </AboutMeComponentStyled>
    );
};

const AboutMeComponentStyled = styled.div `
    width: 235px;
    aspect-ratio: 1/1;
    background-color: ${props => props.color || CvTheme.colors.accent};
    margin-right: 15px;
    margin-top: 10px;

    &:hover {
        cursor: pointer;
        background-color: ${CvTheme.colors.hover};
    }
    svg {
        margin-left: 24px;
        margin-bottom: 10px;
    }
`
const Text = styled.span `
    font-size: 24px;
    font-weight: 600;
    color: white;
    margin-left: 15px;
    margin-bottom: 24px;
`
type AboutMeComponentProps = {
    color?:string
    idSVG: string
    text:string

}