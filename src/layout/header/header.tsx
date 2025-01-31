import React from 'react';
import styled from "styled-components";
import {SectionName} from "../../components/SectionName";
import Menu from "../../components/menu";
import {FlexWrapper} from "../../components/Wrapper";
import {CvTheme} from "../../styles/Theme";
import {Container} from '../../components/Container';
import BurgerMenu from "../../components/burgerMenu";

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <SectionName title="Tatiana Rukhavets" fontsize = '28px' />
                    <Menu />
                    <BurgerMenu />

                </FlexWrapper>
            </Container>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${CvTheme.colors.darkBackground};
   height: 80px;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
${FlexWrapper} {
    @media ${CvTheme.media.mobile} {
      justify-content: start;

    }
}
    
`



export default Header;