import { useRef } from "react";
import Head from "../header/dashboard";
import BoxData from "./components/BoxData";
import { Line } from "react-chartjs-2";
export default function Dash() {
    
    let Mock = {
        turnover: 0.50,
        productPaymentAmount: 0.00,
        newIncomending: [
        ],
    }
    
    let Data = {
        Mock
    }
    return (
        <>
            <Head>
                
            </Head>
            <div className="dash">
                    <BoxData>
                        <span>Turnover</span>
                        <span style={{
                            paddingTop: 40,
                            fontSize: 28,
                            fontWeight: 500
                        }}>${Data.Mock.turnover.toFixed(2)}</span>
                    </BoxData>
                    <BoxData>
                    <span>Total Product Payment</span>
                        <span style={{
                            paddingTop: 40,
                            fontSize: 28,
                            fontWeight: 500
                        }}>${Data.Mock.productPaymentAmount.toFixed(2)}</span>
                    </BoxData>
                    <BoxData>
                    <span>Your New Messages</span>
                    </BoxData>
                </div>
        </>
    )
}