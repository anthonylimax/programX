import { Container, Input, InputEnv } from "../style";
import { Painel } from "./style";

export default function LoginProducer(){
    return (
        <Container>
            <Painel>
                <InputEnv className="input-signup">
                    <label>TEXTO</label>
                    <Input type="text" name="name" />
                </InputEnv>
            </Painel>
        </Container>
    )
}