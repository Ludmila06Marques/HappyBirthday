import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Back(){
    return(<>
    <Container>
        <Link to="/home" >
       <Icone><ion-icon name="arrow-back-circle-outline">
            </ion-icon>
            </Icone> 
     </Link>
            </Container>
    
    </>)
}
const Icone=styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
font-size: 45px;
color: white;
`
const Container=styled.div`
height: 50px;
width: 100%;
background-color: black;
opacity: 0.6;


`