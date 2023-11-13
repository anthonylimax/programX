import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AllBlack, Container, FormLogin, Input, InputEnv, LoginVariability, LoginWrapper, MakeLogin, SmallerText, SphereLoading, SubmitButton } from "./style";
import { faEnvelope, faKey} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import CtxtTypeLogin from "../../contexts/LoginType";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Set } from "../../stores/acessToken";
import { redirect as Redirect, useNavigate, useNavigation } from "react-router-dom";
export default function Seller(){

    const server = axios.create({
        headers: {
            'Content-Type': 'application/json'
          },
          baseURL: "http://127.0.0.1:8080/"
    })
                
    function verifycredentials(){
        token[0] != null || undefined ? server.post("/verifycache", token[0]).then(e => e.data).then(response => {
            console.log("yes");
        }) : null
        
    }

    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch();
    const nav = useNavigate();
    const token = useSelector(state => state.token);
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
                            setColor("#FFFFFF")
                        }
                        else{
                            setColor("#FFFFFFD0")
                        }
                    }} type="password"placeholder="Password"/>
                    </InputEnv>
            </LoginWrapper>
            <SubmitButton onClick={()=>{
                setClicked(true);
                server.post('/verifycredentials', 
                dataForm).then( e => e.data).then(response =>{
                    dispatch(Set(response));
                    setClicked(false);
                    nav("/dashboard");
                }).catch(error => {
                    setClicked(false);
                })
            }} color={color} >Log In</SubmitButton>
        </FormLogin>
       {clicked ? <AllBlack>
           <SphereLoading></SphereLoading>
       </AllBlack> : null}
       </Container>     
       
    )
}