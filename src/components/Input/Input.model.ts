import { InputHTMLAttributes, ReactNode } from 'react'

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
  inputSize?: 'sm' | 'lg'
  width?: number
  block?: boolean
}
