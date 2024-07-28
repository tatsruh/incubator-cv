import React from 'react';
import {FlexWrapper} from "../../../../components/Wrapper";
import styled from "styled-components";
import ButtonMain from "../../../../components/ButtonMain";


type ProjectProps = {
srcIMG: string,
    title:string,
    text:string,

}

export const Project = (props: ProjectProps) => {
    return (
        <ProjectWrapper as={FlexWrapper} direction="column">
            <Image src={props.srcIMG}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <FlexWrapper>
                <ButtonMain buttontext="View Live" color="rgba(49, 49, 63, 1)"></ButtonMain>
                <ButtonMain buttontext="Github Repo"></ButtonMain>
            </FlexWrapper>
        </ProjectWrapper>
    );
};
const ProjectWrapper = styled.div `
background-color: gray`
const Image = styled.img`
`
const Title = styled.h3`
`
const Text = styled.p`
`
