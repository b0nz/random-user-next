import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '@/components/Header'

describe('Header', () => {
  it('should render Header', async () => {
    render(<Header />)

    await userEvent.click(screen.getByTestId('profile-btn'))

    expect(screen.queryByTestId('drawer-btn')).not.toBeInTheDocument()
    expect(screen.queryByTestId('profile-btn')).toBeInTheDocument()
  })
  it('should render Header, isMobile = true', async () => {
    render(<Header isMobile />)

    await userEvent.click(screen.getByTestId('drawer-btn'))
    await userEvent.click(screen.getByTestId('profile-btn'))

    expect(screen.queryByTestId('drawer-btn')).toBeInTheDocument()
    expect(screen.queryByTestId('profile-btn')).toBeInTheDocument()
    expect(screen.queryByText('Hello')).not.toBeInTheDocument()
  })
})
