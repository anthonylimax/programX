import { useState } from 'react'
import { BodyItem } from './styles'

type ExpectProps = {
    product : {
        imgPath: string,
        productName: string,
        category: string,
        price: number,
        weight: number,
        sku: string
    }
}
export default function ItemLoja(props : ExpectProps){
    const [value, setValue] = useState(1);
    function Increment(){
        setValue(value + 1);
    }
    function Decrement(){
        setValue(value - 1);
    }
    return(
        <BodyItem>
            <img src={props.product.imgPath} />
            <span className='product-name'>{props.product.productName}</span>
            <span className='category'>{props.product.category}</span>
            <span className='price'>${props.product.price}</span>
            <article>
                <div className='container-type'>
                    <span className='types'>WEIGHT</span>
                    <span>{props.product.weight} gr</span>
                </div>
                <div className='container-type'>
                    <span className='types'>SISTEM SKU</span>
                    <span style={{
                        textTransform: "uppercase",
                    }}>{props.product.sku}</span>
                </div>
            </article>
            <div className='addCart'>
                    <button disabled={(value <= 1 )} onClick={Decrement}>-</button>
                    <input type="text" onChange={({target})=>{
                        if(+target.value >= 1 && !isNaN(+target.value)){
                            setValue(+target.value);
                        }
                    }} value={value}/>
                    <button onClick={Increment}>+</button>
            </div>
        </BodyItem>
    )
}