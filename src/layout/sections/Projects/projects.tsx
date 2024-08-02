import React from 'react';
import {FlexWrapper} from "../../../components/Wrapper";
import {SectionName} from "../../../components/SectionName";
import {Project} from "./Project/project";
import styled from "styled-components";
import MapPic from "../../../../src/assets/img/thumbnail-1.webp"
import RadioPic from "../../../../src/assets/img/thumbnail-2.webp"
import CarPic from "../../../../src/assets/img/thumbnail-3.webp"
import { Container } from '../../../components/Container';

export const Projects = () => {
    return (
        <ProjectsStyled>
          <Container>
              <SectionName title={'Featured projects:'}></SectionName>
              <ProjectText>I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects</ProjectText>
              <FlexWrapper justify="space-between" wrap="wrap">
                  <Project srcIMG={MapPic} title='TWINDER' text='A live Geolocation app for finding tweets and twitter users around you.'></Project>
                  <Project srcIMG={RadioPic} title='LIVENTS' text='A video streaming app with live Geolocation, for streaming events.'></Project>
                  <Project srcIMG={CarPic} title='MOOVE' text='Mobile app for booking instant pickup & dropoff accross major cities.'></Project>
              </FlexWrapper>
          </Container>
        </ProjectsStyled>
    );
};

const ProjectsStyled = styled.section`
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
