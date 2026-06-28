---
editUrl: false
next: false
prev: false
title: "DiffPlus"
---

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:242

## Extends

- [`Diff`](/docs/api/reference/interfaces/diff/)

## Properties

### lineCountDeleted

> **lineCountDeleted**: `number`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:238

The number of lines in the old text that do not appear in the new text (i.e., deleted or changed lines).

#### Inherited from

[`Diff`](/docs/api/reference/interfaces/diff/).[`lineCountDeleted`](/docs/api/reference/interfaces/diff/#linecountdeleted)

***

### lineCountInserted

> **lineCountInserted**: `number`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:240

The number of lines in the new text that do not appear in the old text (i.e., inserted or changed lines).

#### Inherited from

[`Diff`](/docs/api/reference/interfaces/diff/).[`lineCountInserted`](/docs/api/reference/interfaces/diff/#linecountinserted)

***

### lineCountMoved

> **lineCountMoved**: `number`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:245

The number of lines that were moved.

***

### lines

> **lines**: [`DiffPlusLine`](/docs/api/reference/interfaces/diffplusline/)[]

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:243

The lines in the diff.

#### Overrides

[`Diff`](/docs/api/reference/interfaces/diff/).[`lines`](/docs/api/reference/interfaces/diff/#lines)
