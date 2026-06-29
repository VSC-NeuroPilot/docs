---
editUrl: false
next: false
prev: false
title: "InferDataFromSchema"
---

> **InferDataFromSchema**\<`TSchema`\> = `TSchema` *extends* `StandardJSONSchemaV1` ? `StandardJSONSchemaV1.InferInput`\<`TSchema`\> : `TSchema` *extends* `JSONSchema7` ? `unknown` : `undefined`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:190

Extracts the input type from a Standard Schema and casts it to be compatible with RCEAction.
This is necessary because Standard Schema's InferInput returns a type that may not structurally match JSONSchema7Object.

## Type Parameters

### TSchema

`TSchema` *extends* [`SchemaTypes`](/docs/api/reference/index/type-aliases/schematypes/)
