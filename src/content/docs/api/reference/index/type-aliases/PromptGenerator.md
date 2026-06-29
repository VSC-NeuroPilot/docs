---
editUrl: false
next: false
prev: false
title: "PromptGenerator"
---

> **PromptGenerator**\<`TData`, `TSchema`, `TDataShape`\> = `string` \| ((`context`) => `string`)

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:295

A prompt parameter can either be a string or a function that converts an RCEContext into a prompt string.

## Type Parameters

### TData

`TData` *extends* `unknown` \| `undefined` = `unknown`

### TSchema

`TSchema` *extends* `StandardJSONSchemaV1` \| `JSONSchema7` \| `undefined` = `JSONSchema7` \| `undefined`

### TDataShape

`TDataShape` = [`InferDataFromSchema`](/docs/api/reference/index/type-aliases/inferdatafromschema/)\<`TSchema`\>
