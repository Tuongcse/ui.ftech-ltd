import React from "react"
import { FieldValues } from "react-hook-form"

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface IMainSelectProps {
  label: string
  placeholder?: string
  field: FieldValues
  options: {
    label: string
    value: string
  }[]
  disabled?: boolean
}

export function MainSelect({
  field,
  label,
  placeholder,
  options,
  disabled,
}: IMainSelectProps) {
  return (
    <FormItem>
      {label && (
        <FormLabel>
          <div className="flex justify-between items-center w-full">
            {label}
          </div>
        </FormLabel>
      )}
      <Select
        disabled={disabled}
        onValueChange={field.onChange}
        value={field.value || ""}
        {...field}
      >
        <FormControl>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  )
}
