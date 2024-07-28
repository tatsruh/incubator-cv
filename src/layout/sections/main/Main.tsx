import React
    from
        'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/Wrapper";
import mainimg from "../../../assets/img/shanghai 06-2024-4804.webp";
import {Icon} from '../../../components/Icon';
import ButtonSvg from "../../../components/ButtonSvg";
import {CvTheme} from "../../../styles/Theme";

const Main = () => {
    return (
        <MainStyled as={FlexWrapper} justify={"space-around"}>

            <FlexWrapper direction={"column"}>
                <span>Hello, i’m</span>
                <h2>Tatiana Rukhavets</h2>
                <h1>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for
                    end-users.</h1>
                <FlexWrapper>
                    <ButtonSvg idSvg={'user'} buttontext={"about me"}/>
                    <ButtonSvg idSvg={'eye'} buttontext={"Projects"}/>


                </FlexWrapper>
            </FlexWrapper>
            <MainImg src={mainimg}/>
        </MainStyled>
    );
};

const MainStyled = styled.div`
    background-color: ${CvTheme.colors.background};
`
const MainImg = styled.img`
    width: 20.75rem;
    height: 27.75rem;
    object-fit: cover;
`
export default Main;