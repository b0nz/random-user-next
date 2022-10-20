import { render, screen } from '@testing-library/react'
import Layout from '@/components/Layout'

describe('Layout', () => {
  it('should render Layout correctly', async () => {
    render(
      <Layout>
        <div>test</div>
      </Layout>,
    )

    expect(screen.getByTestId('layout-content').innerHTML).toEqual(
      '<div>test</div>',
    )
  })
})
