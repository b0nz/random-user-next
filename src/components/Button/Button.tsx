import React from 'react'
import styled from 'styled-components'
import { THEME } from '@/utils/global-style'

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  style?: React.CSSProperties
  rightIcon?: React.ReactNode
  variant?: 'primary' | 'transparent' | 'icon'
  disabled?: boolean
  block?: boolean
  size?: 'lg' | 'md' | 'sm' | 'xs'
  htmlType?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const STYLES = {
  size: {
    lg: { padding: '16px 24px', gap: '8px' },
    md: { padding: '8px 16px', gap: '8px' },
    sm: { padding: '4px 8px', gap: '8px' },
    xs: { padding: '4px 4px', gap: '4px' },
  },
  variant: {
    primary: {
      bg: THEME.colors.red,
      bgHover: THEME.colors['red-50'],
      color: 'white',
    },
    transparent: {
      bg: 'transparent',
      bgHover: 'lightgrey',
      color: THEME.colors.black,
    },
    icon: {
      bg: 'transparent',
      bgHover: THEME.colors['grey-50'],
      color: THEME.colors.black,
    },
  },
}

const Button: React.FC<IButton> = ({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  htmlType = 'button',
  onClick,
  ...props
}) => {
  const _padding = STYLES.size[size].padding
  const _gap = STYLES.size[size].gap
  const _variant = STYLES.variant[variant]

  return (
    <StyledButton
      type={htmlType}
      style={
        {
          '--bg': _variant.bg,
          '--bg-hover': _variant.bgHover,
          '--color': _variant.color,
          '--p': _padding,
          '--g': _gap,
          width: block ? '100%' : 'max-content',
        } as React.CSSProperties
      }
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background-color: var(--bg);
  color: var(--color);
  padding: var(--p);
  border-width: 0;
  border-radius: 4px;
  display: flex;
  height: max-content;
  align-items: center;
  gap: var(--g);
  font-weight: semi-bold;

  &:hover {
    background-color: var(--bg-hover)};
    cursor: pointer;
  }
  &:active {
    background-color: var(--bg);
  }
  &:disabled {
    background-color: var(--grey-50);
    color: var(--grey);
    cursor: not-allowed;
  }
`

export default Button
