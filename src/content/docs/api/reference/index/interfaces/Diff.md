---
editUrl: false
next: false
prev: false
title: "Diff"
---

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:391

## Extended by

- [`DiffPlus`](/docs/api/reference/index/interfaces/diffplus/)

## Properties

### lineCountDeleted

> **lineCountDeleted**: `number`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:395

The number of lines in the old text that do not appear in the new text (i.e., deleted or changed lines).

***

### lineCountInserted

> **lineCountInserted**: `number`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:397

The number of lines in the new text that do not appear in the old text (i.e., inserted or changed lines).

***

### lines

> **lines**: [`DiffLine`](/docs/api/reference/index/interfaces/diffline/)[]

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:393

The lines in the diff.
