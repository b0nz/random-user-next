import { render, screen } from '@testing-library/react'
import Input from '@/components/Input'

describe('Input', () => {
  it('should render Input correctly', async () => {
    render(<Input />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByTestId('input')).toBeInTheDocument()
  })
})
