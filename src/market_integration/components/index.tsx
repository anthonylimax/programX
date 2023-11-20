
import axios from "axios";
import { Body, ButtonIntegration, Grid, Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AxiosConfig } from "../../AxiosConfig/axios-config";
export default function StoreForIntegrate(){
    const location = useLocation();
    let wixCode = "";
    useEffect(()=>{
        if(location.search.includes("?code=")){
            for(let i = 6; i < location.search.length; i++){
                wixCode += location.search[i];
            }
            AxiosConfig("/saveAuth", "post", undefined);    
        }
    }, [])
    const options = [
        {
            name: "Wix",
            imgUrl: 'wix.png',
            integration: ()=>{
                const url = "https://www.wix.com/installer/install?token=2bea3b54e02f76ef85ab65bd5499ebb5580071260cd34060fc112da8cbcabdecc26d80bc8e3b19d72ab29b7907fc59993fb8dfd96b66236a2c88953268b3b7bbbf35a38714120536a7e8e19882ffb1b3d108886a66698068ebe3264722d888eea59a890e0077fdea49e5f699732d208a316121c70494a9dc1a7bd98937a35295e8a29b159710bbda1a30a4f7c7e101aca6fca53e68030065fa9a036cc85871c046f0bb5283278d3ea8c4a0b7d33213bc4cc8c9a8ef60aaf20adb2e457199497b09632e1c05106e09de9bc533af9ca966&appId=0704479b-57dd-4703-bd63-bdfdce775f36&redirectUrl=http://localhost:5173/marketintegration";
                window.open(url);
            },
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptatem vitae nesciunt recusandae tempore voluptas possimus, qui cumque animi quidem numquam cupiditate tempora modi reprehenderit et minima inventore nam? Impedit."
        },
        {
            name: "WooComerece",
            imgUrl: 'woo.png',
            integration: ()=>{
            },
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptatem vitae nesciunt recusandae tempore voluptas possimus, qui cumque animi quidem numquam cupiditate tempora modi reprehenderit et minima inventore nam? Impedit."
        },
        {
            name: "Rakuten",
            imgUrl: 'rakuten.png',
            integration: ()=>{

            },
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptatem vitae nesciunt recusandae tempore voluptas possimus, qui cumque animi quidem numquam cupiditate tempora modi reprehenderit et minima inventore nam? Impedit."
        },
        {
            name: "Ebay",
            imgUrl: 'ebay.png',
            integration: ()=>{
            },
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptatem vitae nesciunt recusandae tempore voluptas possimus, qui cumque animi quidem numquam cupiditate tempora modi reprehenderit et minima inventore nam? Impedit."
        },
    ]
    return(
        <Grid>  
        {options.map((element : any, key) =>{
            return (
            <Body>
                <img src={element.imgUrl} width={100} alt="" />
                <Wrapper>
                    <span>{element.name}</span>
                    <span>{element.description}</span>
                    <ButtonIntegration onClick={element.integration}>Make Integration</ButtonIntegration>
                </Wrapper>
            </Body>
            )
        })}
        </Grid>
    )
}