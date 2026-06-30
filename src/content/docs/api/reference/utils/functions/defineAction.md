---
editUrl: false
next: false
prev: false
title: "defineAction"
---

> **defineAction**\<`TData`, `TSchema`, `TInput`\>(`action`): [`RCEAction`](/docs/api/reference/index/interfaces/rceaction/)\<`TData`, `TSchema`, `TInput`\>

Defined in: [extension/packages/types/src/utils/index.ts:239](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/utils/index.ts#L239)

Define an action with proper type inference for schema, input data, and event types.

## Type Parameters

### TData

`TData` *extends* `object` \| `undefined`

### TSchema

`TSchema` *extends* [`SchemaTypes`](/docs/api/reference/index/type-aliases/schematypes/)

### TInput

`TInput` *extends* `unknown`

## Parameters

### action

[`RCEAction`](/docs/api/reference/index/interfaces/rceaction/)\<`TData`, `TSchema`, `TInput`\>

The action definition

## Returns

[`RCEAction`](/docs/api/reference/index/interfaces/rceaction/)\<`TData`, `TSchema`, `TInput`\>

The same action with full type inference

## Example

```ts
defineAction({
  name: 'my_action',
  schema: z.object({ file: z.string() }),
  handler: (ctx) => actionHandlerSuccess(),
  cancelEvents: [(ctx) => new RCECancelEvent<vscode.FileDeleteEvent>({ ... })],
  // ...
});
```
