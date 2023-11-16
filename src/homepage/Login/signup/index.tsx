import { useContext } from "react";
import CtxtTypeLogin from "../../../contexts/LoginType";
import LoginProducer from "./ProducerLogin";


export default function Signup(){
    
        const {state} = useContext(CtxtTypeLogin);
        return(state == "seller" ? <LoginProducer /> : <LoginProducer />)
}