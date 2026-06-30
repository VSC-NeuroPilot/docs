---
editUrl: false
next: false
prev: false
title: "DiffPlus"
---

Defined in: [extension/packages/types/src/actions/types.ts:291](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L291)

## Extends

- [`Diff`](/docs/api/reference/index/interfaces/diff/)

## Properties

### lineCountDeleted

> **lineCountDeleted**: `number`

Defined in: [extension/packages/types/src/actions/types.ts:286](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L286)

The number of lines in the old text that do not appear in the new text (i.e., deleted or changed lines).

#### Inherited from

[`Diff`](/docs/api/reference/index/interfaces/diff/).[`lineCountDeleted`](/docs/api/reference/index/interfaces/diff/#linecountdeleted)

***

### lineCountInserted

> **lineCountInserted**: `number`

Defined in: [extension/packages/types/src/actions/types.ts:288](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L288)

The number of lines in the new text that do not appear in the old text (i.e., inserted or changed lines).

#### Inherited from

[`Diff`](/docs/api/reference/index/interfaces/diff/).[`lineCountInserted`](/docs/api/reference/index/interfaces/diff/#linecountinserted)

***

### lineCountMoved

> **lineCountMoved**: `number`

Defined in: [extension/packages/types/src/actions/types.ts:294](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L294)

The number of lines that were moved.

***

### lines

> **lines**: [`DiffPlusLine`](/docs/api/reference/index/interfaces/diffplusline/)[]

Defined in: [extension/packages/types/src/actions/types.ts:292](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L292)

The lines in the diff.

#### Overrides

[`Diff`](/docs/api/reference/index/interfaces/diff/).[`lines`](/docs/api/reference/index/interfaces/diff/#lines)
