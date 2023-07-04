import api from "@/services/api"
import { ILoginRes, ILoginValidation, IRegisterValidation, IUserRes } from "@/types/users"
import { useRouter } from "next/navigation"
import { createContext, ReactNode, useContext, useState } from "react"
import {} from "nookie"

type IProviderProps = {
  children: ReactNode
}

export interface IAuthContext {
  registerUser: (data: IRegisterValidation) => Promise<void>
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({children}: IProviderProps) => {
  const [user, setUser] = useState({} as IUserRes)
  const router = useRouter()
  
  const registerUser = async (data: IRegisterValidation) => {
    try {
      const newUser: IUserRes = await api.post("/user", data, {
        headers: {
          "Content-Type": "application/json"
        },
      })
      setUser(newUser)
      await router.push("/login")
    } catch (err) {
      console.log(err)
    }
  }

  const loginUser = async (dataLogin: ILoginValidation, callback: () => void) => {
    try {
      const { data } = await api.post<ILoginRes>("/", dataLogin)
      const { token } = data
      setCookie
    }
  }

  return (
    <AuthContext.Provider value={{
      registerUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)