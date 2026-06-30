---
editUrl: false
next: false
prev: false
title: "DiffPlusLine"
---

Defined in: [extension/packages/types/src/actions/types.ts:266](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L266)

## Extends

- [`DiffLine`](/docs/api/reference/index/interfaces/diffline/)

## Properties

### moved

> **moved**: `boolean`

Defined in: [extension/packages/types/src/actions/types.ts:268](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L268)

Whether the line was moved.

***

### newIndex

> **newIndex**: `number`

Defined in: [extension/packages/types/src/actions/types.ts:279](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L279)

The line number in the new version of the text, or -1 if the line was deleted.
For moved lines, this is the line number this line was moved to.
If this is -1 for a moved line, it is the counterpart of another moved line where the correct index is set.

#### Overrides

[`DiffLine`](/docs/api/reference/index/interfaces/diffline/).[`newIndex`](/docs/api/reference/index/interfaces/diffline/#newindex)

***

### oldIndex

> **oldIndex**: `number`

Defined in: [extension/packages/types/src/actions/types.ts:273](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L273)

The original line number in the old version of the text, or -1 if the line is new.
For moved lines, this is the line number this line was moved from.

#### Overrides

[`DiffLine`](/docs/api/reference/index/interfaces/diffline/).[`oldIndex`](/docs/api/reference/index/interfaces/diffline/#oldindex)

***

### text

> **text**: `string`

Defined in: [extension/packages/types/src/actions/types.ts:260](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L260)

The text of the line.

#### Inherited from

[`DiffLine`](/docs/api/reference/index/interfaces/diffline/).[`text`](/docs/api/reference/index/interfaces/diffline/#text)
