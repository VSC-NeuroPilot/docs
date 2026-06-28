---
editUrl: false
next: false
prev: false
title: "DiffPlusLine"
---

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:219

## Extends

- [`DiffLine`](/docs/api/reference/interfaces/diffline/)

## Properties

### moved

> **moved**: `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:221

Whether the line was moved.

***

### newIndex

> **newIndex**: `number`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:232

The line number in the new version of the text, or -1 if the line was deleted.
For moved lines, this is the line number this line was moved to.
If this is -1 for a moved line, it is the counterpart of another moved line where the correct index is set.

#### Overrides

[`DiffLine`](/docs/api/reference/interfaces/diffline/).[`newIndex`](/docs/api/reference/interfaces/diffline/#newindex)

***

### oldIndex

> **oldIndex**: `number`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:226

The original line number in the old version of the text, or -1 if the line is new.
For moved lines, this is the line number this line was moved from.

#### Overrides

[`DiffLine`](/docs/api/reference/interfaces/diffline/).[`oldIndex`](/docs/api/reference/interfaces/diffline/#oldindex)

***

### text

> **text**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:213

The text of the line.

#### Inherited from

[`DiffLine`](/docs/api/reference/interfaces/diffline/).[`text`](/docs/api/reference/interfaces/diffline/#text)
