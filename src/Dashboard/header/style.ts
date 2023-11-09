
import styled, { css } from "styled-components";

export const SideBar = styled.aside<{allactive?: boolean}>`
    display: flex;
    flex-direction: column;
    width: ${props => props.allactive ? "400px" : "100px"};
    height: 100vh;
    background-color: white;
    position: absolute;
    left: 0;
    z-index: 1;
    align-items: center;
    border-right: 1px solid #e0e0e0;
    box-shadow: 1px 1px 5px #e0e0e0;
    padding-top: 180px;
    gap: 10px;
`
export const Header = styled.header`
    color: #5f5f5f;
    top: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    z-index: 3;
    background-color: white;
    height: 80px;
    border-bottom: 1px solid #e1e1e1;
`
export const Main = styled.section`
    display: flex;
    position: absolute;
`