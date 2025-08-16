export const BASE_GITHUB_ORG: string = "https://github.com/VSC-NeuroPilot"
type MarketplaceLinks = "page" | "direct"
export const MARKETPLACE_URL = (type: MarketplaceLinks) => {
    if (type === "page") {
        return "https://marketplace.visualstudio.com/items?itemName=Pasu4.neuropilot"
    } else if (type === "direct") {
        return "vscode:extension/Pasu4.neuropilot"
    } else
        return "/"
}