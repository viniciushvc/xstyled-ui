import { SystemProps, x } from '@xstyled/styled-components'
import Link from 'next/link'

import { useRouter } from 'next/router'

import { data } from '../data'

const NavigationLink = ({
  href,
  children,
  asPath
}: {
  href: string
  children: React.ReactNode
  asPath: string
}) => {
  const isActive = asPath === href

  const activeBg = 'bg'

  return (
    <Link href={href} passHref>
      <x.a
        fontSize={'sm'}
        rounded={'md'}
        px={3}
        py={2}
        ml={'-12px!important'}
        bg={isActive ? activeBg : undefined}
        fontWeight={isActive ? 600 : 400}
        color={isActive ? 'primary-500' : 'blue-500'}
        _hover={{
          bg: isActive ? activeBg : 'primary-500'
        }}
      >
        {children}
      </x.a>
    </Link>
  )
}

export const Navigation = (props: SystemProps) => {
  const { asPath } = useRouter()
  const categoryColor = 'primary-500'

  return (
    <x.div
      as={'nav'}
      spaceX={6}
      maxW={{ md: '3xs' }}
      w={'full'}
      flexShrink={0}
      {...props}
    >
      {data.map((category) => (
        <x.div key={category.id}>
          <x.p
            textTransform={'uppercase'}
            color={categoryColor}
            fontWeight={700}
            fontSize={'sm'}
            letterSpacing={1}
          >
            {category.name}
          </x.p>
          <x.div spaceX={1}>
            {category.children?.map((subCategory) => (
              <NavigationLink
                asPath={asPath}
                key={subCategory.id}
                href={`/${category.id}/${subCategory.id}`}
              >
                {subCategory.name}
              </NavigationLink>
            ))}
          </x.div>
        </x.div>
      ))}

      <x.div spaceX={2} rounded={'md'} p={{ base: 4 }}>
        <x.p fontWeight={700} fontSize={'sm'}>
          These are not the templates you are looking for?
        </x.p>
        <x.p fontSize={'sm'}>
          Feel free to contribute your own template in our{' '}
          <x.a
            href="https://github.com/gregberge/xstyled"
            target="_blank"
            rel="noopener noreferrer"
            color="green-400"
          >
            Github
          </x.a>{' '}
          Repository.
        </x.p>
      </x.div>
    </x.div>
  )
}
