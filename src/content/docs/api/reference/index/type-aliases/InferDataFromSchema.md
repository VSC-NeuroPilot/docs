---
editUrl: false
next: false
prev: false
title: "InferDataFromSchema"
---

> **InferDataFromSchema**\<`TSchema`\> = `TSchema` *extends* `StandardJSONSchemaV1` ? `StandardJSONSchemaV1.InferInput`\<`TSchema`\> : `TSchema` *extends* `JSONSchema7` ? `unknown` : `undefined`

Defined in: [extension/packages/types/src/actions/types.ts:44](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L44)

Extracts the input type from a Standard Schema and casts it to be compatible with RCEAction.
This is necessary because Standard Schema's InferInput returns a type that may not structurally match JSONSchema7Object.

## Type Parameters

### TSchema

`TSchema` *extends* [`SchemaTypes`](/docs/api/reference/index/type-aliases/schematypes/)
