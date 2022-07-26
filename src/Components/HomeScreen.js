import NavBarr from "./NavBarr"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Footer from "./Footer"


export default function HomeScreen(){

       return(<>
    <Group>
    <NavBarr/>
    <Container>
     
        <Link to="/frases">
        <Titulo><ion-icon name="receipt-outline"></ion-icon></Titulo>
        </Link>
        <Link to="/perguntas">
        <Titulo><ion-icon name="help-outline"></ion-icon></Titulo>
        </Link>
        <Link to="/texto">
        <Titulo><ion-icon name="mail-unread-outline"></ion-icon></Titulo>
        </Link>
        <Link to="/fogo" >
        <Titulo><ion-icon name="bed-outline"></ion-icon></Titulo>
        </Link>
        <Link to="/nos" >
        <Titulo><ion-icon name="heart-half-outline"></ion-icon></Titulo>
        </Link>

      

    </Container>
    <Texto>Escolha uma opçao e aproveite!!</Texto>
    </Group>
    <Footer/>
    </>)
}

const Group=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Texto=styled.h1`

color: white;
font-size: 50px;
text-align: center;
margin-top: 45px;
font-family:'Carter One', cursive;


`
const Titulo=styled.h3`
margin: 0 10px;
color: white;
font-size: 28px;
margin: 0 15px;

:first-child{
    margin-left: 5px;
}


`
const Container=styled.div`

display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
height: 60px;
box-shadow: 0 0 1em black;


a{
    text-decoration: none;
}


`