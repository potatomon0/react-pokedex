import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [database, setDatabase] = useState("")
    const getPkm = async () => {
        let pkmData = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0/`)
        let pkmList = pkmData.data.results
        console.log('pkmList: ', pkmList)
        setDatabase(pkmList)
    }
    return (
        <AppContext.Provider value={{ database, setDatabase, getPkm }}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider