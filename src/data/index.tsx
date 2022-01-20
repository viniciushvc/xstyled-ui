import { buttons } from './components/socialMediaButtons'
import { cards } from './components/cards'
import { result } from './components/result'

import { authentication } from './templates/authentication'
import { newsletter } from './templates/newsletter'

import { contact } from './templates/contact'

import { Category } from './types'

export const data: Category[] = [
  {
    name: 'Forms',
    id: 'forms',
    subLabel: 'User Login & Newsletter Forms',
    children: [authentication, newsletter, contact]
  },
  {
    name: 'Components',
    id: 'components',
    subLabel: 'Smaller buildings blocks like Cards, Buttons, Result ...',
    children: [cards, buttons, result]
  }
]
