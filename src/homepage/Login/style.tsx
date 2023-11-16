import styled, { css } from "styled-components";

export const Container = styled.section<{back?:any}>`
    display: flex;
    background-image: url("./group.png");
    background-size: contain;
    background-repeat: no-repeat;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const MakeLogin = styled.span`
    font-size: 24px;
    color: #121212;
    align-self: flex-end;
`
export const InputEnv = styled.div`
    display: flex;
    gap: 10px;
    svg{
        transition: 0.4s;
    }
    width: 100%;
    align-items: center;
`
export const LoginWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    width: 100%;
    #remember-me{
        align-self: flex-start;
        margin-left: 40px;
    }
`
export const SubmitButton = styled.button`
    padding: 20px 80px;
    background-color: ${props => props.color};
    font-size: 20px;
    font-weight: 600;
    border-radius: 10px;
    color: white;
    border: none;
    outline: none;
`
export const SmallerText = styled.span<{clickable?: string}>`
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 16px;
    color:  #121212;
    ${props => props.clickable && css`
    cursor: pointer;
    `}

`
export const LoginVariability = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
`
export const FormLogin = styled.div`
    gap: 20px;
    text-align: center;
    h1{
        margin-bottom: -40px;
        font-size:42px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
    width: 10%;
    min-width: 380px;
    box-shadow: 0px 0px 4px black;
    border-radius: 20px;
    padding: 0px 10%;
    background-color: ${props => props.color};
`
export const Input = styled.input`
    width: 90%;
    color: #00000090;
    transition: 0.4s;
    outline: none;
    border: none;
    border-bottom: 2px solid ${props => props.color};
    padding: 15px;
    font-size: 18px;
`
export const SphereLoading = styled.div`
    background-image: url("sphereload.png");
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    background-size: contain;
    @keyframes infiniteSpine{
        0%{
            transform: rotateZ(0deg);
        }
        100%{
            transform: rotateZ(360deg);
        }
    }
    animation: infiniteSpine 2s infinite linear;
`
export const AllBlack = styled.div`
    width: 100vw;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    height: 100vh;
    background-color: #00000090;
`