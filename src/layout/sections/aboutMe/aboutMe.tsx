import React from 'react';
import styled from "styled-components";
import {SectionName} from "../../../components/SectionName";
import {FlexWrapper} from "../../../components/Wrapper";
import {CvTheme} from "../../../styles/Theme";
import {AboutMeComponent} from "./AboutMeComponent";
import { Container } from '../../../components/Container';

export const AboutMe = () => {
    return (
        <AboutMeStyled>
      <Container>
          <SectionName title="About me:"></SectionName>
          <Text>Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI designer, and Mobile
              developer. I have honed my skills in Web Development and advance i have core understanding of advance
              UI design principles.
              Here are the major skills i have. </Text>
          <FlexWrapper>
              <Number>5+</Number>
              <NumberText>Years of experience. Specialised in building apps, while ensuring a seamless
                  web experience for end users.</NumberText>
          </FlexWrapper>
          <FlexWrapper justify='center'>
              <AboutMeComponent idSVG="ruler" text="UI & UX
DESIGNING"/>
              <AboutMeComponent idSVG="ruler" text="UI & UX
DESIGNING" color="grey"/>
              <AboutMeComponent idSVG="android_svg" text="MOBILE
DEVELOPMENT" color="grey"/>
              <AboutMeComponent idSVG="python" text="WEB SCRAPING
WITH PYTHON" color="grey"/>
          </FlexWrapper>
      </Container>
        </AboutMeStyled>
    );
};

const AboutMeStyled = styled.section`
    
`
const Text = styled.p`
`
const Number = styled.span`
    font-size: 10rem;
    color: ${CvTheme.colors.accent};
`
const NumberText = styled.p`
`
