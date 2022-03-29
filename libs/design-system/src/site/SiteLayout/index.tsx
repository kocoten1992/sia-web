import { Box } from '../../core/Box'
import { ScrollArea } from '../../core/ScrollArea'
import { NextImage } from '../../core/Image'
import { ImageProps } from '../../lib/image'
import { Flex } from '../../core/Flex'
import { SiteMenu } from './SiteMenu'
import { AppBar } from '../../core/AppBar'
import { Container } from '../../core/Container'
import { LinkData } from '../../lib/links'

type Props = {
  navbar?: React.ReactNode
  menuLinks: LinkData[]
  heading: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
  backgroundImage: ImageProps
}

export function SiteLayout({
  navbar,
  menuLinks,
  heading,
  children,
  footer,
  backgroundImage,
}: Props) {
  return (
    <Box
      as="main"
      css={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        border: `$sizes$frame solid $frame`,
        background: '$loContrast',
      }}
    >
      <ScrollArea>
        <Box
          css={{
            position: 'relative',
            flex: 2,
            '@inital': {
              marginRight: '0%',
            },
            '@bp3': {
              marginRight: '30%',
            },
          }}
        >
          {navbar && (
            <AppBar
              size="3"
              css={{
                zIndex: 2,
              }}
            >
              <Container size="4">{navbar}</Container>
            </AppBar>
          )}
          <Box
            css={{
              position: 'relative',
              flex: 2,
            }}
          >
            <Flex as="main" direction="column" gap="8" css={{ width: '100%' }}>
              <Flex direction="column">
                {heading}
                <Box
                  css={{
                    position: 'relative',
                    width: '100%',
                    height: '390px',
                    borderTop: '$sizes$frame solid $frame',
                    borderBottom: '$sizes$frame solid $frame',
                    '@initial': {
                      display: 'block',
                    },
                    '@bp3': {
                      display: 'none',
                    },
                  }}
                >
                  <Box
                    css={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      zIndex: 1,
                      backgroundColor: 'rgba(30, 169, 76, 0.3)',
                    }}
                  />
                  <NextImage
                    src={backgroundImage.src}
                    blurDataURL={backgroundImage.blurDataURL}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
                {children}
                {footer}
              </Flex>
            </Flex>
          </Box>
        </Box>
      </ScrollArea>
      <SiteMenu links={menuLinks} />
      <Box
        css={{
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 1,
          height: '100%',
          '@inital': {
            width: '0%',
            display: 'none',
          },
          '@bp3': {
            borderLeft: `$sizes$frame solid $frame`,
            width: '30%',
          },
          '@bp4': {
            borderLeft: `$sizes$frame solid $frame`,
            width: '30%',
          },
          overflow: 'hidden',
        }}
      >
        <Box
          css={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <Box
            css={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              zIndex: 1,
              backgroundColor: 'rgba(30, 169, 76, 0.3)',
            }}
          />
          <NextImage
            src={backgroundImage.src}
            blurDataURL={backgroundImage.blurDataURL}
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </Box>
    </Box>
  )
}
