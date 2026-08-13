import React, { memo } from 'react'

const Child = () => {
    console.log("hehehehehe");
    
  return (
    <div>Child</div>
  )
}

export default   memo(Child) 