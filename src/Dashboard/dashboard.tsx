import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import ComponentAside from "./componentAside";
import { Main, SideBar } from "./style";

export default function Dashboard(){
    return(
        <Main>
            <SideBar>
             <ComponentAside name="Dashboard" icon={faChartLine}></ComponentAside>    
            </SideBar>
        </Main>
    )
}