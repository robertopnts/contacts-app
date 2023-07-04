import { z } from "zod";
import { loginValidation } from "@/components/LoginForm";
import { registerValidation } from "@/components/RegisterForm";

export type IUserRes = {
  id: string,
  email: string,
  name: string,
  phone: string,
  createdAt: string,
}

export type ILoginRes = {
  token: string
}

export type ILoginValidation = z.infer<typeof loginValidation>

export type IRegisterValidation = z.infer<typeof registerValidation>