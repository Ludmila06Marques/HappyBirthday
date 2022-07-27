import Back from "./Back"
import Footer from "./Footer"
import styled from "styled-components"
import { useState } from "react"
import img1 from "../imgFogo/1.jpg"
import img2 from "../imgFogo/2.jpg"
import img3 from "../imgFogo/3.jpg"
import img4 from "../imgFogo/4.jpg"
import img5 from "../imgFogo/5.JPG"
import img6 from "../imgFogo/6.JPG"
import img7 from "../imgFogo/7.JPG"
import img8 from "../imgFogo/8.JPG"
import img9 from "../imgFogo/9.JPG"
import img10 from "../imgFogo/10.jpg"
import img11 from "../imgFogo/11.jpg"

export default function Fogo(){

   
    const [data , setData]=useState("")
    const [outra , setOutra]=useState("")
    const [visible , setVisible]=useState(true)
    const [view , setView]=useState(false)
    const [other , setOther]=useState(false)
    function verifica(){
        if(data=="praiadasconchas"){
            setVisible(false)
            setOther(true)
            //setView(true)
        }else{
            alert("Senha incorreta hem !!")
        }
    }
    function verificaDnv(){
        if(outra=="promessadededinho"){
            setOther(false)
            setView(true)
        }else{
            alert("Senha incorreta hem !!")
        }
    }


    const [sorteada , setSorteada]=useState()
    const array=['/static/media/1.fdcf496c.jpg', '/static/media/2.c2fc526d.jpg', '/static/media/3.a3578889.jpg ','/static/media/4.94bbbf80.jpg', '/static/media/5.c1716d06.JPG ','/static/media/6.1ca7750d.JPG', '/static/media/7.d5d1d0f6.JPG ', '/static/media/8.ccbd9066.JPG',' /static/media/9.c042bbbc.JPG', '/static/media/10.7f6b2e8b.jpg', '/static/media/11.43a37a95.jpg']
    function sortear(){
     
        const sorteado= array[Math.floor(Math.random() * array.length)];
      setSorteada(sorteado)
      
   
    }

    return(<>
        <Back/>
        
        <Group type={visible} >
            <Titulo><TextoTitulo>Tá ficando quente aqui hem !! Descubra a senha e você ganhará uma surpresinha
                </TextoTitulo></Titulo>
        <InputSenha type="password" placeholder="Descubra a senha e adentrarás"  onChange={(e)=> setData(e.target.value)} value={data}/>
        <Abrir onClick= {verifica} >Entrar</Abrir>
        <Titulo><TextoTitulo>Dicas : 
           <h2> -Foi no perigo</h2>
           <h2>-Longe de casa </h2> 
           <h2>  -Salgadinho</h2>  </TextoTitulo>
           </Titulo>
        </Group>
        
        <GroupOther visualizar={other} >
            <Titulo><TextoTitulo>Pediu dica ? Entao coloquei outra senha hihihi
                </TextoTitulo></Titulo>
                <Validar  type="password"   placeholder="Outra senha hihi"   onChange={(e)=> setOutra(e.target.value)} value={outra}/>
        <Abrir onClick= {verificaDnv} >Entrar</Abrir>
        <Titulo><TextoTitulo>Dicas : 
           <h2> -É algo muito importante</h2>
           <h2>.................</h2> 
           </TextoTitulo>
           </Titulo>
        </GroupOther>
        

        
        {sorteada == null ?  <Images onClick={sortear} type={view} ><Foto> <h1>Clique aqui para sortear uma foto fogosa</h1></Foto></Images> : <Images onClick={sortear} type={view} ><Foto>  <img src={sorteada} />  </Foto></Images> }
       
        <Footer/>
        </>)
}

const GroupOther =styled.div`
display:${props => props.visualizar  ? "flex": "none"};
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px;
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