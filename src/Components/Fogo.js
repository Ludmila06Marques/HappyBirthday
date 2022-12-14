import Back from "./Back"
import Footer from "./Footer"
import styled from "styled-components"
import { useState } from "react"
import rir from "../imgFogo/rir.png"
import insira from "../imgNos/insira.png"

export default function Fogo(){

   
    const [data , setData]=useState("")
    const [outra , setOutra]=useState("")
    const [visible , setVisible]=useState(true)
    const [view , setView]=useState(false)
    const [other , setOther]=useState(false)
    function verifica(){
        if(data=="umasenha"){
            setVisible(false)
            setOther(true)
            //setView(true)
        }else{
            alert("Senha incorreta hem !!")
        }
    }
    function verificaDnv(){
        if(outra=="outrasenha"){
            setOther(false)
            setView(true)
        }else{
            alert("Senha incorreta hem !!")
        }
    }


    const [sorteada , setSorteada]=useState()
  
  
    const array=[insira]

  function sortear(){
     
       const sorteado= array[Math.floor(Math.random() * array.length)];
      setSorteada(sorteado)
      
   
    }

    return(<>
        <Back/>
        
        <Group type={visible} >
            <Titulo><TextoTitulo> Descubra a senha e você ganhará uma surpresinha
                </TextoTitulo></Titulo>
        <InputSenha type="password" placeholder="Descubra a senha e adentrarás"  onChange={(e)=> setData(e.target.value)} value={data}/>
        <Abrir onClick= {verifica} >Entrar</Abrir>
        <Titulo><TextoTitulo>Dica : 
           <h2>-Alguma dica </h2> 
     </TextoTitulo>
           </Titulo>
        </Group>
        
        <GroupOther visualizar={other} >
            <Titulo><TextoTitulo> <img src={rir} /> Achou que ia ser facil né HAHAHAHAHAHAH
                </TextoTitulo></Titulo>
                <Validar  type="password"   placeholder="Outra senha hihi"   onChange={(e)=> setOutra(e.target.value)} value={outra}/>
        <Abrir onClick= {verificaDnv} >Entrar</Abrir>
        <Titulo><TextoTitulo>Dicas : 
           <h2> -Outra dica</h2>
           <h2>.................</h2> 
           </TextoTitulo>
           </Titulo>
        </GroupOther>
        

        
        {sorteada == null ?  <Images onClick={sortear} type={view} ><Foto> <h1>Clique aqui para sortear uma foto </h1></Foto></Images> : <Images onClick={sortear} type={view} ><Foto>  <img src={sorteada} />  </Foto></Images> }
       
        <Footer/>
        </>)
}

const GroupOther =styled.div`
display:${props => props.visualizar  ? "flex": "none"};
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 50px;
`

const Validar=styled.input`
width: 300px;
height: 52px;
border-radius: 8px;
border: 1px solid white;
text-align: center;
`

const TextoTitulo=styled.h1`
color: black;
font-size: 18px;
font-family:'Carter One', cursive; 
text-align: center;

h2{

}
img{
    width: 100px;
    height: auto;
}
`

const Titulo=styled.div`
margin-bottom: 30px;
padding: 10px;
border: 1px solid white;
border-radius: 8px;
padding: 5px;
box-shadow: 0 0 1em black;
`

const Images=styled.div`
display:${props => props.type  ? "flex": "none"};
justify-content: center;
align-items: center;
margin-top: 15px;
h1{
    padding: 10px;
    margin-top: 50vw;
    font-size: 20px;
    color: white;
    text-align: center;
    font-family:'Carter One', cursive;
   
   }
`

const Foto=styled.div`
width: 300px;
border-radius: 8px;


img{
    margin-top: 50px;
    width: 300px;
   height: auto;
   border-radius: 8px;
    margin-bottom: 50px;
   }
`
const Abrir = styled.button`
width: 250px;
height: 40px;
background-color: white;
border-radius: 8px;
border: 1px solid white;
margin-top: 15px;
margin-bottom: 15px;
`
const Group =styled.div`
display:${props => props.type  ? "flex": "none"};
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px;
`

const InputSenha=styled.input`
width: 300px;
height: 52px;
border-radius: 8px;
border: 1px solid white;
text-align: center;
`