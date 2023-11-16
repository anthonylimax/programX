import styled from "styled-components";

export const Painel = styled.div`
    width: 30%;
    min-width: 400px;
    height: 80vh;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 50px;
    padding-left: 50px;
    box-shadow: 0px 0px 2px black;
    justify-content: center;
    background-color: white;
    & > *{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .input-signup{
        position: relative;
        width: 60%;
        transition: 1s;
        
    }
    input{
        label{
            position: absolute;
            top: 0.5;
            left: 0.5;
        }
    }
    input:focus{
        
        label{
            position: absolute;
            top: 0;
            left: 0;
        }
    }
`