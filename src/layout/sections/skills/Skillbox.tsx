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
    borderColor?: string
}

export const Skillbox = (props: SkillBoxProps) => {
    return (
        <SkillBoxStyled as ={FlexWrapper} direction={'column'} justify="start" borderColor={props.borderColor}>
            <Icon idSvg={props.idSVG} width="57px"/>
            <SkillBoxTitle color={props.colorTitle}>{props.title}</SkillBoxTitle>
            <SkillBoxDescription>{props.description}</SkillBoxDescription>
        </SkillBoxStyled>
    );
};
export const SkillBoxTitle = styled.h3 <SkillBoxProps> `
    color: ${props => props.color || CvTheme.colors.accent};
     font-size: 24px;
     font-weight: 600;
     margin-bottom: 15px;
   

 `

const SkillBoxStyled = styled.div <SkillBoxProps>  `
    max-width: 310px;
    aspect-ratio: 1/1;
    border: 3px solid;
    border-color: ${props => props.borderColor || CvTheme.colors.accent};
    border-radius: 16px;
    svg {
        margin-top: 45px;
        margin-bottom: 10px;
    }
    
    &:hover {
        border-color: ${CvTheme.colors.hover};
        cursor: pointer;
        ${SkillBoxTitle} {
            color: ${CvTheme.colors.hover}; // Новый цвет для SkillBoxTitle при наведении
        }
      
    }
    
    
`


const SkillBoxDescription = styled.p `
    color: white;
    text-align: center;
    font-weight: 500;
    font-size: 17px;
    margin: 0 20px;
`