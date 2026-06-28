---
editUrl: false
next: false
prev: false
title: "Diff"
---

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:234

## Extended by

- [`DiffPlus`](/docs/api/reference/interfaces/diffplus/)

## Properties

### lineCountDeleted

> **lineCountDeleted**: `number`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:238

The number of lines in the old text that do not appear in the new text (i.e., deleted or changed lines).

***

### lineCountInserted

> **lineCountInserted**: `number`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:240

The number of lines in the new text that do not appear in the old text (i.e., inserted or changed lines).

***

### lines

> **lines**: [`DiffLine`](/docs/api/reference/interfaces/diffline/)[]

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:236

The lines in the diff.
