"use client"
import { useAuth } from '@/context/AuthContext'
import React from 'react'
import { useRouter } from 'next/navigation'

const DashboardPage = () => {
  const { user , isAuthenticated } = useAuth()
  const router = useRouter()

  if(!isAuthenticated) router.push("/loguin")

  return (
    <div>
        <h1>Bienvenidos al Dashboard</h1>
    </div>
  )
}

export default DashboardPage