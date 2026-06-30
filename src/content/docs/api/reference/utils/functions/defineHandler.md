---
editUrl: false
next: false
prev: false
title: "defineHandler"
---

> **defineHandler**\<`TData`, `TSchema`, `TInput`, `TReturn`\>(`handler`): (`ctx`) => `TReturn`

Defined in: [extension/packages/types/src/utils/index.ts:258](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/utils/index.ts#L258)

## Type Parameters

### TData

`TData` *extends* `object` \| `undefined`

### TSchema

`TSchema` *extends* [`SchemaTypes`](/docs/api/reference/index/type-aliases/schematypes/)

### TInput

`TInput` *extends* `unknown`

### TReturn

`TReturn` *extends* [`ActionHandlerResult`](/docs/api/reference/index/interfaces/actionhandlerresult/) \| `Thenable`\<[`ActionHandlerResult`](/docs/api/reference/index/interfaces/actionhandlerresult/)\>

## Parameters

### handler

(`ctx`) => `TReturn`

## Returns

(`ctx`) => `TReturn`
