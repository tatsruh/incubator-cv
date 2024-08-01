import React
    from
        'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/Wrapper";
import mainimg from "../../../assets/img/shanghai 06-2024-4804.webp";
import {Icon} from '../../../components/Icon';
import ButtonSvg from "../../../components/ButtonSvg";
import {CvTheme} from "../../../styles/Theme";
import {Container} from '../../../components/Container';
import { BackgroundBar } from '../../../components/BackgroundBar';

const Main = () => {
    return (
        <MainStyled>

            <Container>
                <FlexWrapper align="flex-end" justify="space-between">
                    <FlexWrapper direction={"column"} justify={"space-around"} align="start">
                    <Greeting>Hello, i’m</Greeting>
                    <Name>Tatiana Rukhavets</Name>
                    <MainTag>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for
                        end-users.</MainTag>
                    <FlexWrapper>
                        <ButtonSvg width="160px" idSvg={'user'} buttontext={"About me"}/>
                        <ButtonSvg width="160px" color={CvTheme.colors.background} idSvg={'eye'} buttontext={"Projects"}/>


                    </FlexWrapper>
                </FlexWrapper>
                    <ImgWrap>

                            <MainImg src={mainimg}/>


                    </ImgWrap>

                </FlexWrapper>
            </Container>
           <BackgroundBar/>
        </MainStyled>
    );
};

const MainStyled = styled.div`
    background-color: ${CvTheme.colors.background};
    button {
        margin-top: 30px;
        margin-bottom: 50px;
    }
    button + button {
        margin-left: 35px;
    }
   
`
const Name = styled.h2`
    color: #F5F5F5;
    opacity: 30%;
    font-size: 52px;
    font-weight: 600;
`
const MainTag = styled.h1`
    font-size: 18px;
    color: white;
    max-width: 435px;
`
const MainImg = styled.img`
    margin-top: 115px;
    width: 20.75rem;
    height: 27.75rem;
    object-fit: cover;
    z-index: 9999;
    
    
`
const Greeting = styled.span `
    color: white;
    font-size: 32px;
    font-weight: 600;
`
const ImgWrap = styled.div`
position: relative;
    
    z-index: 1;
&::before {
    content: "";
    width: 20.75rem;
    height: 27.75rem;
    background-color: transparent;
    border: 3px solid ${CvTheme.colors.hover};
    position: absolute;
    bottom: 70px;
    right: 70px;
    display: inline-block;
    z-index: -1;
}`
export default Main;