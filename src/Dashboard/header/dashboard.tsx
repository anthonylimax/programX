import { faChartLine, faBasketShopping, faCartShopping, faBox, faBoxesStacked, faList, faFileArchive, faFileContract, faUser, faWallet, faNetworkWired} from "@fortawesome/free-solid-svg-icons";
import logo from './../../assets/bestseller.png'
import ComponentAside from "./componentAside";
import {Header, Main, SideBar } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {useState } from "react";

const Head : React.FC<{children: any}> = ({children} : any) => {
    const [all, setAll] = useState(false);
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
    return(
        <Main>
            <Header>
                <FontAwesomeIcon onClick={
                    ()=>{
                        setAll(!all);
                    }
                } width={100} height={100} fontSize={30} icon={faList}></FontAwesomeIcon>
                <img width={100}
                height={30}
                src={logo} />
            </Header>
            <SideBar allactive={all}>
                {ItensSide.map((element, key)=>{
                    return <ComponentAside key={key} icon={element.icon} path={element.path} name={element.name} allactive={all} ></ComponentAside>
                })}  
            </SideBar>
            {children}
        </Main>
    )
}
export default Head;