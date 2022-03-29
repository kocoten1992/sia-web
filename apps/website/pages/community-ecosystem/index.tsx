import {
  ContentGallery,
  Callout,
  Section,
  ContentProject,
  Flex,
  Text,
  Image,
  SiteHeading,
  getImageProps,
  Box,
} from '@siafoundation/design-system'
import { Layout } from '../../components/Layout'
import { external } from '../../config/site'
import { getArticles } from '../../content/articles'
import { AsyncReturnType } from '../../lib/types'
import { getSoftware } from '../../content/software'
import { getStats } from '../../content/stats'
import { omit } from 'lodash'
import background from '../../assets/backgrounds/jungle.png'

const backgroundImage = getImageProps(background)

const blogs = getArticles(['ecosystem'], 4).map((i) => omit(i, ['icon']))
const software = getSoftware('')

type Props = AsyncReturnType<typeof getStaticProps>['props']

function CommunityEcosystem({ stats }: Props) {
  return (
    <Layout
      heading={
        <Section size="4">
          <SiteHeading
            size="64"
            title="Community & Ecosystem"
            description={
              <>
                Sia is a thriving ecosystem of open source software, layer 2
                networks, and commercial data storage platforms - made possible
                by a vibrant community of contributors.
              </>
            }
            links={[
              {
                title: 'Join our Discord',
                link: external.discord,
                newTab: true,
              },
              {
                title: 'Browse Reddit',
                link: external.reddit,
                newTab: true,
              },
            ]}
          />
        </Section>
      }
      stats={stats}
      backgroundImage={backgroundImage}
    >
      <Section>
        <SiteHeading
          size="32"
          title="The Latest from the Sia Community"
          description={
            <>
              Read about the latest updates and technical advancements in the
              Sia ecosystem.
            </>
          }
          links={[
            {
              title: 'Browse the blog',
              link: external.blog,
              newTab: true,
            },
          ]}
        />
        <ContentGallery columns="1" items={blogs} />
      </Section>
      <Section size="4">
        <Flex gap="3" align="start">
          <Box
            css={{
              display: 'none',
              '@bp2': {
                display: 'block',
              },
            }}
          >
            <Image
              src={'/built-with-sia.png'}
              alt="Built with Sia"
              height="130px"
              style={{
                filter: 'grayscale(1)',
              }}
            />
          </Box>
          <SiteHeading
            size="32"
            id="software"
            title="A Vibrant & Active Ecosystem"
            description={
              <>
                Sia is a thriving ecosystem of open source software, layer 2
                networks, and commercial data storage platforms.
              </>
            }
          />
        </Flex>
        <ContentGallery
          eyebrow="Filter projects"
          filterable="software"
          component={ContentProject}
          columns={{
            '@initial': 1,
            '@bp2': 2,
            '@bp4': 3,
          }}
          items={software}
        />
      </Section>
      <Section>
        <Callout
          title="Sia Projects & Proposals"
          size="2"
          description={
            <>
              Do you have site feedback, development input, or a long-form
              proposal? Share it with us on Reddit. The Sia Foundation is also
              working on a grants program - watch this space!
            </>
          }
          actionTitle="Join the discussion"
          actionLink={external.reddit}
          actionNewTab
        />
      </Section>
    </Layout>
  )
}

export async function getStaticProps() {
  const stats = await getStats()

  return {
    props: {
      stats,
    },
  }
}

export default CommunityEcosystem
