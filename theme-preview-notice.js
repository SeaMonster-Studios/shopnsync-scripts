import { ready } from './utils'

ready(() => {
  const exp = new RegExp('Shopify.theme = {"name":"(.*?)"')
  const match = document.documentElement.innerHTML.match(exp)

  if (match.length > 1) {
    console.info(`[Shopnsync] Previewing theme: ${match[1]}`)
  } else {
    console.info(`[Shopnsync] You're editing the published theme.`)
  }
})
