 import styled from "styled-components"
 import Footer from "./Footer"
 import Back from "./Back"
import ask from "../Img/ask.png"
import Love from "../Img/love.png"
import { useState } from "react"

export default function Perguntas(){
    const array=[{pergunta:"PERGUNTE ALGO?" , resposta:"COLOQUE A RESPOSTA"}]
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
       <Texto>Clique aqui para sortear uma pergunta</Texto>
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