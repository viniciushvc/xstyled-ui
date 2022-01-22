import { x } from '@xstyled/styled-components'

const PlaygroundPage = () => {
  return (
    <x.iframe
      w="100%"
      h="calc(100vh - 178px)"
      overflow="hidden"
      src="https://codesandbox.io/embed/xstyled-v2-playground-od6si?fontsize=14&codemirror=1"
      title="xstyled V2 — Playground"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      loading="lazy"
    />
  )
}

export default PlaygroundPage
