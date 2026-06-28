---
editUrl: false
next: false
prev: false
title: "RCEContext"
---

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:319

RCE executes the methods of [RCEAction](/docs/api/reference/interfaces/rceaction/) (and therefore passes the context object) in the following order:
1. Setup hooks
2. Validators (sync)
3. Cancel events setup
4. Prompt Generator
5. Preview effects
6. Some arbitrary time in between here, event listeners for cancel events may also be fired, and the predicate will receive the context object as well.
7. Handler

## Extends

- [`ActionForcePriorityEnum`](/docs/api/reference/variables/actionforcepriorityenum/)

## Type Parameters

### T

`T` *extends* [`ActionForcePriorityEnum`](/docs/api/reference/variables/actionforcepriorityenum/) \| `undefined` = `any`

### K

`K` = `any`

## Constructors

### Constructor

> **new RCEContext**\<`T`, `K`\>(): `RCEContext`\<`T`, `K`\>

#### Returns

`RCEContext`\<`T`, `K`\>

#### Inherited from

`Disposable.constructor`

## Properties

### action

> **action**: [`RCEAction`](/docs/api/reference/interfaces/rceaction/)\<`T`, `K`\>

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:333

The RCE action whose name corresponds to the action data Neuro sent in.

#### See

[RCEAction](/docs/api/reference/interfaces/rceaction/)

***

### createdAt

> **createdAt**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:323

When the execution context was created

***

### data

> **data**: `ActionData`\<`T`\>

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:328

The action data received from Neuro.

#### See

[ActionData](/docs/api/reference/variables/actionforcepriorityenum/)

***

### forced

> `readonly` **forced**: `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:337

Whether or not the action was forced from an action force.

***

### lifecycle

> `readonly` **lifecycle**: [`RCELifecycleMetadata`](/docs/api/reference/interfaces/rcelifecyclemetadata/)

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:342

Metadata specific to this context lifecycle.

#### See

[lifecycle metadata interface](/docs/api/reference/interfaces/rcelifecyclemetadata/)

***

### name

> **name**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:321

The name of the action currently being executed

***

### request?

> `optional` **request?**: [`RCERequestState`](/docs/api/reference/interfaces/rcerequeststate/)

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:347

Data pertaining to the request for the execution.
Only populated in Copilot node.

***

### storage?

> `optional` **storage?**: [`RCEStorage`](/docs/api/reference/type-aliases/rcestorage/)

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:355

Ephemeral storage.
Can be used to store data that needs to be accessed across different lifecycle stages of
the action (validation, preview, handler), so that it doesn't need to be regenerated in 
each stage.
This data does not persist across different executions.

***

### updateStatus

> `readonly` **updateStatus**: [`SimplifiedStatusUpdateHandler`](/docs/api/reference/type-aliases/simplifiedstatusupdatehandler/)

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:361

Updates the status of the action on the action execution history panel

#### Param

The new status to update to

#### Param

Message to update the status with

## Methods

### clearPreHandlerResources()

> **clearPreHandlerResources**(): `void`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:373

Clears request timers and cancel events before handler execution.
This prevents timers/events from triggering during async handler execution.
You usually shouldn't need to call this, but there is no harm in doing so one or more times.

#### Returns

`void`

***

### done()

> **done**(`success`): `void`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:367

Marks this context object as done and destroys it.
In normal circumstances you SHOULD NOT BE CALLING THIS FUNCTION, as RCE already handles this for you.

#### Parameters

##### success

`boolean`

Whether or not the action attempted that spawned this context was successful.

#### Returns

`void`
