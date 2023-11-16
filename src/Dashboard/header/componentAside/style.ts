import styled from "styled-components";

export const Wrapper = styled.div`
cursor: pointer;
    display: flex;
    position: relative;
    z-index: 1;
    align-items: center;
    opacity: 1;
    width: 100%;
    justify-content: center;
    height: 50px;
    border: 1px solid transparent;  
    &.activated{
        box-shadow: 1px 1px 3px #e1e1e1;
        top: 0px;
        width: 300px;
        background-color: #ffffff;
        align-self: flex-start;
        padding-left: 20px;
        border: 1px solid #e1e1e1;
        border-top: 1px solid transparent;
        border-left: 1px solid transparent;
        animation: SideStart 0.1s linear;
        @keyframes SideStart{
            0%{
                width: 100px;   
            }
            100%{
                width:300px;
            }
        }
    }
`
export const ActiveWrapper = styled.div<{color?: string}>`
    display: flex;
    position: relative;
    z-index: 0;
    align-items: center;
    opacity: 1;
    width: 100%;
    height: 52px;
    top: 0px;
    width: 300px;
    align-self: flex-start;
    padding-left: 80px;
    &:hover{
        svg{
            color: ${props => props.color ? props.color : "black"};
        }
        span{
            color: ${props => props.color ? props.color : "black"};
        }
    }
    animation: SideStart 0.1s linear;
    @keyframes SideStart{
        0%{
            width: 100px;   
        }
        100%{
           
            width:300px;
        }
    }
    transition: 200ms;
    cursor: pointer;
    &:hover{
        transform: scale(1.05);
    }
`