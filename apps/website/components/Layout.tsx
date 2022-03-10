import {
  Box,
  Container,
  Flex,
  Heading,
  Separator,
  SiteLayout,
  UserDropdownMenu,
} from '@siafoundation/design-system'
import Head from 'next/head'
import Script from 'next/script'
import { appName, newsFeedName } from '../config/app'
import { sitemap } from '../config/site'
import { Stats } from '../content/stats'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Statsbar } from './Statsbar'

function HeaderLeft() {
  return (
    <Flex align="center" justify="between" css={{ height: '50px' }}>
      <Heading size="2">sia</Heading>
      <UserDropdownMenu />
    </Flex>
  )
}

type Props = {
  children: React.ReactNode
  stats: Stats
}

export function Layout({ children, stats }: Props) {
  return (
    <Box
      css={{
        backgroundColor: '$loContrast',
        height: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
      }}
    >
      <Head>
        <title>{appName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1ed660" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
        <noscript>
          {/* eslint-disable-next-line */}
          <img
            referrerPolicy="no-referrer-when-downgrade"
            src="https://surveillance.sia.tech/matomo.php?idsite=1&amp;rec=1"
            style={{ border: 0 }}
            alt=""
          />
        </noscript>
        <link
          rel="alternate"
          type="application/rss+xml"
          href={sitemap.newsroom.feed.rss}
          title={newsFeedName}
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          href={sitemap.newsroom.feed.atom}
          title={newsFeedName}
        />
        <link
          rel="alternate"
          type="application/json"
          href={sitemap.newsroom.feed.json}
          title={newsFeedName}
        />
      </Head>
      <Script
        id="matomo"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              var _paq = window._paq = window._paq || [];
              /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u="//surveillance.sia.tech/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '1']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
              })();
              `,
        }}
      />
      <SiteLayout headerLeft={<HeaderLeft />}>
        <Container size="3">
          <Flex as="main" direction="column" gap="8" css={{ margin: '$5 0' }}>
            <Navbar />
            <Flex direction="column" gap="3">
              {children}
            </Flex>
            <Separator size="4" />
            <Statsbar {...stats} />
            <Footer />
          </Flex>
        </Container>
      </SiteLayout>
    </Box>
  )
}
