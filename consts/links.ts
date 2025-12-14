import assert from 'node:assert'
export const BASE_GITHUB_ORG: string = "https://github.com/VSC-NeuroPilot"
type Marketplaces = "vsm" | "ovsx"
export const PUBLISHER_URL = (market: Marketplaces) => {
    assert(market === "ovsx" || market === "vsm", "Marketplace link type is not a valid value!")
    if (market === "vsm") return "https://marketplace.visualstudio.com/publishers/VSC-NeuroPilot"
    else if (market === "ovsx") return "https://open-vsx.org/namespace/vsc-neuropilot"
    else throw new Error('Something went wrong!')
}
type MarketplaceLinks = "page" | "direct" | "vsx"
export const MARKETPLACE_URL = (type: MarketplaceLinks, extension: string) => {
    assert(type === "page" || type === "direct" || type === "vsx", 'Marketplace link type is not a valid value!')
    if (type === "page") return `https://marketplace.visualstudio.com/items?itemName=vsc-neuropilot.${extension}`
    else if (type === "direct") return `vscode:extension/vsc-neuropilot.${extension}`
    else if (type === "vsx") return `https://open-vsx.org/extension/vsc-neuropilot/${extension}`
    else throw new Error('Something went wrong!')
}
