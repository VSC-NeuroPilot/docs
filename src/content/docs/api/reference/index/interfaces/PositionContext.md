---
editUrl: false
next: false
prev: false
title: "PositionContext"
---

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:412

## Properties

### contextAfter

> **contextAfter**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:416

The context after the range, or an empty string if the cursor is not defined.

***

### contextBefore

> **contextBefore**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:414

The context before the cursor, or the entire context if the cursor is not defined.

***

### cursorDefined

> **cursorDefined**: `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:424

`true` if the cursor is defined and inside the context, `false` otherwise.

***

### endLine

> **endLine**: `number`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:420

The zero-based line where [contextBefore](/docs/api/reference/index/interfaces/positioncontext/#contextafter) ends.

***

### startLine

> **startLine**: `number`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:418

The zero-based line where [contextBefore](/docs/api/reference/index/interfaces/positioncontext/#contextbefore) starts.

***

### totalLines

> **totalLines**: `number`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:422

The number of total lines in the file.
