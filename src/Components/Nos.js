import Back from "./Back"
import Footer from "./Footer"
import styled from "styled-components"
import { useState } from "react"
import insira from "../imgNos/insira.png"






   export default function Nos(){

    const array=[insira]

    const [sorteada , setSorteada]=useState()
    function sortear(){
     
        const sorteado= array[Math.floor(Math.random() * array.length)];
      setSorteada(sorteado)
    
   
    }


    return(<>
        <Back/>
        <Container>
        <Titulo><TextoTitulo> <ion-icon name="heart-circle-outline"></ion-icon> Um pouquinho de nós</TextoTitulo></Titulo>
        {sorteada== null? 
         <Image onClick={sortear} >  <Clicar >  <h1>Clique aqui para sortear uma foto</h1>  </Clicar> </Image>
     
         :  
          <Image onClick={sortear} > <img src={sorteada}/> </Image>  }
     </Container>
        <Footer/>
        </>)
   }

   
   const Clicar=styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 300px;
   height: 300px;
   background-color: white;
  padding: 10px;
  border-radius: 8px;
   h1{
    font-size: 20px;
    color: black;
    text-align: center;
    font-family:'Carter One', cursive;
   
   }
   `

   const Image=styled.div`
   img{
    width: 300px;
   height: auto;
   border-radius: 8px;
    margin-bottom: 50px;
   }
   `
   const Container=styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 10px;

   `
   const TextoTitulo=styled.h1`
   color: black;
   font-size: 25px;
  font-family:'Carter One', cursive;
  color: whitesmoke;
   `
   const Titulo=styled.div`
   width: 100%;
   height: 100px;
   display: flex;
   justify-content: center;
   align-items: center;
   
   `
