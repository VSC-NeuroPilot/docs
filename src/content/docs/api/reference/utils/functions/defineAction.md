---
editUrl: false
next: false
prev: false
title: "defineAction"
---

> **defineAction**\<`TData`, `TSchema`, `TInput`\>(`action`): [`RCEAction`](/docs/api/reference/index/interfaces/rceaction/)\<`TData`, `TSchema`, `TInput`\>

Defined in: @vsc-neuropilot/api-types/dist/utils.d.mts:100

Define an action with proper type inference for schema, input data, and event types.

## Type Parameters

### TData

`TData` *extends* `object` \| `undefined`

### TSchema

`TSchema` *extends* `any`

### TInput

`TInput` *extends* `any`

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
