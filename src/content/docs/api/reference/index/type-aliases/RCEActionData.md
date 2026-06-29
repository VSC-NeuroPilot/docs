---
editUrl: false
next: false
prev: false
title: "RCEActionData"
---

> **RCEActionData**\<`TDataShape`, `TSchema`\> = `TSchema` *extends* `undefined` ? `Omit`\<`ActionData`, `"params"`\> & `object` : `Omit`\<`ActionData`, `"params"`\> & `object`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:26

Conditional type for ActionData that makes params required when a schema exists,
and optional/undefined when no schema is provided.

## Type Parameters

### TDataShape

`TDataShape`

### TSchema

`TSchema` *extends* [`SchemaTypes`](/docs/api/reference/index/type-aliases/schematypes/)
