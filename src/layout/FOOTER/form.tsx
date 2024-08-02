import React from 'react';
import styled from "styled-components";
import {CvTheme} from "../../styles/Theme";

export const Form = () => {
    return (
        <StyledForm>
            <StyledInput placeholder="Name:"></StyledInput>
            <StyledInput placeholder="Email:"></StyledInput>
            <StyledInput as={"textarea"} placeholder="Message:"></StyledInput>
        </StyledForm>
    );
};

const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    gap: 16px; 
    textarea {
        box-sizing: border-box;
        height: 100px;
        padding-top: 35px; 
        padding-bottom: 30px;
        
    }
`
const StyledInput = styled.input `
    font-size: 16px;
    color: #F5F5F5;
    background-color: #31313F;
    border-radius: 8px;
    border: none;
    padding-left: 10px;
    width: 472px; 
    font-family: "Poppins", sans-serif;
  height: 62px; 
    
`