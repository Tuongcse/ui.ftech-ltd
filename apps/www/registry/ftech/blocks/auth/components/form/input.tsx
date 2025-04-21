// src/components/PasswordInput.tsx

import React from "react"
import { LucideIcon } from "lucide-react"
import { FieldValues } from "react-hook-form"

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface MainInputProps {
  label: string
  type: string
  placeholder?: string
  required?: boolean
  field: FieldValues
  icon?: LucideIcon
  disabled?: boolean
  className?: string
}

export function MainInput({
  field,
  label,
  type,
  placeholder,
  required,
  icon: Icon,
  disabled,
  className,
}: MainInputProps) {
  return (
    <FormItem className={className}>
      {label && (
        <FormLabel>
          <div className="flex justify-between items-center w-full">
            {label}
          </div>
        </FormLabel>
      )}
      <FormControl>
        <div className="relative">
          <Input
            type={type}
            placeholder={placeholder}
            required={required}
            className={Icon ? "pl-9" : ""}
            disabled={disabled}
            {...field}
          />

          {Icon && (
            <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          )}
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}
