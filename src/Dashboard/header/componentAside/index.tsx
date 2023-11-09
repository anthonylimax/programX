import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ActiveWrapper, Wrapper } from "./style"
import { Key, useState } from "react"
type props = {
    icon: IconDefinition
    key: Key
    name: string | undefined
    allactive: boolean
}

export default function ComponentAside(props : props){
    const [leave, SetLeave] = useState(false) 
    return (
        !props.allactive ? <Wrapper className={leave ? "activated" : undefined} 
        onMouseEnter={()=>{
            SetLeave(true);
        }}
        onMouseLeave={()=>{
            SetLeave(false);
        }}
        style={{position: "relative"}}>
        <FontAwesomeIcon style={{
            position: "absolute",
            left: 35,
        }} fontSize={25} width={30} color={leave ? "#5f5f5f" : "#5f5f5f" } icon={props.icon}></FontAwesomeIcon>
        {leave ? <span>{props.name}</span> : null}
        </Wrapper> :
        <ActiveWrapper>
            <FontAwesomeIcon style={{
            position: "absolute",
            left: 35,
        }} fontSize={25} width={30} color={leave ? "#5f5f5f" : "#5f5f5f" } icon={props.icon}></FontAwesomeIcon>
            <span>{props.name}</span>
        </ActiveWrapper>
    )
}