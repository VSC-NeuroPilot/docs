---
editUrl: false
next: false
prev: false
title: "getMaxFenceLength"
---

> **getMaxFenceLength**(`text`): `number`

Defined in: [extension/packages/types/src/utils/index.ts:208](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/utils/index.ts#L208)

Searches for the longest fence (at least 3 backticks in a row) in the given text.

Enclosing fences should have at least one backtick more than this, and at least three.

## Parameters

### text

`string`

The text to search for fences in.

## Returns

`number`

The length of the longest fence found in the text, or 0 if no fences were found.

## See

https://spec.commonmark.org/0.12/#fenced-code-blocks
