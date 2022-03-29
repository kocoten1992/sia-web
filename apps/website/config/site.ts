import { getHosts } from '@siafoundation/env'
import { getHref } from '../lib/url'

const hosts = getHosts()

export const sitemap = {
  home: {
    index: '/',
  },
  developers: {
    index: '/developers',
  },
  learn: {
    index: '/learn',
  },
  whitepaper: {
    index: '/whitepaper',
    pdf: getHref(`${hosts.app}/sia.pdf`),
  },
  community: {
    index: '/community-ecosystem',
  },
  foundation: {
    index: '/about-sia-foundation',
  },
  newsroom: {
    index: '/newsroom',
    newsPost: '/newsroom/[slug]',
    feed: {
      rss: '/rss/feed.xml',
      atom: '/rss/atom.xml',
      json: '/rss/feed.json',
    },
  },
}

export const external = {
  blog: 'https://blog.sia.tech',
  docs: {
    // TODO: update all doc URLs to docs.sia.tech
    index: 'https://support.sia.tech',
    sia101: 'https://support.sia.tech/get-started-with-sia/sia101',
    renting: 'https://support.sia.tech/renting/about-renting',
    wallet: 'https://support.sia.tech/your-sia-wallet/wallet-overview',
    hosting: 'https://support.sia.tech/hosting/about-hosting-on-sia',
    mining: 'https://support.sia.tech/mining/about-mining-on-sia',
  },
  // forum: 'https://forum.sia.tech',
  github: 'https://github.com/siafoundation',
  discord: 'https://discord.gg/sia',
  twitter: 'https://twitter.com/sia__foundation',
  reddit: 'https://reddit.com/r/siacoin',
  merch: 'https://siagear.tech/',
  email: 'hello@sia.tech',
  benchmarks: 'https://benchmarks.sia.tech',
  stats: 'https://siastats.info',
}
