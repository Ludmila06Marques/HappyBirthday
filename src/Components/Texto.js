
import Back from "./Back"
import Footer from "./Footer"
import styled from "styled-components"

export default function Texto(){


    return(<>
        <Back/>
        <Group>

        <Container><Mensagem>Querido Gustavo,
        hoje é seu aniversário e como não estamos juntos e eu estou sem dinheiro decidi fazer uma coisinha de coração pro meu momolado . Neste presente texto quero te dizer que sou muito grata por ter você na minha vida e saiba que cada dia que passa tenho mais certeza de que você é o companheiro , namorado , melhor amigo , namorido , esposo que eu quero ter ao meu lado .Estou extremamente ansiosa pra te beijar , te abraçar , te tocar ... Ansiosa pra ficar grudadinha contigo o tempo todo . Ansiosa pra transar com você e sentir sua pele ... Arrepio só de pensar .
        Prometo fazer tudo que estiver ao meu alcance para manter você seguro e feliz. Nossa vida juntos é uma linda aventura que está apenas começando! Acredito muito em você e sei que você tem um futuro brilhante e quero estar presente em cada passo que você der , comemorar cada vitoria e chorar quando houver derrota ... bom , melhor fazer você rir .
Nós já passamos por tanta coisa juntos que é impossível imaginar meu caminho sem você… E eu tenho a certeza que é só o começo.Muita saúde, sorte, paz e felicidade! Eu te amo mais que tudo e você é o amor da minha vida!</Mensagem></Container>
        <Footer/>
        </Group>
        </>)

}
const Mensagem =styled.h3`
padding:10px;
color: black;
font-family: 'Courier New', Courier, monospace;
`
const Group=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
margin-bottom: 55px;
`
const Container=styled.div`
border-radius: 10px 0px 10px 0px;
box-shadow: 0 0 2em black;
text-align: center;
width: 300px;
height: auto;
background-color: white;
`
