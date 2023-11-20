import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ActiveWrapper, Wrapper } from "./style"
import { Key, useState } from "react"
import { Link } from "react-router-dom"



type props = {
    path: string
    icon: IconDefinition
    key: Key
    color?: string 
    name?: string
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
        <Link to={props.path}>
        <FontAwesomeIcon style={{
            position: "absolute",
            left: 35,
        }} fontSize={25} width={30} color={!leave ? "#5f5f5f" : props.color } icon={props.icon}></FontAwesomeIcon>
        {leave ? <span style={{color: props.color}}>{props.name}</span> : null}
        </Link>
        </Wrapper> :
        <ActiveWrapper allActive={props.allactive} color={props.color}>
            <Link to={props.path}><FontAwesomeIcon style={{
            position: "absolute",
            left: 35,
        }} fontSize={25} width={30} color={!leave ? "#5f5f5f" : props.color } icon={props.icon}></FontAwesomeIcon>
            <span>{props.name}</span>
            </Link>
        </ActiveWrapper>
    )
}