"use client"

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { DEFAULT_ROUTE, ROUTE_CONFIG } from "@/constants/routes"
import { useAuth } from "@/context/auth-context"
import { useLogin } from "@/data/auth"
import { LoginFormValues, loginSchema } from "@/validations/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import Cookies from "js-cookie"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password_input"

export default function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { mutateAsync: login, isPending } = useLogin()
  const { setUser } = useAuth()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: LoginFormValues) {
    try {
      const data = await login(values)
      if (data && data.access_token) {
        Cookies.set("token", data.access_token)
        if (data.user) {
          setUser(data.user)
        }
        const callbackUrl =
          searchParams.get(ROUTE_CONFIG.CALLBACK_URL_PARAM) || DEFAULT_ROUTE
        router.push(callbackUrl)
      } else {
        throw new Error("Login failed, please try again!")
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Login failed, please try again!"
      toast.error(<div dangerouslySetInnerHTML={{ __html: errorMessage }} />)
    }
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@domain.com"
                    type="email"
                    autoComplete="email"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="********"
                    autoComplete="current-password"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-black hover:bg-black/90"
            loading={isPending}
          >
            Login
          </Button>
          <div className="text-right mt-2">
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-primary hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </Form>
    </div>
  )
}
