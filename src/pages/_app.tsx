import type { AppProps } from 'next/app'
import GlobalStyle from '@/utils/global-style'
import { ViewportProvider } from 'src/hooks/useViewport'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ViewportProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ViewportProvider>
  )
}

export default MyApp
