import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/Wrapper";
import {SectionName} from "../../components/SectionName";
import {Icon} from "../../components/Icon";
import {Form} from "./form";
import ButtonMain from "../../components/ButtonMain";
import { Container } from '../../components/Container';
import { CvTheme } from '../../styles/Theme';

export const Footer = () => {
    return (
        <FooterStyled>
            <Container>

            <FlexWrapper justify="space-between">
                <FlexWrapper direction="column" justify="space-between" align="start">
                    <SectionName title="Connect with me:"></SectionName>
                    <Text>Satisfied with me? Please contact me</Text>
                    <SocialUl>
                        <SocialLi> <Link href='#'> <Icon idSvg="instagram" width="62px"/> </Link> </SocialLi>
                        <SocialLi><Link  href='#'> <Icon idSvg="facebook" width="62px"/></Link> </SocialLi>
                        <SocialLi><Link  href='#'><Icon idSvg="dribble" width="62px"/></Link> </SocialLi>
                        <SocialLi><Link  href='#'> <Icon idSvg="sms" width="62px"/></Link> </SocialLi>
                    </SocialUl>
                </FlexWrapper>
                <FlexWrapper direction="column" justify="space-between">
                    <ContactText>Contact me, let’s make magic together</ContactText>
                    <Form></Form>
                    <ButtonMain width="160px" buttontext="Send"></ButtonMain>
                </FlexWrapper>
            </FlexWrapper>
            </Container>

        </FooterStyled>
    );
};


const SocialUl = styled.ul `
    display: flex;
`
const SocialLi = styled.li `
`
const ContactText = styled.p `
    color: white;
    font-size: 24px;
    margin-bottom: 25px;
`
const Text = styled.p `
    color: white;
    font-size: 18px;
    margin: 25px 0;
`
const Link = styled.a `
`
const FooterStyled = styled.footer `
    
    background-color: ${CvTheme.colors.background};
    button {
        margin-top: 25px;
    }
padding-bottom: 80px;
`