
import react, { ReactNode, createContext, useState } from "react";

type PropsLoginType = {
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
}
const DEFAULT_VALUE = {
    state: "seller",
    setState: ()=>{},
}
const CtxtTypeLogin = createContext<PropsLoginType>(DEFAULT_VALUE);

const ContextTypeLoginProvider : React.FC<{children : ReactNode}> = ({children}) =>{
        
    const [state, setState] = useState(DEFAULT_VALUE.state);
    return(
        <CtxtTypeLogin.Provider value={
        {
            state,
            setState
        }
        }>
            {children}
        </CtxtTypeLogin.Provider>
    )
}
export {ContextTypeLoginProvider};
export default CtxtTypeLogin;