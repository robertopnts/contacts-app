"use client"
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { IRegisterValidation } from '@/types/users'

export const registerValidation = z.object({
  name: z
    .string()
    .min(1, {message: "Name required"})
    .max(127)
    .trim(),
  email: z
    .string()
    .min(1, {message: "Email is required"})
    .email({message: "Invalid email address"})
    .trim(),
  phone: z
    .string()
    .min(11, {message: "DDD + numbers"})
    .regex(/^([0-9]){11}/, {message: "Only numbers"})
    ,
  password: z 
    .string()
    .min(8, {message: "Password must be at least 8 characters"})
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Your password don't match with the confirmation",
  path: ["confirmPassword"]
})

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IRegisterValidation>({
    resolver: zodResolver(registerValidation)
  })

  const onSubmit: SubmitHandler<IRegisterValidation> = (data) => console.log(data)
  

  return (
    <div className="flex flex-col gap-6  rounded-md shadow-md bg-white container py-14 justify-center items-center">
      <Link href="/" className="text-3xl text-center font-bold">Contacts App</Link>
      <form className="flex flex-col w-[300px] justify-center gap-2 py-4 border rounded-sm px-3" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl mb-4 pl-1 font-semibold">Cadastro</h2>
        
        <div className='flex flex-col'>
          <label className="" htmlFor="email">E-mail:</label>
          <input type="text" 
            className={`border pl-1 rounded-md border-zinc-600`}
            id="email" 
            placeholder='Email'
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-500">
              {errors.email?.message}
            </p>
          )}
        </div>

        <div className='flex flex-col'>
          <label className="" htmlFor="password">Senha:</label>
          <input type="password"
            className={`border pl-1 rounded-md border-zinc-600`}
            id="password"
            placeholder='Password'
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs text-red-500">
              {errors.password?.message}
            </p>
          )}
        </div>
        
        <div className='flex flex-col'>
          <label className="" htmlFor="confirmPassword">Confirme a senha:</label>
          <input type="password"
            className="border pl-1 rounded-md border-zinc-600"
            id="confirmPassword"
            placeholder='Confirme a senha'
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-xs text-red-500">
              {errors.confirmPassword?.message}
            </p>
          )}
        </div>

        <div className='flex flex-col'>
          <label className="" htmlFor="name">Nome completo:</label>
          <input type="text"
            className="border pl-1 rounded-md border-zinc-600"
            id="name"
            placeholder='Nome completo'
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-red-500">
              {errors.name?.message}
            </p>
          )}
        </div>

        <div className='flex flex-col'>
          <label className="" htmlFor="phone">Celular:</label>
          <input type="text"
            className="border pl-1 rounded-md border-zinc-600"
            id="phone"
            placeholder='Celular'
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-xs text-red-500">
              {errors.phone?.message}
            </p>
          )}
        </div>

        <button type='submit' className="rounded mt-2 bg-zinc-400 w-24 py-1 text-white hover:opacity-75 self-center">
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default RegisterForm