import styled from "styled-components";

export const Body = styled.div`
    background-color: white;
    display: flex;
    box-shadow: 0px 0px 2px black;
    width: 100%;
    align-items: flex-start;
    flex-direction: row;
    gap: 40px;
    align-items: center;
    height: 250px;
`
export const TextLabel = styled.div`
    display: flex;
    margin-left: 20px;
    span:nth-child(2){
    color: black;
    font-size: 12px;
    text-align: start;
}
    align-items: flex-start;
    flex-direction: column;
`
export const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    height: 100vh;

    flex-direction: row;
    flex-wrap: wrap;
`       

export const ButtonIntegrate = styled.button`
    border: 1px solid #0DBB97;
    color: white;
    background-color: #0DBB97;
    border-radius: 8px;
    font-size: 12px;
    width: 200px;
    height: 40px;
`