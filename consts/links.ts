export const BASE_GITHUB_ORG: string = "https://github.com/VSC-NeuroPilot"
type MarketplaceLinks = "page" | "direct" | "vsx"
export const MARKETPLACE_URL = (type: MarketplaceLinks) => {
    if (type === "page") {
        return "https://marketplace.visualstudio.com/items?itemName=vsc-neuropilot.neuropilot-base"
    } else if (type === "direct") {
        return "vscode:extension/vsc-neuropilot.neuropilot-base"
    } else if (type === "vsx") {
        return "https://open-vsx.org/extension/vsc-neuropilot/neuropilot-base"
    } else
        return "/"
}
