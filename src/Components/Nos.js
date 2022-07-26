import Back from "./Back"
import Footer from "./Footer"
import styled from "styled-components"
import { useState } from "react"
import img1 from "../imgNos/1.jpg"
import img2 from "../imgNos/2.jpg"
import img3 from "../imgNos/3.jpg"
import img4 from "../imgNos/4.jpg"
import img5 from "../imgNos/5.jpg"
import img6 from "../imgNos/6.jpg"
import img7 from "../imgNos/7.jpg"
import img8 from "../imgNos/8.jpg"
import img9 from "../imgNos/9.jpg"
import img10 from "../imgNos/10.jpg"
import img11 from "../imgNos/11.jpg"
import img12 from "../imgNos/12.jpg"
import img15 from "../imgNos/15.jpg"
import img16 from "../imgNos/16.jpg"
import img17 from "../imgNos/17.jpg"
import img18 from "../imgNos/18.jpg"
import img19 from "../imgNos/19.jpg"
import img20 from "../imgNos/20.jpg"
import img21 from "../imgNos/21.jpg"
import img22 from "../imgNos/22.jpg"
import img23 from "../imgNos/23.jpg"
import img24 from "../imgNos/24.jpg"
import img25 from "../imgNos/25.jpg"






   export default function Nos(){

    const array=['/static/media/1.7f401367.jpg','/static/media/2.6e14d118.jpg','/static/media/3.c134cccc.jpg','/static/media/4.e0767cb1.jpg','/static/media/5.afff0c7d.jpg','/static/media/6.a379fd34.jpg','/static/media/7.cf22c64a.jpg' ,'/static/media/8.a8752185.jpg' ,'/static/media/9.7be3117e.jpg' ,'/static/media/10.bf27cff0.jpg' ,'/static/media/11.9bfca416.jpg','/static/media/12.0db938c8.jpg','/static/media/15.011d829f.jpg','/static/media/16.d323d801.jpg' ,'/static/media/17.889bc7ad.jpg','/static/media/18.3d648da3.jpg','/static/media/19.a1643991.jpg','/static/media/20.78216183.jpg','/static/media/21.0090da17.jpg ','/static/media/22.895c61ed.jpg','/static/media/23.8f4b1828.jpg ','/static/media/24.4707f4ef.jpg ','/static/media/25.c6184edb.jpg']

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
