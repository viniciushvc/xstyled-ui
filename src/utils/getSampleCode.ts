/**
 * Get sample code from a file
 *
 */
export const getSampleCode = (category: string, filename: string) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const code = require(`!!raw-loader!../pages/templates/${category}/${filename}`)

  return code.default
}
