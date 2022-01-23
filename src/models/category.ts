import type { Template } from '@/models'

export type Category = {
  id: string
  name: string
  description: string
  image: string
  items: Template[]
}
