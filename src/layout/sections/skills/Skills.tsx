import React from 'react';
import styled from "styled-components";
import {SectionName} from "../../../components/SectionName";
import {FlexWrapper} from "../../../components/Wrapper";
import {Skillbox} from "./Skillbox";
import {CvTheme} from "../../../styles/Theme";
import { Container } from '../../../components/Container';

export const Skills = () => {
    return (
        <SkillsStyled id={'skills'}>
            <Container>
                <SectionName title={"The services i offer:"}/>
                <FlexWrapper wrap={'wrap'}>
                    <Skillbox idSVG={"ruler"} title={"UI & UX DESIGNING"} colorTitle={"white"}
                              description={'I design beautiful web iterfaces with Figma and Adove XD'}/>
                    <Skillbox idSVG={"code"} title={"WEB DEVELOPMENT"}
                              description={'I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS'}/>

                    <Skillbox idSVG={"android_svg"} title={"MOBILE DEVELOPMENT"} colorTitle={"white"}
                              description={'I am an expert mobile developer. I have experience using Flutter and React Native.'}/>

                    <Skillbox idSVG={"git-repo"} title={"VERSION CONTROL"}
                              description={'I can use version control systems well, and Git & Mecurial are my go-to tool.'}/>
                    <Skillbox idSVG={"javascript"} title={"NPM AND NODEJS"} colorTitle={"white"}
                              description={'I have core understanding of NPM. I can also develop general purpose applications with NodeJS'}/>

                    <Skillbox idSVG={"slider"} title={"WEB SCRAPING"}
                              description={'I can collect content and data from the internet then manipulate and analyze as needed.'}/>

                </FlexWrapper>

            </Container>
        </SkillsStyled>
    );
};

const SkillsStyled = styled.section`
    position: relative;
    background-color: ${CvTheme.colors.background};
    & > div > div {
       gap: 20px
    }
    h2 {
        margin-bottom: 30px;
    }
    padding-bottom: 80px;
`