---
editUrl: false
next: false
prev: false
title: "RCEContext"
---

Defined in: [extension/packages/types/src/actions/classes.ts:78](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L78)

RCE executes the methods of [RCEAction](/docs/api/reference/index/interfaces/rceaction/) (and therefore passes the context object) in the following order:
1. Setup hooks
2. Validators (sync)
3. Cancel events setup
4. Prompt Generator
5. Preview effects
6. Some arbitrary time in between here, event listeners for cancel events may also be fired, and the predicate will receive the context object as well.
7. Handler

## Extends

- `Disposable`

## Type Parameters

### TData

`TData` *extends* `unknown` \| `undefined` = `undefined`

### TSchema

`TSchema` *extends* [`SchemaTypes`](/docs/api/reference/index/type-aliases/schematypes/) = [`SchemaTypes`](/docs/api/reference/index/type-aliases/schematypes/)

### TDataShape

`TDataShape` *extends* `unknown` \| `undefined` = `TData` *extends* `undefined` ? [`InferDataFromSchema`](/docs/api/reference/index/type-aliases/inferdatafromschema/)\<`TSchema`\> : `TData`

## Properties

### createdAt

> **createdAt**: `string`

Defined in: [extension/packages/types/src/actions/classes.ts:83](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L83)

***

### data

> **data**: [`RCEActionData`](/docs/api/reference/index/type-aliases/rceactiondata/)\<`TDataShape`, `TSchema`\>

Defined in: [extension/packages/types/src/actions/classes.ts:85](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L85)

***

### forced

> `readonly` **forced**: `boolean`

Defined in: [extension/packages/types/src/actions/classes.ts:86](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L86)

***

### lifecycle

> `readonly` **lifecycle**: [`RCELifecycleMetadata`](/docs/api/reference/index/interfaces/rcelifecyclemetadata/)

Defined in: [extension/packages/types/src/actions/classes.ts:89](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L89)

Lifecycle-specific data

***

### request?

> `optional` **request?**: [`RCERequestState`](/docs/api/reference/index/interfaces/rcerequeststate/)

Defined in: [extension/packages/types/src/actions/classes.ts:91](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L91)

Request-specific data (copilot mode only)

***

### storage

> **storage**: [`RCEStorage`](/docs/api/reference/index/type-aliases/rcestorage/)

Defined in: [extension/packages/types/src/actions/classes.ts:99](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L99)

Ephemeral storage.
Can be used to store data that needs to be accessed across different lifecycle stages of
the action (validation, preview, handler), so that it doesn't need to be regenerated in 
each stage.
This data does not persist across different executions.

***

### updateStatus

> `readonly` **updateStatus**: [`SimplifiedStatusUpdateHandler`](/docs/api/reference/index/type-aliases/simplifiedstatusupdatehandler/)

Defined in: [extension/packages/types/src/actions/classes.ts:105](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L105)

Updates the status of the action on the action execution history panel

#### Param

The new status to update to

#### Param

Message to update the status with

## Methods

### clearPreHandlerResources()

> **clearPreHandlerResources**(): `void`

Defined in: [extension/packages/types/src/actions/classes.ts:119](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L119)

Clears request timers and cancel events before handler execution.
This prevents timers/events from triggering during async handler execution.
Should be called immediately before invoking the handler.

#### Returns

`void`

***

### dispose()

> **dispose**(): `any`

Defined in: extension/node\_modules/.pnpm/@types+vscode@1.120.0/node\_modules/@types/vscode/index.d.ts:1748

Dispose this object.

#### Returns

`any`

#### Inherited from

`Disposable.dispose`

***

### done()

> **done**(`success`): `void`

Defined in: [extension/packages/types/src/actions/classes.ts:112](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L112)

Marks this context object as done and destroys it.
In normal circumstances you SHOULD NOT BE CALLING THIS FUNCTION, as RCE already handles this for you.

#### Parameters

##### success

`boolean`

Whether or not the action attempted that spawned this context was successful.

#### Returns

`void`
