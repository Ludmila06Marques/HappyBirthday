import styled from "styled-components"

export default function NavBarr(){
    return(<>
    <Container>

        <Titulo>Feliz aniversario !</Titulo>
      
    </Container>
   
    </>)
}


const Titulo=styled.div`
color: white;
font-size: 36px;
font-family:'Carter One', cursive;

`

const Container=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 62px;
width: 100%;
background-color: black;
opacity: 0.6;
`