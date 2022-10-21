import { HTMLAttributes, ReactNode } from 'react'

export interface IInput extends HTMLAttributes<HTMLElement> {
  icon?: ReactNode
  size?: 'sm' | 'lg'
  width?: number
  block?: boolean
}
