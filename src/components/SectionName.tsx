import styled from "styled-components";

import React from 'react';
import {CvTheme} from "../styles/Theme";

type SectionNameProps =   {
    title?: string,
    color?: string,
    textalign?: string,
    fontsize?:string
}

export const SectionName = (props: SectionNameProps) => {
    return (
        <SectionNameStyled color={props.color} fontsize={props.fontsize} textalign={props.textalign}>{props.title}</SectionNameStyled>
    )
};

const SectionNameStyled = styled.h2 <SectionNameProps> `
    color: ${props => props.color || CvTheme.colors.accent};
    text-align: ${props => props.textalign || 'start'};
    font-size: ${props => props.fontsize || '32px'};
    font-weight: 600;
    -webkit-text-stroke: 1px black;
    

`
