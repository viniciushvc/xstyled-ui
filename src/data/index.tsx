import { Category } from './types'

import { cards } from './components/cards'

export const data: Category[] = [
  {
    name: 'Cards',
    id: 'components',
    subLabel: 'User Login & Newsletter Forms',
    children: [cards]
  }
]
