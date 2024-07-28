import React from 'react';
import styled from "styled-components";
import {SectionName} from "../../components/SectionName";
import Menu from "../../components/menu";
import {FlexWrapper} from "../../components/Wrapper";
import {CvTheme} from "../../styles/Theme";

const Header = () => {
    return (
        <StyledHeader as={FlexWrapper} justify={"space-between"}>
          <SectionName title={"Tatiana Rukhavets"}/>
            <Menu menuArray={headerArray}/>
        </StyledHeader>
    );
};

      const StyledHeader = styled.header `
  background-color: ${CvTheme.colors.darkBackground};
          
      `
const headerArray = ['Home','About me','Projects','Contact']

export default Header;