import styled from "styled-components";
type FlexWrapperProps = {
    direction?: "column" | "row"
    justify?: string
    align?: string
    wrap?: string

}
export const FlexWrapper = styled.div <FlexWrapperProps> `
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "center"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    height: 100%;
    `
