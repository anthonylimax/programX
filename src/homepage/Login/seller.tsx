import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AllBlack, Container, FormLogin, Input, InputEnv, LoginVariability, LoginWrapper, MakeLogin, SmallerText, SphereLoading, SubmitButton } from "./style";
import { faEnvelope, faKey} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import CtxtTypeLogin from "../../contexts/LoginType";
import axios from "axios";
import logo from './../../assets/bestseller_blue.png'
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
    const [color, setColor] = useState("#4257EC");
    const [inputColorFirst, setInputColorFirst] = useState("black");
    const [inputColorSecond, setInputColorSecond] = useState("black");
    
    return(
        <Container >
        <FormLogin color="white">
            <LoginWrapper>
                <img src={logo} width={170} alt="" />
                <LoginVariability>
                    <MakeLogin>Sign in as a Seller</MakeLogin>
                    <SmallerText clickable="asomething" onClick={()=>{
                        setState("producer");
                        console.log(state)
                    }}>or Producer</SmallerText>
                </LoginVariability>
                    <InputEnv>
                        <FontAwesomeIcon icon={faEnvelope} color={inputColorFirst} fontSize={20}></FontAwesomeIcon>
                    <Input color={inputColorFirst} onChange={({target}) =>{
                        setDataForm({...dataForm, email: target.value});
                        if(dataForm.email.length > 4){
                            setInputColorFirst("#4257EC")
                        }
                        else{
                            setInputColorFirst("#F04200")
                        }
                    }} type="email" placeholder="Email"/>
                    </InputEnv>
                    <InputEnv>
                        <FontAwesomeIcon icon={faKey} color={inputColorSecond} fontSize={20}></FontAwesomeIcon>
                    <Input color={inputColorSecond} onChange={({target}) =>{
                        setDataForm({...dataForm, password: target.value});
                        if(dataForm.password.length > 4){
                            setInputColorSecond("#4257EC")
                        }
                        else{
                            setInputColorSecond("#F04200")
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
            <span>Sign Up</span>
        </FormLogin>
       {clicked ? <AllBlack>
           <SphereLoading></SphereLoading>
       </AllBlack> : null}
       </Container>     
       
    )
}