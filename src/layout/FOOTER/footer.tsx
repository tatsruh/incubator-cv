import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/Wrapper";
import {SectionName} from "../../components/SectionName";
import {Icon} from "../../components/Icon";
import {Form} from "./form";
import ButtonMain from "../../components/ButtonMain";
import { Container } from '../../components/Container';

export const Footer = () => {
    return (
        <FooterStyled>
            <Container>
                <FlexWrapper direction="column" justify="space-between">
                    <SectionName title="Connect with me:"></SectionName>
                    <p>Satisfied with me? Please contact me</p>
                    <SocialUl>
                        <SocialLi> <Icon idSvg="instagram"/> </SocialLi>
                        <SocialLi> <Icon idSvg="facebook"/></SocialLi>
                        <SocialLi><Icon idSvg="dribble"/></SocialLi>
                        <SocialLi> <Icon idSvg="sms"/></SocialLi>
                    </SocialUl>
                </FlexWrapper>
                <FlexWrapper direction="column">
                    <ContactText>Contact me, let’s make magic together</ContactText>
                    <Form></Form>
                    <ButtonMain width="160px" buttontext="Send"></ButtonMain>
                </FlexWrapper>
            </Container>

        </FooterStyled>
    );
};

const FooterStyled = styled.footer `
 
   
    background-color: bisque;

`
const SocialUl = styled.ul `
    display: flex;
`
const SocialLi = styled.li `
`
const ContactText = styled.p `
`