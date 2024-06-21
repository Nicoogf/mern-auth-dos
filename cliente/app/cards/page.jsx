"use client"
import { useAuth } from '@/context/AuthContext'
import React , {useEffect} from 'react'
import { useRouter } from 'next/navigation'

const CardPage = () => {
  const { user , isAuthenticated , loading } = useAuth()
  const router = useRouter()

    useEffect(() => {
      if (!loading && !isAuthenticated) {
        router.push("/loguin")
      }
    }, [loading, isAuthenticated, router])

    if (loading) return <p>Cargando</p>

  return (
    <div>
      
    </div>
  )
}

export default CardPage ;


