---
editUrl: false
next: false
prev: false
title: "contextPath"
---

> **contextPath**(`path`): `string`

Defined in: [extension/packages/types/src/utils/index.ts:15](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/utils/index.ts#L15)

Process a path for usage in context.

Normalizes path separators, and removes the path to the workspace folder.
Only uses the folder / file name if the path is outside the workspace folder.

## Parameters

### path

`string`

The path to process.

## Returns

`string`
