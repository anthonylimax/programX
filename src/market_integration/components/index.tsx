import { Body, ButtonIntegration, Grid, Wrapper } from "./style";


export default function StoreForIntegrate(){
    const options = [
        {
            name: "Wix",
            imgUrl: 'wix.png',
            integration: ()=>{

            },
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptatem vitae nesciunt recusandae tempore voluptas possimus, qui cumque animi quidem numquam cupiditate tempora modi reprehenderit et minima inventore nam? Impedit."
        },
        {
            name: "Wix",
            imgUrl: 'wix.png',
            integration: ()=>{
            },
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptatem vitae nesciunt recusandae tempore voluptas possimus, qui cumque animi quidem numquam cupiditate tempora modi reprehenderit et minima inventore nam? Impedit."
        },
        {
            name: "Wix",
            imgUrl: 'wix.png',
            integration: ()=>{

            },
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptatem vitae nesciunt recusandae tempore voluptas possimus, qui cumque animi quidem numquam cupiditate tempora modi reprehenderit et minima inventore nam? Impedit."
        },
        {
            name: "Wix",
            imgUrl: 'wix.png',
            integration: ()=>{
            },
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptatem vitae nesciunt recusandae tempore voluptas possimus, qui cumque animi quidem numquam cupiditate tempora modi reprehenderit et minima inventore nam? Impedit."
        },
        
    ]
    return(
        <Grid>
        {options.map((element : any, key) =>{
            return (
            <Body>
                <img src={element.imgUrl} width={100} alt="" />
                <Wrapper>
                    <span>{element.name}</span>
                    <span>{element.description}</span>
                    <ButtonIntegration onClick={element.integration}>Make Integration</ButtonIntegration>
                </Wrapper>
            </Body>
            )
        })}
        </Grid>
    )
}