
import styled, { css } from "styled-components";

export const SideBar = styled.aside<{allactive?: boolean}>`
    display: flex;
    flex-direction: column;
    width: ${props => props.allactive ? "400px" : "100px"};
    height: 100vh;
    background-color: white;
    position: fixed;
    left: 0;
    z-index: 1;
    align-items: center;
    border-right: 1px solid #e0e0e0;
    box-shadow: 1px 1px 5px #e0e0e0;
    padding-top: 180px;
    gap: 10px;
`
export const Painel = styled.div`
    margin-right: 100px;
    display: flex;
    align-items: center;
    #cash{
        span:first-child{
            position: relative;
            font-size: 35px;
        }
        span:nth-child(2){
            font-size: 18px;
            position: absolute;
        }
    }
    
    svg{
            cursor: pointer;
            transition: 400ms   ;
            &:hover{
                background-color: #FF7F1090;
            }
            background-color: #FF7F10;
            padding: 10px;
            width: 20px;
            height: 20px;
            margin-left: 60px;
            text-align: center;
            border-radius: 50%;
        }
    justify-content: center;
`
export const Header = styled.header`
    .painel-left{
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: center;
    }
    color: #5f5f5f;

    justify-content: space-between;
    top: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    gap: 20px;
    span:nth-child(3){
        font-size: 24px;
        color: #0EBAE6;
        text-transform: capitalize;
    }
    z-index: 3;
    background-color: white;
    height: 80px;
    border-bottom: 1px solid #e1e1e1;
`
export const Main = styled.section`
    display: flex;
    position: absolute;
`