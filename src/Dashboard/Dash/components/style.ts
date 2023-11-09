import styled from "styled-components";

export const Box = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column; 
    border: 1px solid #ffffff;
    min-width: 158px;
    box-shadow: 0px 0px 5px #9e9e9e;
    height: 140px;
    border-radius: 18px;
    span:first-child{
        border-left: 11px solid ${props => props.color};
        border-radius: 6px;
    }
`
