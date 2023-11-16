import Head from "../Dashboard/header/dashboard";
import StoreForIntegrate from "./components";
import { Container } from "./style";

export default function MarketIntegration() {
    const options = [
        {}
    ]
    return (
        <>
            <Head>
            </Head>
            <Container>
                <span>Marketing Integrations</span>
                <StoreForIntegrate />
            </Container>
        </>
    )
}