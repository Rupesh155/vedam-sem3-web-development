import React, { useContext } from 'react'
import Context from './Context'

const A = () => {
  let data=  useContext(Context)
  return (
    <div>{data}</div>
  )
}

export default A