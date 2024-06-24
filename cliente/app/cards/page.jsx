"use client"
import { useAuth } from '@/context/AuthContext'
import React , {useEffect} from 'react'
import { useRouter } from 'next/navigation'

const CardPage = () => {
  let numero = 5 ;
  const { user , isAuthenticated , loading } = useAuth()
  const router = useRouter()

    useEffect(() => {
      console.log(user)
      if (!loading && !isAuthenticated) {
        router.push("/loguin")
      }
    }, [loading, isAuthenticated, router])

    if (loading) return <p>Cargando</p>

  return (
    <div>
      <h1> {user.username} bienvenido! </h1>
      <p> $ {user.cuentaBancaria} </p>
      <p> Dinero en cuenta </p>
      
    </div>
  )
}

export default CardPage ;


