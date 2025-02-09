import React from 'react';
import {FlexWrapper} from "../../../components/Wrapper";
import {SectionName} from "../../../components/SectionName";
import {Project} from "./Project/project";
import styled from "styled-components";
import { Container } from '../../../components/Container';
import ToDoListPic from '../../../assets/img/7590241.png';
import convent from '../../../assets/img/green5.jpg';
import ZooPic from '../../../assets/img/Nowa-zyrafa-w-lodzkim-zoo_16.jpg'
import hotelPic from '../../../assets/img/AdobeStock_9211505-1600x1067.webp';


export const Projects = () => {
    return (
        <ProjectsStyled id={'projects'}>
          <Container>
              <SectionName title={'Featured projects:'}></SectionName>
              <ProjectText>I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects</ProjectText>
              <FlexWrapper justify="space-between" wrap="wrap">
                  <Project srcGithub={'https://github.com/tatsruh/convent-project'} src={'https://convent-project.vercel.app/'} srcIMG={convent} title='A Fantasy Convent Page' text='Made with React, Redux Toolkit, Motion.dev'></Project>
                  <Project src={"https://tatsruh.github.io/todolist-withReduxOnly/"} srcGithub={"https://github.com/tatsruh/todolist-withReduxOnly"} srcIMG={ToDoListPic} title='To Do List' text='A simple To Do List with React-Redux'></Project>
                  <Project src={'https://zoo-public-7d5f.vercel.app/'} srcGithub={'https://github.com/tatsruh/zoo-public'} srcIMG={ZooPic} title='Zoo Landing Page' text='A landing page using only React'></Project>
                  <Project src={'https://tatsruh.github.io/HotelProject/'} srcGithub={'https://github.com/tatsruh/HotelProject'} srcIMG={hotelPic} title='Hotel Page' text='A university project using only Native JS, HTML and CSS'></Project>

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
