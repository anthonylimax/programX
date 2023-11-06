import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, FormLogin, Input, InputEnv, LoginVariability, LoginWrapper, MakeLogin, SmallerText, SubmitButton } from "./style";
import { faEnvelope, faKey} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import CtxtTypeLogin from "../../contexts/LoginType";
export default function Seller(){
    
    const {setState, state} = useContext(CtxtTypeLogin);
    const [dataForm, setDataForm] = useState({email:"", password: ""});
    const [color, setColor] = useState("#FFFFFFE0");
    return(
        <Container >
        <FormLogin>
        <h1>
        With Hundreds Of Trending Products
            </h1>
            <h2>
            Go Global!
            </h2>
        </FormLogin>
        <FormLogin color="#0EBAE6E0">
            <LoginWrapper>
                <LoginVariability>
                    <MakeLogin>Sign in as a Producer</MakeLogin>
                    <SmallerText clickable="asomething" onClick={()=>{
                        setState("seller");
                        console.log(state)
                    }}>or Seller</SmallerText>
                </LoginVariability>
                    <InputEnv>
                        <FontAwesomeIcon icon={faEnvelope} color="white" fontSize={30}></FontAwesomeIcon>
                    <Input onChange={({target}) =>{
                        setDataForm({...dataForm, email: target.value});
                        if(dataForm.email.length > 4 && dataForm.password.length > 4){
                            setColor("#FFF")
                        }
                        else{
                            setColor("#FFFFFFE0")
                        }
                    }} type="email" placeholder="Email"/>
                    </InputEnv>
                    <InputEnv>
                        <FontAwesomeIcon icon={faKey} color="white" fontSize={30}></FontAwesomeIcon>
                    <Input onChange={({target}) =>{
                        setDataForm({...dataForm, password: target.value});
                        if(dataForm.email.length > 4 && dataForm.password.length > 4){
                            setColor("#FFF")
                        }
                        else{
                            setColor("#FFFFFFE0")
                        }
                    }} type="password"placeholder="Password"/>
                    </InputEnv>
            </LoginWrapper>
            <SubmitButton color={color} >Log In</SubmitButton>
        </FormLogin>
       </Container>     
    )
}