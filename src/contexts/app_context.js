import {useState, createContext} from 'react'

export const AppContext=createContext();

const AppContextProvider = (props)=>{
    const [pokemon,setPokemon]=useState([])
    return(
        <AppContext.Provider value={{pokemon,setPokemon}}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider