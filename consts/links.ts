export const BASE_GITHUB_URL: string = "https://github.com/VSC-NeuroPilot/neuropilot"
type MarketplaceLinks = "page" | "direct"
export const MARKETPLACE_URL = (type: MarketplaceLinks) => {
    if (type === "page") {
        return "https://marketplace.visualstudio.com/items?itemName=Pasu4.neuropilot"
    } else if (type === "direct") {
        return "vscode:extension/Pasu4.neuropilot"
    } else
        return "/"
}