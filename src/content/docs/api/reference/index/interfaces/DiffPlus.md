---
editUrl: false
next: false
prev: false
title: "DiffPlus"
---

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:399

## Extends

- [`Diff`](/docs/api/reference/index/interfaces/diff/)

## Properties

### lineCountDeleted

> **lineCountDeleted**: `number`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:395

The number of lines in the old text that do not appear in the new text (i.e., deleted or changed lines).

#### Inherited from

[`Diff`](/docs/api/reference/index/interfaces/diff/).[`lineCountDeleted`](/docs/api/reference/index/interfaces/diff/#linecountdeleted)

***

### lineCountInserted

> **lineCountInserted**: `number`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:397

The number of lines in the new text that do not appear in the old text (i.e., inserted or changed lines).

#### Inherited from

[`Diff`](/docs/api/reference/index/interfaces/diff/).[`lineCountInserted`](/docs/api/reference/index/interfaces/diff/#linecountinserted)

***

### lineCountMoved

> **lineCountMoved**: `number`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:402

The number of lines that were moved.

***

### lines

> **lines**: [`DiffPlusLine`](/docs/api/reference/index/interfaces/diffplusline/)[]

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:400

The lines in the diff.

#### Overrides

[`Diff`](/docs/api/reference/index/interfaces/diff/).[`lines`](/docs/api/reference/index/interfaces/diff/#lines)
