"use client"
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';

const LoguinPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const { signin, errors:signinErrors} = useAuth()

  const onSubmit = handleSubmit((data) => {
    signin(data)
  })


  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-white mb-2"> Iniciar Secion </h1>

      {
        signinErrors.map((error, i) => (
          <div key={i} className="text-red-500 text-xs"> {error} </div>
        ))
      }

      <form onSubmit={onSubmit}
        className="flex flex-col w-[400px] mx-auto gap-y-2 bg-[#332851] p-10 rounded-lg">

        <input type="text" name="username" className="bg-[#a9a2b6] text-black font-semibold py-2 rounded-md"
          {...register("username", { required: true })} />
        {errors.username && (
          <p className="text-xs text-red-500"> El usuario es requerido </p>
        )}

        <input type="password" name="password" className="bg-[#a9a2b6] text-black font-semibold py-2 rounded-md"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p className="text-xs text-red-500"> La contraseña es requerida </p>
        )}

        <button className="bg-[#f0ffcc] text-[#0F0033] p-2 rounded-lg font-semibold"> Ingresar  </button>

      </form>

      <p classNamet="text-xs"> No tienes una cuenta aun ? 

      <Link href="/register" className="text-blue-300"> Crea una </Link>
      </p>
    </div>
  )
}

export default LoguinPage