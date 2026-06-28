---
editUrl: false
next: false
prev: false
title: "DiffRange"
---

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:247

## Properties

### range

> **range**: `Range`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:249

The line/column range of the part of the diff.

***

### removedText?

> `optional` **removedText?**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:253

The text that was removed. Only applicable for removed and modified ranges.

***

### type

> **type**: [`DiffRangeType`](/docs/api/reference/enumerations/diffrangetype/)

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:251

The type of the diff range (added, removed or modified).
