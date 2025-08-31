// NeuroPilot client version
export const clientVersion: string | undefined = import.meta.env.PUBLIC_CLIENT_VERSION
// Server version
export const serverVersion: string | undefined = import.meta.env.PUBLIC_SERVER_VERSION

// Commit detection
export const docsNext: boolean | undefined = import.meta.env.PUBLIC_NEXT as boolean