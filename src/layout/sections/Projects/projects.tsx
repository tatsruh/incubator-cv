import React from 'react';
import {FlexWrapper} from "../../../components/Wrapper";
import {SectionName} from "../../../components/SectionName";
import {Project} from "./Project/project";
import styled from "styled-components";
import { Container } from '../../../components/Container';
import ToDoListPic from '../../../assets/img/7590241.png';
import SneackersPic from '../../../assets/img/white-sneaker-2048px-9320.webp';
import ZooPic from '../../../assets/img/Nowa-zyrafa-w-lodzkim-zoo_16.jpg'


export const Projects = () => {
    return (
        <ProjectsStyled id={'projects'}>
          <Container>
              <SectionName title={'Featured projects:'}></SectionName>
              <ProjectText>I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects</ProjectText>
              <FlexWrapper justify="space-between" wrap="wrap">
                  <Project src={"https://tatsruh.github.io/todolist-withReduxOnly/"} srcGithub={"https://github.com/tatsruh/todolist-withReduxOnly"} srcIMG={ToDoListPic} title='To Do List' text='A simple To Do List with React-Redux'></Project>
                  <Project srcGithub={'https://github.com/tatsruh/sneackers-public'} src={'https://sneackers-public-rmvm.vercel.app/adidas'} srcIMG={SneackersPic} title='Sneackers Shop' text='A small shop using React-Routing v.6.4'></Project>
                  <Project src={'https://zoo-public-7d5f.vercel.app/'} srcGithub={'https://github.com/tatsruh/zoo-public'} srcIMG={ZooPic} title='Zoo Landing Page' text='A landing page using only React'></Project>
              </FlexWrapper>
          </Container>
        </ProjectsStyled>
    );
};

const ProjectsStyled = styled.section`
    position: relative;
${FlexWrapper} {
    gap: 17px;
    
}
    padding-bottom: 80px;
    `
const ProjectText = styled.p `
    font-size: 18px;
    color: white;
    margin-top: 16px;
    margin-bottom: 36px;
`
