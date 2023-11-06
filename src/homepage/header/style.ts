import styled from "styled-components";

export const Header = styled.header`
    background-color: #0EBAE6;
    width: 100%;
    display: flex;
    align-items: center ;
    justify-content: space-around;
    height: 90px;
`
export const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 45px;
    width: 50%;
`
export const RegisterButton = styled.button`
    width: 260px;
    height: 60px;
    background-color: #E6D40E;
    border: none;
    outline: none;
    border-radius: 16px;
    font-size: 26px;
    color: white;
    font-weight: 500;
    transition: 500ms;
    text-align: center;
    &:hover{
        transform: scale3d(1.05,1.05,1);
    }
        
`
export const BoxLabelAboutUs = styled.div`
    position: absolute;
    top: 60px;
    width: 130%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 0px 10px 10px;
    left: -25px;
    animation: initialAnimation 500ms;
    @keyframes initialAnimation {
        0%{
            opacity: 0;
            top: 120px;
        }
        100%{
            opacity: 1;
            top: 60px;
        }
    }
    background-color: black;
`
export const NextButton = styled.span`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 23px;
    color: white;
    transition: 500ms;
    font-weight: 400;
    &:hover{
        color: #E6D40E;
    }
    font-family: 'Sora', sans-serif;
`