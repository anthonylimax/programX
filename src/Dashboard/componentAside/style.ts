import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    position: absolute;
    z-index: 0;
    align-items: center;
    opacity: 0;
    width: 200px;
    justify-content: center;
    height: 50px;
    background-color: #e0e0e0;
    &#activated{
        left: 70px;
        top: 0px;
        opacity: 1;
        animation: SideStart 0.1s linear;
        @keyframes SideStart{
            0%{
                left: 0px;
                opacity: 0;
            }
            100%{
                left: 70px;
            }
        }
    }
`