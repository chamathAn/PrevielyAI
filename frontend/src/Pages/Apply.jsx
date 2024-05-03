import axios from 'axios'
import React, { useEffect } from 'react'

export default function Apply() {
  useEffect(() => {
    axios.post("/apply/").then((res) => {
      console.log(res)
    })
  })
  return (
    <div className='bg-[#080c14] min-h-screen h-fit'>
     
    </div>
  )
}
