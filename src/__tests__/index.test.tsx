import { render, screen } from '@testing-library/react'
import Driver from '@/pages/index'

describe('Driver Page', () => {
  it('should renders DriverPage correctly', () => {
    render(<Driver />)

    const heading = screen.getByRole('heading', {
      name: /DRIVER MANAGEMENT/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
