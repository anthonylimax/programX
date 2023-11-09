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
    },
    {
        name: "Marketplace",
        icon: faBasketShopping,
    },
    {
        name: "Orders",
        icon: faCartShopping,
    },
    {
        name: "Listing",
        icon: faBox,
    },
    {
        name: "Inventory",
        icon: faBoxesStacked,
    },
    {
        name: "Products Requests",
        icon: faFileContract,
    },
    {
        name: "Users",
        icon: faUser,
    },
    {
        name: "Wallet",
        icon: faWallet,
    },
    {
        name: "Market Integrations",
        icon: faNetworkWired,
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
                    return <ComponentAside key={key} icon={element.icon} name={element.name} allactive={all} ></ComponentAside>
                })}  
            </SideBar>
            {children}
        </Main>
    )
}
export default Head;