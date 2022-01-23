import type { Category } from '@/models'

import { authentications } from './authentications'
import { buttons } from './buttons'
import { headers } from './headers'

export const samples: Category[] = [
  {
    id: 'authentications',
    name: 'Authentications',
    description:
      'Auth forms used to register and sign users with email-password and OAuth solutions.',
    image: 'https://source.unsplash.com/random',
    items: authentications,
  },
  {
    id: 'buttons',
    name: 'Buttons',
    description:
      'Buttons are used to trigger actions. They can be used as links, buttons or anchors.',
    image: 'https://source.unsplash.com/random',
    items: buttons,
  },
  // {
  //   id: 'components',
  //   name: 'Components',
  //   description: 'Components used to build your application.',
  //   image: 'https://source.unsplash.com/random',
  //   items: [buttons],
  // },
  {
    id: 'headers',
    name: 'Headers',
    description:
      'Usually placed at the top of a page to show information about that current page.',
    image: 'https://source.unsplash.com/random',
    items: headers,
  },
  // {
  //   id: 'lists',
  //   name: 'Lists',
  //   description: 'Lists are a simple ways to displays related data.',
  //   image: 'https://source.unsplash.com/random',
  //   items: [buttons],
  // },
  // {
  //   id: 'section',
  //   name: 'Sections',
  //   description: 'Beautiful sections to group related content.',
  //   image: 'https://source.unsplash.com/random',
  //   items: [buttons],
  // },
]
