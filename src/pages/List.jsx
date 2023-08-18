import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import {Link} from 'react-router-dom'

function List() {
  let { database } = useContext(AppContext)
  const loaded = () => {
      return(
      <div>
        {database.map((pkm, i) => {
          const name = pkm.name
          return (
            // <a href="" key={i}>{x.name}<br/></a>
            <Link to={`/pokemon/${name}`} key={i}>{name}</Link>
          )
        })
        }
      </div>
      )}
    const loading = ()=>{
      return(<div>Loading...</div>)
    }
  return database ? loaded():loading()
}

export default List