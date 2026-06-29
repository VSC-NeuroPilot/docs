---
editUrl: false
next: false
prev: false
title: "RCEContext"
---

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:91

RCE executes the methods of [RCEAction](/docs/api/reference/index/interfaces/rceaction/) (and therefore passes the context object) in the following order:
1. Setup hooks
2. Validators (sync)
3. Cancel events setup
4. Prompt Generator
5. Preview effects
6. Some arbitrary time in between here, event listeners for cancel events may also be fired, and the predicate will receive the context object as well.
7. Handler

## Extends

- `unknown`

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

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:92

***

### data

> **data**: [`RCEActionData`](/docs/api/reference/index/type-aliases/rceactiondata/)\<`TDataShape`, `TSchema`\>

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:93

***

### forced

> `readonly` **forced**: `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:94

***

### lifecycle

> `readonly` **lifecycle**: [`RCELifecycleMetadata`](/docs/api/reference/index/interfaces/rcelifecyclemetadata/)

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:96

Lifecycle-specific data

***

### request?

> `optional` **request?**: [`RCERequestState`](/docs/api/reference/index/interfaces/rcerequeststate/)

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:98

Request-specific data (copilot mode only)

***

### storage

> **storage**: [`RCEStorage`](/docs/api/reference/index/type-aliases/rcestorage/)

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:106

Ephemeral storage.
Can be used to store data that needs to be accessed across different lifecycle stages of
the action (validation, preview, handler), so that it doesn't need to be regenerated in 
each stage.
This data does not persist across different executions.

***

### updateStatus

> `readonly` **updateStatus**: [`SimplifiedStatusUpdateHandler`](/docs/api/reference/index/type-aliases/simplifiedstatusupdatehandler/)

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:112

Updates the status of the action on the action execution history panel

#### Param

The new status to update to

#### Param

Message to update the status with

## Methods

### clearPreHandlerResources()

> **clearPreHandlerResources**(): `void`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:124

Clears request timers and cancel events before handler execution.
This prevents timers/events from triggering during async handler execution.
Should be called immediately before invoking the handler.

#### Returns

`void`

***

### done()

> **done**(`success`): `void`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:118

Marks this context object as done and destroys it.
In normal circumstances you SHOULD NOT BE CALLING THIS FUNCTION, as RCE already handles this for you.

#### Parameters

##### success

`boolean`

Whether or not the action attempted that spawned this context was successful.

#### Returns

`void`
