import {Route, Routes} from 'react-router-dom'
import PkmInfo from './pages/PkmInfo'
import List from './pages/List'
import Nav from './components/Nav'
import Main from './pages/Main'
import axios from 'axios'
// import {AppContext} from './contexts/app_context'
import React,{useState,useEffect,createContext} from 'react'
export const AppContext= createContext()

function App(){
    const [database,setDatabase]=useState("")
    const getPkm =async()=>{
        // let pkmData = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        let pkmData = await axios.get(`https://api.jikan.moe/v4/anime/`)
        // console.log(pkmData)
        let dex = await pkmData.data.results
        setDatabase(dex)
        console.log(database)
    }
    useEffect(()=>{
        getPkm()
    },[])
    return(
        <div className='App'>
            <AppContext.Provider value={{database,setDatabase}}>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/List" element={<List/>}/>
                <Route path="/PkmInfo" element={<PkmInfo/>}/>
            </Routes></AppContext.Provider>
            <Nav />
        </div>
    )
}
export default App
