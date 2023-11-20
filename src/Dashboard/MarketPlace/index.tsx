
import { useState} from "react";
import Head from "../header/dashboard";
import ItemLoja from "./components/itemLoja";
import { useSelector } from "react-redux";
import { Cart } from "./components/styles";


export default function Marketplace() {
    const products = useSelector((state : any) => state.products);
    const [cat, setCat] = useState({
        productName: "",
        category: ""    
    });
    let categorys = [
            "wallets", "clean", "wallets"
        ]
    return (
        <>
            <Head>
            </Head>
            <div className="dash marketplace">
                <div className="search-section">
                    <div className="column-flex">
                    <span>Marketplace Products</span>
                    <select onChange={({target})=>{
                        setCat({...cat, category: target.value});
                    }} name="categorys" id="category">
                        {categorys.map((element, key) => {
                            return <option itemType={element} key={key} onClick={(e)=>{
                                console.log(e)
                            }}>{element}</option>
                        })}
                    </select>
                    </div>
                    <input onChange={
                        ({target})=>{
                            setCat({...cat, productName: target.value});
                        }
                    } type="text" />
                </div>
                <div className="list-products">
                {products.map((product : any)=>{
                        if(product.category == cat.category || cat.category == "" && product.productName.toLowerCase().includes(cat.productName)){
                            return <ItemLoja product={product}></ItemLoja>
                        }
                    })}
                </div>
            </div>
        </>
    )
}