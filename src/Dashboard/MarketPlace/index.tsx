
import { useState} from "react";
import Head from "../header/dashboard";
import ItemLoja from "./components/itemLoja";


export default function Marketplace() {
    
    const [cat, setCat] = useState({
        productName: "",
        category: ""
    });
    let Data = {
        categorys: [
            "wallets", "clean   ", "wallets"
        ],
        products: [
            {
                imgPath: "https://www.lojafasolo.com.br/arquivos/PRODUTOS/9641614980571747180/270_G_Carteira-de-Couro-Masculina-PortaCheques-H01.jpg",
                productName: "wallet tiger opera",
                category: "wallets",
                price: 189.99,
                weight: 200,
                sku:"sasasani",
            },
            {
                imgPath: "https://www.lojafasolo.com.br/arquivos/PRODUTOS/9641614980571747180/270_G_Carteira-de-Couro-Masculina-PortaCheques-H01.jpg",
                productName: "wallet tiger ninja",
                category: "wallets",
                price: 189.99,
                weight: 200,
                sku:"sasasani",
            },
            {
                imgPath: "https://www.lojafasolo.com.br/arquivos/PRODUTOS/9641614980571747180/270_G_Carteira-de-Couro-Masculina-PortaCheques-H01.jpg",
                productName: "tiger opera ninja",
                category: "wallets",
                price: 189.99,
                weight: 200,
                sku:"sasasani",
            },
            {
                imgPath: "https://www.lojafasolo.com.br/arquivos/PRODUTOS/9641614980571747180/270_G_Carteira-de-Couro-Masculina-PortaCheques-H01.jpg",
                productName: "simple wallet",
                category: "wallets",
                price: 189.99,
                weight: 200,
                sku:"sasasani",
            },
        ]
    }
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
                        {Data.categorys.map((element, key) => {
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
                {Data.products.map((product)=>{
                        if(product.category == cat.category && cat.category != "" && product.productName.includes(cat.productName)){
                            return <ItemLoja product={product}></ItemLoja>
                        }
                    })}
                </div>
            </div>
        </>
    )
}