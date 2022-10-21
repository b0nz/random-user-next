import { HTMLAttributes, ReactNode } from 'react'

export interface ICard extends HTMLAttributes<HTMLElement> {
  header?: ReactNode
  children?: ReactNode
}
