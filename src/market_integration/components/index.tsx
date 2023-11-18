import { Body, ButtonIntegrate, Grid, TextLabel } from "./style";

export default function StoreForIntegrate(){
    const options = [
        {
            name: "Wix",
            imgUrl: 'wix.png',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, asperiores accusamus quasi atque consectetur quisquam quidem reiciendis iste perferendis quia eos quam, aperiam similique repellendus, beatae est dolorem molestiae quae?"
        },
        {
            imgUrl: "https://orderjp.vn/wp-content/uploads/2021/10/rakuten.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore unde, aspernatur molestiae, accusantium modi saepe illum reiciendis voluptatem eos nostrum rem odit dolorum perferendis, in numquam quae exercitationem facere!",
            name: "Rakuten",
        },
        {
            imgUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Faffilimate.com%2Fintegrations%2Frakuten%2F&psig=AOvVaw2xP12fRlO3Gs-8hJhIeD7_&ust=1700398862196000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjuiMPNzYIDFQAAAAAdAAAAABAE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore unde, aspernatur molestiae, accusantium modi saepe illum reiciendis voluptatem eos nostrum rem odit dolorum perferendis, in numquam quae exercitationem facere!",
            name: "Rakuten",
        },
    ]
    return(
        <Grid>  
        {options.map((element : any, key) =>{
            return <Body>
                <img src={element.imgUrl} width={100} alt="" />
                <TextLabel>
                    <span>{element.name}</span>
                    <span>{element.description}</span>
                    <ButtonIntegrate>
                        Integre com a {element.name}
                    </ButtonIntegrate>
                </TextLabel>
            </Body>
        })}
        </Grid>
    )
}