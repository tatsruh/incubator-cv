import React from 'react';
import styled from "styled-components";
import {LogoName} from "../../components/logoName";
import Menu from "../../components/menu";

const Header = () => {
    return (
        <StyledHeader>
          <LogoName>Tatiana Rukhavets</LogoName>
            <Menu/>
        </StyledHeader>
    );
};

      const StyledHeader = styled.header `
      display: flex;
          justify-content: space-between;
      `
export default Header;