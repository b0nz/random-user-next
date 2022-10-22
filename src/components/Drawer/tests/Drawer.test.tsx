import { render, screen } from '@testing-library/react'
import { useRouter } from 'next/router'
import Drawer from '@/components/Drawer'

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}))

describe('Drawer', () => {
  it('should render Drawer', async () => {
    const mockRouter = {
      pathname: '/',
    }
    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)
    render(<Drawer />)
    await screen.findAllByText('Beranda')
  })
  it('should render Drawer, isMobile=true', async () => {
    const mockRouter = {
      pathname: '/',
    }
    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)
    render(<Drawer isMobile />)
    await screen.findAllByText('Beranda')
    expect(screen.getByText('Beranda')).toBeInTheDocument()
  })
})
