"use client"
import { ILoginValidation } from "@/types/users"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"


export const loginValidation = z.object({
  email: z
    .string()
    .min(1, {message: "Email required"})
    .email({message: "Invalid email address"}),
  password: z
    .string()
})

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<ILoginValidation>({
    resolver: zodResolver(loginValidation)
  })

  const onSubmit: SubmitHandler<ILoginValidation> = (data) => console.log(data)

  return (
    <div className="flex flex-col gap-6 rounded-md shadow-md bg-white container py-14 justify-center items-center">
      <Link href="/" className="text-3xl text-center font-bold">Contacts App</Link>
      <form className="flex flex-col w-[300px] justify-center gap-2 py-4 border rounded-sm px-3" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl mb-4 pl-1 font-semibold">Login</h2>
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
        </div>

        <button type='submit' className="rounded mt-2 bg-zinc-400 w-24 py-1 text-white hover:opacity-75 self-center">
          Entrar
        </button>

      </form>
    </div>
  )
}

export default LoginForm