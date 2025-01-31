import React from 'react';
import styled from "styled-components";
import {SectionName} from "../../../components/SectionName";
import {FlexWrapper} from "../../../components/Wrapper";
import {Skillbox} from "./Skillbox";
import {CvTheme} from "../../../styles/Theme";
import {Container} from '../../../components/Container';

export const Skills = () => {
    return (
        <SkillsStyled id={'skills'}>
            <Container>
                <SectionName title={"The services i offer:"}/>
                <FlexWrapper wrap={'wrap'}>
                    <Skillbox idSVG={"ruler"} title={"RESPONSIVE DESIGNING"} colorTitle={"white"}
                              description={'I have experience in creating responsive web designs using SASS, Tailwind, and Styled Components.'}/>
                    <Skillbox idSVG={"code"} title={"WEB DEVELOPMENT"}
                              description={'I specialize in web development using React, Vanilla JavaScript, TypeScript, and Redux ToolKit.'}/>

                    <Skillbox idSVG={"android_svg"} title={"LIBRARIES KNOWLEDGE"} colorTitle={"white"}
                              description={'I am proficient in various libraries, including MUI, React Hook Form, React Router, and Axios.'}/>

                    <Skillbox idSVG={"git-repo"} title={"VERSION CONTROL"}
                              description={'I can use version control systems well, and Git & Mecurial are my go-to tool.'}/>
                    <Skillbox idSVG={"javascript"} title={"NPM AND YARN"} colorTitle={"white"}
                              description={'I have core understanding of NPM and YARN.'}/>

                    <Skillbox idSVG={"slider"} title={"CI/CD"}
                              description={'I have a basic understanding of CI/CD pipelines and Agile methodologies.'}/>

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