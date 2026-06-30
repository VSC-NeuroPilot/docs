---
editUrl: false
next: false
prev: false
title: "PromptGenerator"
---

> **PromptGenerator**\<`TData`, `TSchema`, `TDataShape`\> = `string` \| ((`context`) => `string`)

Defined in: [extension/packages/types/src/actions/types.ts:155](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L155)

A prompt parameter can either be a string or a function that converts an RCEContext into a prompt string.

## Type Parameters

### TData

`TData` *extends* `unknown` \| `undefined` = `unknown`

### TSchema

`TSchema` *extends* `StandardJSONSchemaV1` \| `JSONSchema7` \| `undefined` = `JSONSchema7` \| `undefined`

### TDataShape

`TDataShape` = [`InferDataFromSchema`](/docs/api/reference/index/type-aliases/inferdatafromschema/)\<`TSchema`\>
