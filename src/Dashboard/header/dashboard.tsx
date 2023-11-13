import { faChartLine, faBasketShopping, faCartShopping, faBox, faBoxesStacked, faList, faFileArchive, faFileContract, faUser, faWallet, faNetworkWired, faTrash } from "@fortawesome/free-solid-svg-icons";
import logo from './../../assets/bestseller_blue.png'
import ComponentAside from "./componentAside";
import { Header, Main, Painel, SideBar } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useContext, useState } from "react";
import CtxtTypeLogin from "../../contexts/LoginType";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "../MarketPlace/components/styles";
import { DropCartItemBySku } from "../../stores/cart";
import e from "express";

const Head: React.FC<{ children: any }> = ({ children }: any) => {
    const [clickCart, setClickCart] = useState(false);
    const { state } = useContext(CtxtTypeLogin);
    const dispatch = useDispatch();
    const cart = useSelector((state: { cart: any }) => state.cart);
    const products = useSelector((state: { products: any }) => state.products);
    const [all, setAll] = useState(false);
    const cash = useSelector((state: { cash: any }) => state.cash)
    const ItensSide = [
        {
            name: "Dashboard",
            icon: faChartLine,
            path: "/dashboard"
        },
        {
            name: "Marketplace",
            icon: faBasketShopping,
            path: "/marketplace"
        },
        {
            name: "Orders",
            icon: faCartShopping,
            path: "/dashboard"
        },
        {
            name: "Listing",
            icon: faBox,
            path: "/dashboard"
        },
        {
            name: "Inventory",
            icon: faBoxesStacked,
            path: "/dashboard"
        },
        {
            name: "Products Requests",
            icon: faFileContract,
            path: "/dashboard"
        },
        {
            name: "Users",
            icon: faUser,
            path: "/dashboard"
        },
        {
            name: "Wallet",
            icon: faWallet,
            path: "/dashboard"
        },
        {
            name: "Market Integrations",
            icon: faNetworkWired,
            path: "/dashboard"
        },
    ]
    return (
        <Main>
            <Header>
                <div className="painel-left">
                    <FontAwesomeIcon onClick={
                        () => {
                            setAll(!all);
                        }
                    } width={100} height={100} fontSize={30} icon={faList}></FontAwesomeIcon>
                    <img width={100}
                        height={30}
                        src={logo} />
                    <span>{state}</span>
                </div>
                <Painel>
                    <div id="cash">
                        <span>$</span>
                        <span>{cash.toFixed(2)}</span>
                    </div>
                    <FontAwesomeIcon fontSize={20} onClick={() => {
                        setClickCart(!clickCart);
                    }} color="white" icon={faCartShopping}></FontAwesomeIcon>
                    <span></span>
                </Painel>
            </Header>
            <SideBar allactive={all}>
                {ItensSide.map((element, key) => {
                    return <ComponentAside key={key} color="#FF7F10" icon={element.icon} path={element.path} name={element.name} allactive={all} ></ComponentAside>
                })}
            </SideBar>
            {children}

            <Cart left={clickCart ? 0 : -502}>
                <div className="body">
                    <span className="span">Sample Cart</span>
                    {
                        cart.map((element: any) => {
                            console.log(element)
                            return (<div>
                                {
                                    products.map((product: any) => {
                                        if (product.sku == element.sku) {
                                            return (
                                                <div style={{
                                                    padding:30,
                                                    boxShadow: "0px 1px 10px #00000020",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between"
                                                }}>
                                                    <div style={{
                                                        display: "flex",
                                                        gap:10,
                                                        alignItems: "center",
                                                    }}>
                                                        <img width={150} src={product.imgPath}></img>
                                                        <div style={{
                                                            display: "flex",
                                                            flexDirection: "column"
                                                        }}>
                                                            <span style={{
                                                                width: 170,
                                                                fontSize: 12
                                                            }}>{product.productName}</span>
                                                            <span>quantity: {element.quantity}</span>
                                                            <span style={{
                                                                color: "#0EBAE6"
                                                            }}>${(element.quantity * product.price).toFixed(2)}</span>
                                                        </div>
                                                    </div>
                                                    <FontAwesomeIcon icon={faTrash} onClick={()=>{
                                                        dispatch(DropCartItemBySku(element.sku));
                                                    }} color="red"></FontAwesomeIcon>
                                                </div>)
                                                
                                        }
                                    })
                                    
                                }
                            </div>)
                        })
                    }
                    
                    <div className="cancel">
                        <button onClick={() => {
                        setClickCart(!clickCart);
                    }}>Cancel</button>
                    {
                        cart.length > 0 ? <button className="chechout">Checkout</button> : undefined
                    }</div>
                </div>
            </Cart>
        </Main>
    )
}
export default Head;