import {
  MouseEventHandler,
  ReactNode,
  CSSProperties,
  ButtonHTMLAttributes,
} from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
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
