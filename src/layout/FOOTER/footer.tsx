import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/Wrapper";
import {SectionName} from "../../components/SectionName";
import {Icon} from "../../components/Icon";
import {Form} from "./form";
import ButtonMain from "../../components/ButtonMain";

export const Footer = () => {
    return (
        <FooterStyled>
            <FlexWrapper direction="column">
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
                <ButtonMain buttontext="Send"></ButtonMain>
            </FlexWrapper>
        </FooterStyled>
    );
};

const FooterStyled = styled.section `
    display: flex;
    justify-content: space-around;
    background-color: bisque;

`
const SocialUl = styled.ul `
    display: flex;
`
const SocialLi = styled.li `
`
const ContactText = styled.p `
`