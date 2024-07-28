import styled from "styled-components";

import React from 'react';
import {CvTheme} from "../styles/Theme";

type SectionNameProps =   {
    title?: string,
    color?: string,
    textalign?: string,
}

export const SectionName = (props: SectionNameProps) => {
    return (
        <SectionNameStyled color={props.color} textalign={props.textalign}>{props.title}</SectionNameStyled>
    );
};

const SectionNameStyled = styled.h2 <SectionNameProps> `
    color: ${props => props.color || CvTheme.colors.accent};
    text-align: ${props => props.textalign || 'start'}; ;
`