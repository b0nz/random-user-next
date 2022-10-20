import { render, screen } from '@testing-library/react'
import { useRouter } from 'next/router'
import DrawerItem from '@/components/Drawer/DrawerItem'

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}))

describe('DrawerItem', () => {
  it('should render DrawerItem', async () => {
    const mockRouter = {
      pathname: '/',
    }
    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)
    render(<DrawerItem icon={<span>icon</span>} label="profile" />)
    await screen.findAllByText('profile')

    expect(screen.getByTestId('drawer-label').textContent).toEqual('profile')
    expect(screen.getByTestId('drawer-icon').innerHTML).toEqual(
      '<span>icon</span>',
    )
  })

  it('should render DrawerItem, not active', async () => {
    const mockRouter = {
      pathname: '/',
    }
    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)
    render(
      <DrawerItem
        icon={<span>icon</span>}
        label="Dashboard"
        href="/dashboard"
      />,
    )
    await screen.findAllByText('Dashboard')

    expect(screen.getByTestId('drawer-label').textContent).toEqual('Dashboard')
    expect(screen.getByTestId('drawer-icon').innerHTML).toEqual(
      '<span>icon</span>',
    )
  })

  it('should render DrawerItem, active', async () => {
    const mockRouter = {
      pathname: '/',
    }
    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)
    render(<DrawerItem icon={<span>icon</span>} label="Home" href="/" />)
    await screen.findAllByText('Home')

    expect(screen.getByTestId('drawer-label').textContent).toEqual('Home')
    expect(screen.getByTestId('drawer-icon').innerHTML).toEqual(
      '<span>icon</span>',
    )
  })
})
