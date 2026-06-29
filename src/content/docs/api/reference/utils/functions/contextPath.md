---
editUrl: false
next: false
prev: false
title: "contextPath"
---

> **contextPath**(`path`): `string`

Defined in: @vsc-neuropilot/api-types/dist/utils.d.mts:12

Process a path for usage in context.

Normalizes path separators, and removes the path to the workspace folder.
Only uses the folder / file name if the path is outside the workspace folder.

## Parameters

### path

`string`

The path to process.

## Returns

`string`
