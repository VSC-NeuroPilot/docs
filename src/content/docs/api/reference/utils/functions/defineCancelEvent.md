---
editUrl: false
next: false
prev: false
title: "defineCancelEvent"
---

> **defineCancelEvent**\<`TData`, `TSchema`, `TInput`, `TEventData`, `TReturn`\>(`event`): (`ctx`) => `TReturn`

Defined in: [extension/packages/types/src/utils/index.ts:278](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/utils/index.ts#L278)

## Type Parameters

### TData

`TData` *extends* `object` \| `undefined`

### TSchema

`TSchema` *extends* [`SchemaTypes`](/docs/api/reference/index/type-aliases/schematypes/)

### TInput

`TInput` *extends* `unknown`

### TEventData

`TEventData` *extends* `unknown`

### TReturn

`TReturn` *extends* [`RCECancelEvent`](/docs/api/reference/index/interfaces/rcecancelevent/)\<`TEventData`\> \| `null`

## Parameters

### event

(`ctx`) => `TReturn`

## Returns

(`ctx`) => `TReturn`
