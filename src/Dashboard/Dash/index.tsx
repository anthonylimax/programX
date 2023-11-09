import { useRef } from "react";
import Head from "../header/dashboard";
import BoxData from "./components/BoxData";
import { Line } from "react-chartjs-2";
import { OrderStatus } from "./components/style";
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
    let numberOrder = 0;
    Data.Mock.newIncomending.forEach((e)=>{
        numberOrder++
    })
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
                    <span>Your New Orders</span>
                    <span style={{
                            paddingTop: 40,
                            fontSize: 18,
                            fontWeight: 300
                        }}>you have {numberOrder} orders</span>
                    </BoxData>
                    <OrderStatus color="#e90000">
                        <span>Your Order Status</span>
                    </OrderStatus>
                </div>
        </>
    )
}