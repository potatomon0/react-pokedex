import React from 'react'
import {useParams} from 'react-router-dom'

function PkmInfo(props) {
  const params = useParams()
  const pkm = params.name
  return (
    <div>
      {console.log(pkm)}
    </div>
  )
}

export default PkmInfo