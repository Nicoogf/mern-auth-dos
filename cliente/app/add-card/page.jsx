"use client" 

import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import React from 'react'

const AddCardPage = () => {
  const { user , isAuthenticated } = useAuth()
  const router = useRouter()

  if(!isAuthenticated) router.push("/loguin")

  return (
    <div>Profile</div>
  )
}

export default AddCardPage