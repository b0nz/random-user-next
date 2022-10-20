import { render, screen, act } from '@testing-library/react'
import { useViewport, ViewportProvider } from '../useViewport'
import matchMediaPolyfill from 'mq-polyfill'

describe('useViewPort', () => {
  beforeAll(() => {
    matchMediaPolyfill(window)
    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event('resize'))
    }
  })

  const DummyView: React.FC = () => {
    const viewport = useViewport()
    return (
      <div data-testid="view">{viewport.isMobile ? 'mobile' : 'desktop'}</div>
    )
  }

  it('Provider works correctly', async () => {
    const { queryByText } = render(
      <ViewportProvider>
        <DummyView />
      </ViewportProvider>,
    )

    
    act(() => {
      window.resizeTo(700, 1024)
    })
    expect(queryByText(/mobile/)).toBeDefined()
    
    act(() => {
      window.resizeTo(1400, 1024)
    })
    expect(queryByText(/desktop/)).toBeDefined()
  })
})
