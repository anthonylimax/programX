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
    return(
        <BodyItem>
            <img src={props.product.imgPath} />
            <span>{props.product.productName}</span>
            <span>{props.product.category}</span>
            <span>{props.product.price}</span>
            <span>{props.product.weight}</span>
            <span>{props.product.sku}</span>
        </BodyItem>
    )
}