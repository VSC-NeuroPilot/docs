---
editUrl: false
next: false
prev: false
title: "DiffLine"
---

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:211

## Extended by

- [`DiffPlusLine`](/docs/api/reference/interfaces/diffplusline/)

## Properties

### newIndex

> **newIndex**: `number`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:217

The line number in the new version of the text, or -1 if the line was deleted.

***

### oldIndex

> **oldIndex**: `number`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:215

The original line number in the old version of the text, or -1 if the line is new.

***

### text

> **text**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:213

The text of the line.
