---
editUrl: false
next: false
prev: false
title: "Diff"
---

Defined in: [extension/packages/types/src/actions/types.ts:282](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L282)

## Extended by

- [`DiffPlus`](/docs/api/reference/index/interfaces/diffplus/)

## Properties

### lineCountDeleted

> **lineCountDeleted**: `number`

Defined in: [extension/packages/types/src/actions/types.ts:286](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L286)

The number of lines in the old text that do not appear in the new text (i.e., deleted or changed lines).

***

### lineCountInserted

> **lineCountInserted**: `number`

Defined in: [extension/packages/types/src/actions/types.ts:288](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L288)

The number of lines in the new text that do not appear in the old text (i.e., inserted or changed lines).

***

### lines

> **lines**: [`DiffLine`](/docs/api/reference/index/interfaces/diffline/)[]

Defined in: [extension/packages/types/src/actions/types.ts:284](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L284)

The lines in the diff.
