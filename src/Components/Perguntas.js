 import styled from "styled-components"
 import Footer from "./Footer"
 import Back from "./Back"
import ask from "../Img/ask.png"
import Love from "../Img/love.png"
import { useState } from "react"

export default function Perguntas(){
    const array=[{pergunta:"Quando comecamos a namorar ?" , resposta:"23/01/2019"},{pergunta:"Onde foi nosso primeiro encontro?" , resposta:"No +acai"},{pergunta:"Qual minha cor preferida ?" , resposta:"roxo"},{pergunta:"Qual o momento mais especial que temos juntos" , resposta:"Primeira vez que eu voltei da Espanha"},{pergunta:"Qual melhor posicao de sexo" , resposta:"Ladin hihi"},{pergunta:"Qual é o tipo de comida que mais comemos juntos?" , resposta:"arroz e feijao"} ,{pergunta:"Nós dividimos algum sonho?" , resposta:"Viajar o mundo"} ,{pergunta:"O que faz de você um bom namorado?" , resposta:"Parceria e respeito"} ,{pergunta:"Qual apelidinho nosso que você adora, mas tem vergonha de dizer em público?" , resposta:"momo"} ,{pergunta:"Quais foram as primeiras impressões que tiveste de mim? " , resposta:"hummm que cara gostoso"} ,{pergunta:"Quem é mais provável de sentir ciúme mais rápido?" , resposta:"Gustavo"} ,{pergunta:"Você lembra qual foi o primeiro filme que vimos juntos?" , resposta:"Wifi Ralph"} ,{pergunta:"Quais músicas você escuta e se lembra de mim?" , resposta:"Saudade de vc"} ,{pergunta:"Onde nos beijamos pela primeira vez?" , resposta:"No carro dos seus pais"} ,{pergunta:"Qual foi a sua maior lição de relacionamentos anteriores?" , resposta:"Aprender a respeitar e a me dar valor"} ,{pergunta:"O que sente falta da vida de solteiro?" , resposta:"De nada"} ,{pergunta:"O que você mais ama fazer comigo?" , resposta:"Amo estar com vc"}]
    const [sorteada , setSorteada]=useState([])
    const [virarCarta , setVirarCarta]=useState(false)

    function sortear(){
        const sorteado= array[Math.floor(Math.random() * array.length)];
        setSorteada(sorteado)
        console.log(sorteado.pergunta)    
    }
    function mostrar(){
setVirarCarta(true)
    }

    function proxima(){
        setVirarCarta(false)
       
        console.log(virarCarta)
        sortear()
    }
    return(<>
        <Back/>
    <Group>
        <Cabecalho>
            <img src={ask}/>
        <Titulo>O joguinho das perguntas </Titulo>
        </Cabecalho>
        {sorteada.length==0 ?  <Container onClick={sortear}>
       <img src={Love}/>
       <Texto>Clique aqui para sortear uma frase</Texto>
   </Container> :
    <Container >
    <img src={Love}/>
    <Texto>{sorteada.pergunta} </Texto>
    <Mostrar onClick={mostrar} >Mostrar resposta</Mostrar>
</Container> }
      
        <Resposta type={virarCarta}><TextoResposta>{sorteada.resposta}</TextoResposta></Resposta>
<Proxima onClick={proxima} >Proxima pergunta</Proxima>
    </Group>
<Footer/></>)
        
}
const Mostrar=styled.h3`
font-family:'Carter One', cursive;
font-size: 10px;
color: red;
position: absolute;
bottom: 5px;
right: 5px;
border: 1px solid red;
border-radius: 8px;
padding: 3px;
`

const Proxima=styled.button`
width: 250px;
height: 52px;
background-color: white;
border: 1px solid white;
border-radius: 8px;
margin-top: 5px;
margin-bottom: 80px;
`
const TextoResposta=styled.h1`
text-align: center;
font-size: 20px;
color: black;
font-family:'Carter One', cursive;
padding: 30px;
max-width: 280px;
max-height: 280px;
`
const Resposta=styled.div`
display:${props => props.type  ? "inline": "none"};
width: 300px;
height: 80px;
background-color: white;
border-radius: 8px;
margin-top: 15px;
`
const Cabecalho=styled.div`
margin-top: 10px;
margin-bottom: 10px;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 60px;
img{
    width: 50px;
    height: 60px;
}
`
const Titulo=styled.h1`
padding: 5px;
font-size: 20px;
color: white;
font-family:'Carter One', cursive;
`
const Texto=styled.h1`
text-align: center;
font-size: 28px;
color: black;
font-family:'Carter One', cursive;
padding: 30px;
max-width: 280px;
max-height: 280px;
`

const Group=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const Container=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 300px;
height: 300px;
background-color: white;
border-radius: 8px;
position: relative;
img{
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.3;
}
`