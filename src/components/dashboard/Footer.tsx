import React, { useState, useEffect} from 'react'

const Footer = () => {
  const [status, setStatus] = useState('')

  const getStatus = (a:number, b:number) => {
    (a >= b) ? setStatus('Footer 2022') : setStatus('')
  };
  
  useEffect(()=> {
    getStatus(10, 5)
  },[])

  return (
    <>
      <div className="m-2 md:m-16 mt-24 p-2 md:p-10 bg-gray-200 rounded-xl text-red-500">
        {status}
      </div>
    </>
  )
}

export default Footer