import { Category, Template } from '@/models'

export const getExampleUrl = (category: Category, template: Template) => {
  return `/templates/${category.id}/${template.filename}`
}
