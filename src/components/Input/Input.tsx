import React from 'react'
import styled from 'styled-components'
import { IInput } from './Input.model'

const STYLES = {
  sm: {
    fontSize: 16,
    borderThickness: 1,
    height: 24,
  },
  md: {
    fontSize: 16,
    borderThickness: 1,
    height: 32,
  },
  lg: {
    fontSize: 16,
    borderThickness: 2,
    height: 40,
  },
}

const Input: React.FC<IInput> = ({
  inputSize = 'lg',
  width = 150,
  icon,
  block,
  ...delegate
}) => {
  const _size = STYLES[inputSize]

  return (
    <Wrapper
      style={
        { '--width': block ? '100%' : width + 'px' } as React.CSSProperties
      }
    >
      <IconWrapper data-testid="icon">{icon}</IconWrapper>
      <StyledInput
        data-testid="input"
        style={
          {
            '--width': block ? '100%' : width + 'px',
            '--height': _size.height / 16 + 'rem',
            '--border-thickness': _size.borderThickness + 'px',
            '--font-size': _size.fontSize / 16 + 'rem',
          } as React.CSSProperties
        }
        {...delegate}
      />
    </Wrapper>
  )
}

const Wrapper = styled.label`
  display: flex;
  position: relative;
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--size);
  margin-left: 15px;
`

const StyledInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: var(--border-thickness) solid lightgray;
  padding-left: var(--height);
  color: inherit;
  outline-offset: 2px;
  border-radius: 4px;

  &::placeholder {
    font-weight: 400;
    color: var(--black-50);
  }
`

export default Input
