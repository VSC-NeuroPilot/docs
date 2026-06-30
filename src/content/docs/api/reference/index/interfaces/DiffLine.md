---
editUrl: false
next: false
prev: false
title: "DiffLine"
---

Defined in: [extension/packages/types/src/actions/types.ts:258](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L258)

## Extended by

- [`DiffPlusLine`](/docs/api/reference/index/interfaces/diffplusline/)

## Properties

### newIndex

> **newIndex**: `number`

Defined in: [extension/packages/types/src/actions/types.ts:264](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L264)

The line number in the new version of the text, or -1 if the line was deleted.

***

### oldIndex

> **oldIndex**: `number`

Defined in: [extension/packages/types/src/actions/types.ts:262](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L262)

The original line number in the old version of the text, or -1 if the line is new.

***

### text

> **text**: `string`

Defined in: [extension/packages/types/src/actions/types.ts:260](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L260)

The text of the line.
