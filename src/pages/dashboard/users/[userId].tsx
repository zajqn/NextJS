import React from 'react'
import { useRouter } from "next/router"

const UserDetail = () => {
  const router = useRouter()
  const { userId } = router.query

  console.log('User query', router.query)
  return (
    <>
      User detail ID: {userId}
    </>
  )
}

export default UserDetail