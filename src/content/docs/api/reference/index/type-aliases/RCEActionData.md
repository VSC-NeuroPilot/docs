---
editUrl: false
next: false
prev: false
title: "RCEActionData"
---

> **RCEActionData**\<`TDataShape`, `TSchema`\> = `TSchema` *extends* `undefined` ? `Omit`\<`ActionData`, `"params"`\> & `object` : `Omit`\<`ActionData`, `"params"`\> & `object`

Defined in: [extension/packages/types/src/actions/classes.ts:14](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L14)

Conditional type for ActionData that makes params required when a schema exists,
and optional/undefined when no schema is provided.

## Type Parameters

### TDataShape

`TDataShape`

### TSchema

`TSchema` *extends* [`SchemaTypes`](/docs/api/reference/index/type-aliases/schematypes/)
