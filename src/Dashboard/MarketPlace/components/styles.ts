import styled from "styled-components";

export const BodyItem = styled.figure`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 329px;
    margin: 0;
    height: 580px;
    border-radius: 20px;
    background-color: #fefefe;
    transition: 300ms;
    box-shadow: 0px 0px 3px #e1e1e1;
    gap: 10px;
    animation: startComponent 0.45s ease-in-out;
    .types{
        font-size: 12px;
        color: #6e6e6e;
    }
    .container-type{
        display: flex;
        flex-direction: column;
    }
    article{
        display: flex;

        justify-content: space-between;
    }
    &:hover{
        transform: scale(1.04);
        box-shadow: 0px 0px 3px #9e9e9e;
    }
    @keyframes startComponent{
        0%{
            transform: scale(0.2);
        }
        50%{
            transform: scale(1.1)
        }
        100%{
            transform: scale(1);
            opacity: 1;
        }
    }
`