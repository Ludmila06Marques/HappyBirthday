import { BrowserRouter, Routes, Route } from "react-router-dom"
import FirstScreen from "./Components/FirstScreen"
import HomeScreen from "./Components/HomeScreen"
import Fogo from "./Components/Fogo"
import Frases from "./Components/Frases"
import Perguntas from "./Components/Perguntas"
import Texto from "./Components/Texto"
import Nos from "./Components/Nos"

export default function App(){
    return(
     <>
    
        <BrowserRouter>     
        <Routes>
       <Route path="/" element={<FirstScreen/>} ></Route>
       <Route path="/home" element={<HomeScreen/>} ></Route>
       <Route path="/fogo" element={<Fogo/>} ></Route>
       <Route path="/frases" element={<Frases/>} ></Route>
       <Route path="/perguntas" element={<Perguntas/>} ></Route>
       <Route path="/texto" element={<Texto/>} ></Route>
       <Route path="/nos" element={<Nos/>} ></Route>
       
        
        </Routes>
      
        </BrowserRouter>
       
        </>
    )
}