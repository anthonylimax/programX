import { useState } from 'react'
import { BodyItem, Cart } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { ReducerAddProduct } from '../../../stores/cart'

export type CartProps = {
    product : {
        imgPath: string,
        productName: string,
        category: string,
        price: number,
        weight: number,
        sku: string
    }
}
export default function ItemLoja(props : CartProps){
    const dispatch = useDispatch();
    const cart = useSelector((state : {cart: number}) => state.cart);

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
            <button onClick={()=>{
                dispatch(ReducerAddProduct({sku: props.product.sku, quantity: value}));
                console.log(cart);
            }} className='button-buy'>
                <FontAwesomeIcon color='white' icon={faCartShopping} onClick={()=>{}}></FontAwesomeIcon>
                <span>Add to Sample Order</span>
            </button>
        </BodyItem>
    )
}