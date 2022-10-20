import { render, screen } from '@testing-library/react'
import Card from '@/components/Card'

describe('Card', () => {
  it('should render card', async () => {
    render(
      <Card header={<div>card title</div>}>
        <div>card content</div>
      </Card>,
    )
    await screen.findAllByText('card content')
    expect(screen.getByTestId('card-header').textContent).toEqual('card title')
    expect(screen.getByTestId('card-child').textContent).toEqual('card content')
  })
})
