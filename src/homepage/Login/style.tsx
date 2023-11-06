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
    color: white;
    align-self: flex-start;
`
export const InputEnv = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    align-items: center;
`
export const LoginWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
`
export const SubmitButton = styled.button`
    padding: 30px 100px;
    background-color: ${props => props.color};
    font-size: 20px;
    font-weight: 600;
    border-radius: 10px;
    color: #0EBAE6E0;
    border: none;
    outline: none;
`
export const SmallerText = styled.span<{clickable?: string}>`
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 16px;
    color: white;
    ${props => props.clickable && css`
    cursor: pointer;
    `}

`
export const LoginVariability = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    height: 100vh;
    width: 30%;
    padding: 0px 10%;
    background-color: ${props => props.color};
`
export const Input = styled.input`
    width: 90%;
    color: #00000090;
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 15px;
    font-size: 18px;
`