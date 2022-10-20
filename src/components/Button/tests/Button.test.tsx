import { THEME } from '@/utils/global-style'
import { render, screen } from '@testing-library/react'
import Button from '@/components/Button'

describe('Button', () => {
  it('should render default variant button', async () => {
    render(<Button>Button</Button>)
    await screen.findByRole('button')
    expect(screen.getByRole('button')).toHaveAttribute(
      'style',
      `--bg: ${THEME.colors.red}; --bg-hover: ${THEME.colors['red-50']}; --color: white; --p: 8px 16px; --g: 8px;`,
    )
  })

  it('should render primary variant button', async () => {
    render(<Button variant="primary">Button</Button>)
    await screen.findByRole('button')
    expect(screen.getByRole('button')).toHaveAttribute(
      'style',
      `--bg: ${THEME.colors.red}; --bg-hover: ${THEME.colors['red-50']}; --color: white; --p: 8px 16px; --g: 8px;`,
    )
  })

  it('should render transparent variant button', async () => {
    render(<Button variant="transparent">Button</Button>)
    await screen.findByRole('button')
    expect(screen.getByRole('button')).toHaveAttribute(
      'style',
      `--bg: transparent; --bg-hover: lightgrey; --color: ${THEME.colors.black}; --p: 8px 16px; --g: 8px;`,
    )
  })

  it('should render icon variant button', async () => {
    render(<Button variant="icon">Button</Button>)
    await screen.findByRole('button')
    expect(screen.getByRole('button')).toHaveAttribute(
      'style',
      `--bg: transparent; --bg-hover: ${THEME.colors['grey-50']}; --color: ${THEME.colors.black}; --p: 8px 16px; --g: 8px;`,
    )
  })

  it('should render button, with block', async () => {
    render(<Button block>Button</Button>)
    await screen.findByRole('button')
    expect(screen.getByRole('button')).toHaveAttribute(
      'style',
      `--bg: ${THEME.colors.red}; --bg-hover: ${THEME.colors['red-50']}; --color: white; --p: 8px 16px; --g: 8px; width: 100%;`,
    )
  })
})
