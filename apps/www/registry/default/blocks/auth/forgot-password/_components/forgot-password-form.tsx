"use client"

import Link from "next/link"
import { useForgotPassword } from "@/data/auth"
import {
  ForgotPasswordFormValues,
  forgotPasswordSchema,
} from "@/validations/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeft } from "lucide-react"
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

export default function ForgotPasswordForm() {
  const { mutateAsync: forgotPassword, isPending } = useForgotPassword()

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(data: ForgotPasswordFormValues) {
    try {
      await forgotPassword(data.email)
      toast.success(
        "Reset link sent! Please check your email inbox. The reset link will expire in 3 minutes."
      )
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to send reset link. Please try again or contact support."
      toast.error(<div dangerouslySetInnerHTML={{ __html: errorMessage }} />)
    }
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>
      <p className="text-sm text-gray-500 mb-6">
        Enter your email address and we&apos;ll send you a link to reset your
        password
      </p>
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

          <Button
            type="submit"
            className="w-full bg-black hover:bg-black/90"
            loading={isPending}
          >
            Send Reset Link
          </Button>

          <div className="text-center mt-4">
            <Link
              href="/login"
              className="text-sm text-primary hover:underline flex items-center justify-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Login
            </Link>
          </div>
        </form>
      </Form>
    </div>
  )
}
