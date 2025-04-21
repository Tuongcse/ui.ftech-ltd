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
import { Textarea } from "@/components/ui/textarea"

interface MainInputProps {
  label: string
  type: string
  placeholder?: string
  required?: boolean
  field: FieldValues
  icon?: LucideIcon
  children?: React.ReactNode
  disabled?: boolean
}

export function MainTextarea({
  field,
  label,
  placeholder,
  required,
  icon: Icon,
  disabled,
}: MainInputProps) {
  return (
    <FormItem>
      {label && (
        <FormLabel>
          <div className="flex justify-between items-center w-full">
            {label}
          </div>
        </FormLabel>
      )}

      <FormControl>
        <div className="relative">
          <Textarea
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
