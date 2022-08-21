import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Jobs = () => {
  const router = useRouter()
  const { title } = router.query

  useEffect(()=> {
    if(!router.isReady) return;
  },[router.isReady])

  return (
    <div>{title}</div>
  )
}

export default Jobs