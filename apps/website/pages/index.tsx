import {
  Box,
  Flex,
  Grid,
  Heading,
  NLink,
  Separator,
  Text,
} from '@siafoundation/design-system'
import { SimpleBlock } from '../components/SimpleBlock'
import { Layout } from '../components/Layout'
import { external, sitemap } from '../config/site'
import { getDaysInSeconds } from '../lib/time'
import { getStats } from '../content/stats'
import { MDXRemote } from 'next-mdx-remote'
import { getMdxFile } from '../lib/mdx'
import { AsyncReturnType } from '../lib/types'
import { CtaLarge } from '../components/CtaLarge'
import { ContentGallery } from '../components/ContentGallery'
import { getArticles } from '../content/articles'
import { ContentBlock } from '../components/ContentBlock'

type Props = AsyncReturnType<typeof getStaticProps>['props']

export default function Home({ stats, landing, getStarted, latest }: Props) {
  return (
    <Layout stats={stats}>
      <Heading></Heading>
      <Box
        css={{
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <MDXRemote {...landing.source} />
      </Box>
      <Separator size="4" />
      <ContentBlock
        title="Why Sia"
        description={`
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, sapiente!
        `}
      />
      <Grid
        columns={{
          '@initial': 1,
          '@bp2': 2,
          '@bp3': 4,
        }}
      >
        <ContentBlock
          title="Completely Private"
          size="1"
          align="center"
          description={`
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, sapiente!
            `}
        />
        <ContentBlock
          title="Highly Redundant"
          size="1"
          align="center"
          description={`
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, sapiente!
            `}
        />
        <ContentBlock
          title="Open Source"
          size="1"
          align="center"
          description={`
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, sapiente!
            `}
        />
        <ContentBlock
          title="Far More Affordable"
          size="1"
          align="center"
          description={`
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, sapiente!
            `}
        />
      </Grid>
      <Separator size="4" />
      <Grid
        gap="3"
        columns={{
          '@initial': '1',
          '@bp2': '2',
        }}
      >
        <CtaLarge
          title="Developer Resources"
          description={`
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, expedita!
          `}
          actionTitle="Explore"
          actionLink={sitemap.developers.index}
        />
        <CtaLarge
          title="Learn"
          description={`
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, expedita!
          `}
          actionTitle="Read more"
          actionLink={sitemap.learn.index}
        />
      </Grid>
      <Separator size="4" />
      <Flex direction="column" align="center" gap="3">
        <Text>Add logos here</Text>
        <NLink href={sitemap.community.index}>
          Explore the Sia Community and Ecosystem
        </NLink>
      </Flex>
      <Separator size="4" />
      <ContentGallery
        title="Get Started"
        description={`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, obcaecati!
        `}
        items={getStarted.map((i) => ({ ...i, newTab: true }))}
      />
      <Separator size="4" />
      <ContentGallery
        title="The latest"
        links={[
          {
            title: 'Browse the blog',
            link: external.blog,
            newTab: true,
          },
        ]}
        description={`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, obcaecati!
        `}
        items={latest}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const stats = await getStats()
  const landing = await getMdxFile('content/sections/landing.mdx')
  const getStarted = getArticles('learning')
  const latest = getArticles('general')

  return {
    props: {
      stats,
      landing,
      getStarted,
      latest,
    },
    revalidate: getDaysInSeconds(1),
  }
}
