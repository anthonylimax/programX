import { useContext } from "react";
import CtxtTypeLogin, {ContextTypeLoginProvider} from "../../contexts/LoginType";
import Producer from "./producer";
import Seller from "./seller";

export default function Login(){
    return (
        <ContextTypeLoginProvider>
            <Switcher></Switcher>
        </ContextTypeLoginProvider>
    )
}
export function Switcher(){

    const {state} = useContext(CtxtTypeLogin);
    return(state == "seller" ? <Seller /> : <Producer />)
}