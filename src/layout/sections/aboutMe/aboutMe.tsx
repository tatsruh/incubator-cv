import React from 'react';
import styled from "styled-components";
import {SectionName} from "../../../components/SectionName";
import {FlexWrapper} from "../../../components/Wrapper";
import {CvTheme} from "../../../styles/Theme";
import {AboutMeComponent} from "./AboutMeComponent";
import { Container } from '../../../components/Container';

export const AboutMe = () => {
    return (
        <AboutMeStyled id={'about'}>
      <Container>
          <SectionName title="About me:"></SectionName>
          <Text>Hi, my name is Tatiana, i am a Frontend Web Developer. My stack includes JavaScript, TypeScript,
          React, React-Router, Redux, Redux ToolKit, React Hook Form, REST API, Styled Components, Taliwind, Jira, Postman, Unit-Tests, Storybook and other tools</Text>
          <FlexWrapper>
              <Number>3+</Number>
              <NumberText>Year of experience. Specialised in building apps, while ensuring a seamless
                  web experience for end users.</NumberText>
          </FlexWrapper>
          <FlexWrapper justify='center' wrap="wrap">
              <AboutMeComponent idSVG="ruler" text="RESPONSIVE DESIGN"/>
              <AboutMeComponent idSVG="code" text="WEB DEVELOPMENT" color="grey"/>
              <AboutMeComponent idSVG="android_svg" text="RESTful APIs, GIT, AGILE" color="grey"/>
              <AboutMeComponent idSVG="python" text="Webpack, NPM, YARN" color="grey"/>
          </FlexWrapper>
      </Container>
        </AboutMeStyled>
    );
};

const AboutMeStyled = styled.section`
    padding-bottom: 80px;
  
    position: relative;

    h2 {
        padding-bottom: 10px;
       
    }
    ${Container} {
        @media ${CvTheme.media.mobile} {
            gap: 20px;

        }
    }
    
  
  
`

const Text = styled.p`
    font-size: 18px;
    color: white;
    line-height: 2;
`
const Number = styled.span`
    font-size: 96px;
    font-weight: 600;
    color: ${CvTheme.colors.accent};
`
const NumberText = styled.p`
    font-size: 24px;
    color: white;
    line-height: 1.5;
    margin-left: 10px;
    @media ${CvTheme.media.mobile} {
        margin-top: 20px;
        margin-bottom: 20px;

    }
`
