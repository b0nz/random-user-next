import {
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
  CSSProperties,
} from 'react'

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  style?: CSSProperties
  rightIcon?: ReactNode
  variant?: 'primary' | 'transparent' | 'icon'
  disabled?: boolean
  block?: boolean
  size?: 'lg' | 'md' | 'sm' | 'xs'
  htmlType?: 'button' | 'submit' | 'reset'
  onClick?: MouseEventHandler<HTMLButtonElement>
}
