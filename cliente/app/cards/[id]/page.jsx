"use client"
import { useAuth } from '@/context/AuthContext'
import React from 'react'
import { useRouter } from 'next/navigation'


const CardPage = () => {
  const { user , isAuthenticated } = useAuth()
  const router = useRouter()

  console.log(user, isAuthenticated)

  return (
    <div>Card</div>
  )
}

export default CardPage ;


