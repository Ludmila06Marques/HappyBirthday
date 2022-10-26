import Back from "./Back"
import styled from "styled-components"
import Love from "../Img/love.png"
import { useState } from "react"
import pote from "../Img/pote.png"
import Footer from "./Footer"




export default function Frases(){
    
const [sorteada , setSorteada]=useState()


    let array=[{name:"Coloque sua frase aqui"}]
    

    function sortear (){
        const sorteado= array[Math.floor(Math.random() * array.length)];
       setSorteada(sorteado.name)
    }
    
    return(<>
   
    <Back/>
    <Group>
        <Cabecalho>
            <img src={pote}/>
        <Titulo>O potinho do amor</Titulo>
        </Cabecalho>
        {sorteada==null ?  <Container onClick={sortear}>
       <img src={Love}/>
       <Texto>Clique aqui para sortear uma frase</Texto>
   </Container> :
    <Container onClick={sortear}>
    <img src={Love}/>
    <Texto>{sorteada} </Texto>
</Container>}
      
        
 
    </Group>
<Footer/>
    </>)
}
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