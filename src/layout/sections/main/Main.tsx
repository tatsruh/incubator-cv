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
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


const Main = () => {
    return (
        <MainStyled id={'home'}>

            <Container>
                <FlexWrapper align="flex-end" justify="space-between" wrap="wrap">
                    <FlexWrapper direction={"column"} justify={"space-around"} wrap="wrap"  align="start">
                        <Greeting>Hello, i’m</Greeting>
                        <Name>Tatiana Rukhavets</Name>
                        <MainTag>
                            <Typewriter
                                options={{
                                    strings: ['Web Developer', 'Front-end Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></MainTag>
                        <FlexWrapper wrap={"wrap"}>
                            <ButtonSvg width="160px" idSvg={'user'} buttontext={"Contact me"} href="#contact"/>
                            <ButtonSvg width="160px" color={CvTheme.colors.background} idSvg={'eye'} buttontext={"Projects"} href="#projects"/>


                        </FlexWrapper>
                </FlexWrapper>
                    <Tilt>
                        <ImgWrap>

                            <MainImg src={mainimg}/>


                        </ImgWrap>

                    </Tilt>


                </FlexWrapper>
            </Container>

        </MainStyled>
    );
};

const MainStyled = styled.main`
    background-color: ${CvTheme.colors.background};
height: 100%;

    button {
        margin-top: 30px;
        margin-bottom: 50px;
        margin-right: 35px;
        @media ${CvTheme.media.mobile} {
            margin-top: 20px;
            margin-bottom: 10px;

        }
    }

    ${FlexWrapper} {
        height: unset;
    }
    ${FlexWrapper}:first-of-type {
        @media ${CvTheme.media.tablet} {
           display: flex;  
           align-items: center;
            justify-content: center;
            ${FlexWrapper} {
                    order: 2;

        }
    }

`
const Name = styled.h2`
    color: #F5F5F5;
 
    font-size: 52px;
    font-weight: 600;
    position: relative;
    z-index: 0;
    margin-bottom: 10px;
    max-width: 100%;
    @media ${CvTheme.media.mobile} {
        text-align: center;

    }
&::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 20px;
    background-color: ${CvTheme.colors.hover};
    position: absolute;
    bottom: 10px;
    z-index: -1;
    opacity: 100%;

    @media ${CvTheme.media.mobile} {
      display: none;

    }
    
}    
`
const MainTag = styled.h1`
    font-size: 18px;
    color: white;
    max-width: 435px;
`
const MainImg = styled.img`
    margin-top: 115px;
    margin-right: 50px;
    width: 20.75rem;
    height: 27.75rem;
    object-fit: cover;
    z-index: 9999;
    @media ${CvTheme.media.tablet} {
     order: 1;
        margin-left: 10px;
        margin-top: 50px;

    }
    
`
const Greeting = styled.span `
    color: white;
    font-size: 32px;
    font-weight: 600;
    @media ${CvTheme.media.mobile} {
        margin-top: 15px;
       

    }
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
    @media ${CvTheme.media.mobile};
    bottom: 30px;
    right: 30px;
    }
}`
export default Main;