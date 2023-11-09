import { ReactComponentElement, ReactNode } from "react";
import { Box } from "./style";
export default function BoxData({children}: any){
    return(
        <Box color="#e90000">
            {children}
        </Box>
    )
}