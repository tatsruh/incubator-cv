import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/Wrapper";
import {Icon} from "../../../components/Icon";
import {CvTheme} from "../../../styles/Theme";

type SkillBoxProps = {
    idSVG?: string,
    title?:string,
    description?: string,
    colorTitle?: string,
}

export const Skillbox = (props: SkillBoxProps) => {
    return (
        <SkillBoxStyled as ={FlexWrapper} direction={'column'}>
            <Icon idSvg={props.idSVG}/>
            <SkillBoxTitle color={props.colorTitle}>{props.title}</SkillBoxTitle>
            <SkillBoxDescription>{props.description}</SkillBoxDescription>
        </SkillBoxStyled>
    );
};

const SkillBoxStyled = styled.div `
    width: 33%;
`
 export const SkillBoxTitle = styled.h3 <SkillBoxProps> `
    color: ${props => props.color || CvTheme.colors.accent}
    
`

const SkillBoxDescription = styled.p `
    color: white
`