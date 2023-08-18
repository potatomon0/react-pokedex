import { Route, Routes } from 'react-router-dom'
import React, { useEffect, useContext } from 'react'
import List from './pages/List'
import Nav from './components/Nav'
import Main from './pages/Main'
import PkmInfo from './pages/PkmInfo'
import { AppContext } from './contexts/app_context'

function App() {
    const {getPkm} = useContext(AppContext)
    useEffect(() => {
        getPkm()
    }, [])
    return (
        <div className='App'>
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/pokemon" element={<List />} />
                <Route path="/pokemon/:name" element={<PkmInfo/>}/>
            </Routes>
        </div>
    )
}
export default App
