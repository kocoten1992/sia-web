import '../config/style.css'
import { ClientSide, ThemeProvider } from '@siafoundation/design-system'
import { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { AppSettingsProvider } from '@siafoundation/react-core'
import { Providers } from '../config/providers'

export default function App({
  Component,
  pageProps,
}: AppProps<{
  fallback?: Record<string, unknown>
}>) {
  return (
    <ClientSide>
      <SWRConfig value={{ fallback: pageProps?.fallback || {} }}>
        <ThemeProvider>
          <AppSettingsProvider api="api">
            <Providers>
              <Component {...pageProps} />
            </Providers>
          </AppSettingsProvider>
        </ThemeProvider>
      </SWRConfig>
    </ClientSide>
  )
}