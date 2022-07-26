import styled from "styled-components"
import { Link } from "react-router-dom"
import heart from "../Img/heart.png"



export default function FirstScreen(){
    return(
    <>
    <Container>
    <Heart src={heart}></Heart>
        <Titulo>G</Titulo>
     
   

        <Link to="/home">
        <Entrar>ENTRAR</Entrar>
        </Link>
    </Container>
    
    
    </>)
}
const Heart=styled.img`
 width: 300px;
    height: 300px;
    margin-top: 20px;
    position: absolute;
    opacity: 0.5;

`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;

`
const Titulo=styled.h1`
margin-top: 190px;
text-align: center;
font-size: 56px;
color: black;
font-family: 'Pacifico', cursive;
`
const Entrar=styled.button`
padding: 10px;
font-size: 18px;
border-radius: 8px;
margin-top: 80px;
border: 1px solid red;
background-color: black;
color: white;
height: 42px;
width: 300px;
font-family:'Carter One', cursive;


`
