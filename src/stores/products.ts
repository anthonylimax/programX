import { createSlice } from "@reduxjs/toolkit";

const products_storage = [{
                imgPath: "https://www.lojafasolo.com.br/arquivos/PRODUTOS/9641614980571747180/270_G_Carteira-de-Couro-Masculina-PortaCheques-H01.jpg",
                productName: "Personalized Leather Men's Wallet with 9",
                category: "wallets",
                price: 189.99,
                weight: 200,
                sku:"1d2",
            },
            {
                imgPath: "https://www.lojafasolo.com.br/arquivos/PRODUTOS/9641614980571747180/270_G_Carteira-de-Couro-Masculina-PortaCheques-H01.jpg",
                productName: "Personalized Leather Men's Wallet with 7",
                category: "wallets",
                price: 189.99,
                weight: 200,
                sku:"1d3",
            },
            {
                imgPath: "https://www.lojafasolo.com.br/arquivos/PRODUTOS/9641614980571747180/270_G_Carteira-de-Couro-Masculina-PortaCheques-H01.jpg",
                productName: "Personalized Leather Men's Wallet with 6",
                category: "wallets",
                price: 189.99,
                weight: 200,
                sku:"1d4",
            },
            {
                imgPath: "https://www.lojafasolo.com.br/arquivos/PRODUTOS/9641614980571747180/270_G_Carteira-de-Couro-Masculina-PortaCheques-H01.jpg",
                productName: "Personalized Leather Men's Wallet with 3",
                category: "wallets",
                price: 189.99,
                weight: 200,
                sku:"1d5",
            },
            {
                imgPath: "https://www.lojafasolo.com.br/arquivos/PRODUTOS/9641614980571747180/270_G_Carteira-de-Couro-Masculina-PortaCheques-H01.jpg",
                productName: "Personalized Leather Men's Wallet with4",
                category: "wallets",
                price: 189.99,
                weight: 200,
                sku:"1d6",
            },
            {
                imgPath: "https://www.lojafasolo.com.br/arquivos/PRODUTOS/9641614980571747180/270_G_Carteira-de-Couro-Masculina-PortaCheques-H01.jpg",
                productName: "Personalized Leather Men's Wallet with 2",
                category: "wallets",
                price: 189.99,
                weight: 200,
                sku:"1d7",
            },
            {
                imgPath: "https://www.lojafasolo.com.br/arquivos/PRODUTOS/9641614980571747180/270_G_Carteira-de-Couro-Masculina-PortaCheques-H01.jpg",
                productName: "Personalized Leather Men's Wallet with 1",
                category: "wallets",
                price: 189.99,
                weight: 200,
                sku:"1d8",
            },]
export const products = createSlice(
    {
        name: "products",
        initialState: products_storage,
        reducers:{
            PerCategory: ()=>{

            },
            PerName:()=>{

            }
            ,
        }

    }
)

export default products.reducer;