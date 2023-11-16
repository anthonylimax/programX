import styled from "styled-components";

export const Cart = styled.div<{left: number}>`
z-index: 5;
    .body{
        .cancel{
            display: flex;
            position: absolute;
            bottom: 60px;
            gap: 10px;
            right: 30px;
        }
        button:first-child{
            border-radius: 10px;
            background-color: transparent;
            border: 1px solid #FF7F10;
            cursor: pointer;
            color: #FF7F10;
            padding: 10px;
            font-size: 24px;
        }
        button:nth-child(2){
            border-radius: 10px;
            background-color: #FF7F10;
            border: 1px solid #FF7F10;
            cursor: pointer;
            color: WHITE;
            padding: 10px;
            font-size: 24px;
        }
        width: 500px;
    height: 100vh;
    top: 0;
    position: fixed;    
    transition: 300ms;
    padding-top: 50px;
    z-index: 2;
    border-radius: 10px 0px 0px 10px;
    .span{
        padding: 30px;
    }
    div{
        margin-top: 10px;
        animation: startComponentCart 450ms linear;
    }
    box-shadow: 0px 0px 4px black;
    background-color: white;
    right: ${props => props.left + "px"};
    }
`

export const BodyItem = styled.figure`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100vw;
    max-width: 290px;

    img{
        height:300px;
    }
    margin: 0;
    height: 600px;
    border-radius: 20px;
    background-color: #fefefe;
    transition: 300ms;
    box-shadow: 0px 0px 3px #e1e1e1;
    gap: 3px;
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
    @keyframes startComponentCart {
        0%{
            transform: translateX(300px);
        }
    }
`