import { LucideIcon } from "lucide-react"
import { FieldValues } from "react-hook-form"

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { PasswordInput } from "@/components/ui/password_input"

interface IPasswordInputProps {
  label: string
  placeholder?: string
  required?: boolean
  field: FieldValues
  icon?: LucideIcon
  disabled?: boolean
  className?: string
  autoComplete?: string
}

export function PasswordFormItem({
  field,
  label,
  placeholder,
  required,
  disabled,
  className,
  autoComplete,
}: IPasswordInputProps) {
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
        <PasswordInput
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          {...field}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}
