import Back from "./Back"
import styled from "styled-components"
import Love from "../Img/love.png"
import { useState } from "react"
import pote from "../Img/pote.png"
import Footer from "./Footer"




export default function Frases(){
    
const [sorteada , setSorteada]=useState()


    let array=[{name:"Eu amo a forma como você olha para mim."},{name:"Com você me sinto segura."},{name:"Você faz o meu coração sorrir."},{name:"Eu sou 100% feliz quando estou ao seu lado."},{name:"Você me ensinou o verdadeiro significado do amor."},{name:"Meus olhos brilham quando olho para você."},{name:" Você é mais doce do que brigadeiro."},{name:"Você me faz ser uma pessoa melhor."},{name:"Confiamos um no outro incondicionalmente."},{name:"Eu não consigo imaginar uma vida sem você."},{name:"Você é fofo quando está bravo."},{name:"Você é o meu melhor amigo."},{name:"Seus abraços me confortam."},{name:"Seus beijos me deixam com as pernas bambas."},{name:"Você me entende, mesmo quando estou sendo irracional."},{name:"Você me aceita como sou."},{name:" A vida é mais alegre ao seu lado."},{name:" Estamos conectados, mesmo quando estamos em uma multidão."},{name:"Você transforma a minha vida em uma aventura mágica"},{name:"Cada momento de dificuldade contigo é uma oportunidade de amadurecimento."},{name:"Um carinho seu é capaz de arrepiar atéos cabelo do cu"},{name:"Os seus labios têm o sabor mais bom"},{name:"Amo imaginar o que o futuro nos espera."},{name:" Você atura as minhas manias."},{name:"Amo acordar ao seu lado."},{name:"Amo quando você me surpreende."},{name:" Amo começar e terminar o dia com você."},{name:"Você demonstra o seu amor através dos seus gestos."},{name:"Você é a pessoa que sempre sonhei ter ao meu lado."},{name:"Sinto que consigo vencer qualquer batalha ao seu lado."},{name:"Eu amo o jeito como me faz rir com piadas idiotas."},{name:"Amo seu sorriso bobo quando me vê."},{name:"Amo como cada novo dia ao seu lado é uma aventura."},{name:"Amo saber que temos um futuro pela frente."},{name:"Não preciso de mais ninguém se tiver você aqui."},{name:"Agradeço muito por ter alguém com quem compartilhar tristezas e alegrias!"},{name:"Namorar com você é viver em constante alegria."},{name:"Às vezes, nem acredito a sorte que tenho de ter você ao meu lado todos os dias."},{name:"Vi que era amor quando te achei em mim e me perdi em você."},{name:"Quero cozinhar um almoço de família com você."},{name:"Quero beijar você quando o relógio der meia-noite no ano novo"},{name:"Agradeço pelo meu caminho ter cruzado o seu."}]
    

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