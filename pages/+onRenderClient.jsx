// https://vike.dev/onRenderClient
export { onRenderClient }

import React from 'react'
import { hydrateRoot } from 'react-dom/client'

async function onRenderClient(pageContext) {
  const { Page, pageProps } = pageContext
  const root = document.getElementById('root')
  
  hydrateRoot(
    root,
    <Page {...pageProps} />
  )
}