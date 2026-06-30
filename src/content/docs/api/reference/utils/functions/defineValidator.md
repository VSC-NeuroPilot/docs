---
editUrl: false
next: false
prev: false
title: "defineValidator"
---

> **defineValidator**\<`TData`, `TSchema`, `TInput`, `TReturn`\>(`validator`): (`ctx`) => `TReturn`

Defined in: [extension/packages/types/src/utils/index.ts:248](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/utils/index.ts#L248)

## Type Parameters

### TData

`TData` *extends* `object` \| `undefined`

### TSchema

`TSchema` *extends* [`SchemaTypes`](/docs/api/reference/index/type-aliases/schematypes/)

### TInput

`TInput` *extends* `unknown`

### TReturn

`TReturn` *extends* [`ActionValidationResult`](/docs/api/reference/index/interfaces/actionvalidationresult/) \| `Thenable`\<[`ActionValidationResult`](/docs/api/reference/index/interfaces/actionvalidationresult/)\>

## Parameters

### validator

(`ctx`) => `TReturn`

## Returns

(`ctx`) => `TReturn`
