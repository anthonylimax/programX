import { Body, Grid } from "./style";

export default function StoreForIntegrate(){
    const options = [
        {
            name: "Wix",
            imgUrl: 'wix.png'
        },
        {}
    ]
    return(
        <Grid>
        {options.map((element : any, key) =>{
            return <Body>
                <img src={element.imgUrl} width={100} alt="" />
                
            </Body>
        })}
        </Grid>
    )
}