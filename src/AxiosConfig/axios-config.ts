import axios from "axios";

const requisitionAxios = axios.create(
    {
        baseURL: "http://localhost:8080",
    } 
)

export async function AxiosConfig(endpoint : string, method : "get" | "post", data : any | undefined){
    const methods = {
        "post" : async ()=>{
            let response = await requisitionAxios.post(`${endpoint}`, data);
            console.log("sal");
        },
        "get" : async ()=>{
            let response = await requisitionAxios.get(`${endpoint}`);
            console.log(response);
            console.log("sal");
        }
    }
    methods[method]();
}