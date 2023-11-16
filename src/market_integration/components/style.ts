import styled from "styled-components";

export const Body = styled.div`
    background-color: white;
    display: flex;
    box-shadow: 0px 0px 2px black;
    width: 100%;
    align-items: flex-start;
    flex-direction: row;
    border-radius: 12px;
    height: 200px;
    gap: 40px;
    padding-top: 20px;
`
export const Grid = styled.div`
    img{
        margin-left: 30px;        
    }
    gap: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    span:nth-child(2){
        font-size: 13px;
        color: #323232;
        text-align: start;
    }
`
export const ButtonIntegration = styled.button`
    border: 1px solid #0DBB97;
    cursor: pointer;
    font-size: 18px;
    width: 200px;
    border-radius: 12px;
    background-color: #0DBB97;
    color: white;
`