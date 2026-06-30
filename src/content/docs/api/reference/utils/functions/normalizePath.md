---
editUrl: false
next: false
prev: false
title: "normalizePath"
---

> **normalizePath**(`path`): `string`

Defined in: [extension/packages/types/src/utils/index.ts:178](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/utils/index.ts#L178)

Normalize a path for comparisons.

Replaces Windows-style path separators with Unix-style ones.
If the path has a drive letter, makes it lowercase.

## Parameters

### path

`string`

The path to normalize.

## Returns

`string`
