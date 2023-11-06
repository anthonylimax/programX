import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Wrapper } from "./style"
import { useState } from "react"

type props = {
    icon: IconDefinition
    name: string | undefined,

}

export default function ComponentAside(props : props){
    const [leave, SetLeave] = useState(false) 
    return (
        <div onMouseEnter={()=>{
            SetLeave(true);
        }}
        onMouseOut={()=>{
            let activated = document.getElementById("activated");
            if(!activated){
                SetLeave(false);
            }
        }}
        style={{position: "relative"}}>
        <FontAwesomeIcon fontSize={40}color="#4e4e4e" icon={props.icon}></FontAwesomeIcon>
        <Wrapper 
        id={leave ? "activated" : ""}>
            <span>{props.name}</span>
        </Wrapper>
        </div>
    )
}