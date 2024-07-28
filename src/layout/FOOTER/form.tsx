import React from 'react';
import styled from "styled-components";

export const Form = () => {
    return (
        <StyledForm>
            <StyledInput placeholder="Name:"></StyledInput>
            <StyledInput placeholder="Email:"></StyledInput>
            <StyledInput as={"textarea"} placeholder="Message::"></StyledInput>
        </StyledForm>
    );
};

const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
`
const StyledInput = styled.input `
`