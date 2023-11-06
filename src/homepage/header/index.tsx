import { BoxLabelAboutUs, ButtonsWrapper, Header, NextButton, RegisterButton } from "./style"
import logo from "./../../assets/bestSeller.png"
import {useNavigate} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function Head(){
    const navigate = useNavigate();
    const [icon , setIcon] = useState(faAngleDown);
    
    return (
        <Header data-initial="up-loading">
            <img src={logo} alt="" />
            <ButtonsWrapper>
                <NextButton onClick={()=>{
                    navigate("/")
                }}>home</NextButton>
            <NextButton
            onMouseEnter={
                ()=>{
                    setIcon(faAngleUp);
                }
            }
            onMouseOut={
                (evento)=>{
                    let currentDistanceX = evento.currentTarget.offsetLeft - evento.pageX;
                    let currentDistance = evento.currentTarget.offsetTop - evento.pageY;
                    if(currentDistance > 0 || currentDistance < -120 || currentDistanceX < -140 || currentDistanceX > 0){
                        setIcon(faAngleDown);
                    }
                }
            }
            >about us <FontAwesomeIcon icon={icon} />
            {
                icon == faAngleUp ? <BoxLabelAboutUs><NextButton>Contact us</NextButton></BoxLabelAboutUs> : null
            }
            
            </NextButton>
                <NextButton>integrations</NextButton>
                <NextButton>login</NextButton>
                <RegisterButton>Register Now</RegisterButton>
            </ButtonsWrapper>
        </Header>
    )
}