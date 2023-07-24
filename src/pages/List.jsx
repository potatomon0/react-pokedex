import React,{useContext} from 'react'
import {AppContext} from '../App'

function List() {
  let {database,setDatabase}=useContext(AppContext)
  return (
    <div>
      {/* {database.results.map((x)=>{
        return <h3>{x.name}</h3>
      })} */}
      {/* {database[0].name}
       */}
       {console.log(database[0].name)}
    </div>
  )
}

export default List