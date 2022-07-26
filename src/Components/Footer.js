import styled from "styled-components"

export default function Footer(){
    return(<>
    <Container><ion-icon name="heart-circle-outline"></ion-icon>Eu te amo , momo<ion-icon name="heart-circle-outline"></ion-icon></Container>
    </>)
}
const Container=styled.div`
box-shadow: 0 0 1em black;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 52px;
background-color: black;
opacity: 0.6;
position: fixed;
bottom: 0;
color: white;
font-size: 20px;
font-family:'Carter One', cursive;
ion-icon{
    font-size: 26px;
    color: white;
    padding: 8px;
}
`