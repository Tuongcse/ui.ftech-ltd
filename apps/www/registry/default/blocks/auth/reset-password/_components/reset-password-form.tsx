"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { IResetPasswordRequest, useResetPassword } from "@/data/auth"
import {
  ResetPasswordFormValues,
  resetPasswordSchema,
} from "@/validations/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { AlertCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { PasswordInput } from "@/components/ui/password_input"
import { Skeleton } from "@/components/ui/skeleton"

export default function ResetPasswordForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get("token")
  const expiration = searchParams.get("exp")

  // Add a loading state
  const [isLoading, setIsLoading] = useState(true)
  const [isExpired, setIsExpired] = useState(false)
  const [remainingTime, setRemainingTime] = useState<string>("")
  const [expiryTimeMs, setExpiryTimeMs] = useState<number | null>(null)

  const { mutateAsync: resetPassword, isPending } = useResetPassword()

  // Format seconds to mm:ss
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`
  }

  // Initialize expiry time
  useEffect(() => {
    // Simulate minimum loading time to avoid UI flash
    const minLoadingTime = 100 // 100ms minimum loading time

    if (expiration) {
      const expiryTime = parseInt(expiration, 10)
      const currentTime = Date.now()

      if (currentTime > expiryTime) {
        setTimeout(() => {
          setIsExpired(true)
          setIsLoading(false)
        }, minLoadingTime)
        return
      }

      setExpiryTimeMs(expiryTime)

      setTimeout(() => {
        setIsLoading(false)
      }, minLoadingTime)
    } else {
      setTimeout(() => {
        setIsLoading(false)
      }, minLoadingTime)
    }
  }, [expiration])

  // Countdown timer
  useEffect(() => {
    if (!expiryTimeMs) return

    const updateRemainingTime = () => {
      const currentTime = Date.now()
      const timeRemaining = expiryTimeMs - currentTime

      if (timeRemaining <= 0) {
        setIsExpired(true)
        setRemainingTime("00:00")
        return
      }

      // Convert to seconds for the format
      const totalSeconds = Math.floor(timeRemaining / 1000)
      setRemainingTime(formatTime(totalSeconds))
    }

    // Initial update
    updateRemainingTime()

    // Update every second
    const intervalId = setInterval(updateRemainingTime, 1000)

    return () => clearInterval(intervalId)
  }, [expiryTimeMs])

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  async function onSubmit(data: ResetPasswordFormValues) {
    if (!token) {
      toast.error("Reset token is missing. Please try the reset link again.")
      return
    }

    if (isExpired) {
      toast.error(
        "Reset link has expired. Please request a new password reset link."
      )
      return
    }

    try {
      const resetData: IResetPasswordRequest = {
        token,
        password: data.password,
      }

      await resetPassword(resetData)
      toast.success("Password reset successful!")
      router.push("/login")
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to reset password. Please try again."
      toast.error(<div dangerouslySetInnerHTML={{ __html: errorMessage }} />)
    }
  }

  // Show loading skeleton while checking expiration
  if (isLoading) {
    return (
      <div className="w-full space-y-6">
        <Skeleton className="h-16 w-full" />
        <div className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-10 w-full" />
          </div>
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    )
  }

  if (isExpired) {
    return (
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6">Link Expired</h2>
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Reset Link Expired</AlertTitle>
          <AlertDescription>
            This password reset link has expired. Please request a new one.
          </AlertDescription>
        </Alert>
        <Link
          href="/forgot-password"
          className={buttonVariants({
            className: "w-full bg-black hover:bg-black/90",
          })}
        >
          Request New Link
        </Link>
      </div>
    )
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Create new password</h2>
      <p className="text-sm text-gray-500 mb-6">
        Enter your new password below
      </p>

      {remainingTime && (
        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Time Sensitive</AlertTitle>
          <AlertDescription className="flex">
            This reset link will expire in{" "}
            <span className="font-medium text-destructive">
              {remainingTime}
            </span>
          </AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Enter new password"
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
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Confirm new password"
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
            Save
          </Button>
        </form>
      </Form>
    </div>
  )
}
