import React from 'react';
import {FlexWrapper} from "../../../../components/Wrapper";
import styled from "styled-components";
import {ButtonMain} from "../../../../components/ButtonMain";
import { CvTheme } from '../../../../styles/Theme';


type ProjectProps = {
srcIMG: string,
    title:string,
    text:string,
    src: string,
    srcGithub: string,

}

export const Project = (props: ProjectProps) => {
    return (
        <ProjectWrapper as={FlexWrapper} direction="column">
            <Image src={props.srcIMG}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <FlexWrapper justify="center">
                <ButtonMain text="View Live" color="rgba(49, 49, 63, 1)" src={props.src}></ButtonMain>
                <ButtonMain text="Github Repo" src={props.srcGithub}></ButtonMain>
            </FlexWrapper>
        </ProjectWrapper>
    );
};
const ProjectWrapper = styled.div `
background-color: #31313F;
    max-width: 320px;
    max-height: 433px;
    padding-top: 16px;
    padding-bottom: 23px;
    border-radius: 8px;
    &:hover {
        cursor: pointer;
        h3 {
            color: ${CvTheme.colors.hover};
        };
        img {
            border-color: ${CvTheme.colors.hover};
        }
    }
    
    
`

const Image = styled.img`
    width: 100%;
    height: 200px;
    border: 1px solid transparent;
    border-radius: 8px;
    
`
const Title = styled.h3`
    color: ${CvTheme.colors.accent};
    font-size: 24px;
    
    
`
const Text = styled.p`
    color: white;
    font-size: 18px;
    padding: 0 20px;
`
