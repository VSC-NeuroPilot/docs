---
editUrl: false
next: false
prev: false
title: "DiffRange"
---

Defined in: [extension/packages/types/src/actions/types.ts:297](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L297)

## Properties

### range

> **range**: `Range`

Defined in: [extension/packages/types/src/actions/types.ts:299](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L299)

The line/column range of the part of the diff.

***

### removedText?

> `optional` **removedText?**: `string`

Defined in: [extension/packages/types/src/actions/types.ts:303](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L303)

The text that was removed. Only applicable for removed and modified ranges.

***

### type

> **type**: [`DiffRangeType`](/docs/api/reference/index/enumerations/diffrangetype/)

Defined in: [extension/packages/types/src/actions/types.ts:301](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L301)

The type of the diff range (added, removed or modified).
