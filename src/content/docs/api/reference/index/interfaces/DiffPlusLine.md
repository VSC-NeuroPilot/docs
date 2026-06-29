---
editUrl: false
next: false
prev: false
title: "DiffPlusLine"
---

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:376

## Extends

- [`DiffLine`](/docs/api/reference/index/interfaces/diffline/)

## Properties

### moved

> **moved**: `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:378

Whether the line was moved.

***

### newIndex

> **newIndex**: `number`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:389

The line number in the new version of the text, or -1 if the line was deleted.
For moved lines, this is the line number this line was moved to.
If this is -1 for a moved line, it is the counterpart of another moved line where the correct index is set.

#### Overrides

[`DiffLine`](/docs/api/reference/index/interfaces/diffline/).[`newIndex`](/docs/api/reference/index/interfaces/diffline/#newindex)

***

### oldIndex

> **oldIndex**: `number`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:383

The original line number in the old version of the text, or -1 if the line is new.
For moved lines, this is the line number this line was moved from.

#### Overrides

[`DiffLine`](/docs/api/reference/index/interfaces/diffline/).[`oldIndex`](/docs/api/reference/index/interfaces/diffline/#oldindex)

***

### text

> **text**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:370

The text of the line.

#### Inherited from

[`DiffLine`](/docs/api/reference/index/interfaces/diffline/).[`text`](/docs/api/reference/index/interfaces/diffline/#text)
