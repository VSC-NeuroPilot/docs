---
editUrl: false
next: false
prev: false
title: "RCECancelEvent"
---

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:386

## Type Parameters

### T

`T` = `any`

## Constructors

### Constructor

> **new RCECancelEvent**\<`T`\>(`init?`): `RCECancelEvent`\<`T`\>

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:412

Creates an instance of RCECancelEvent.

#### Parameters

##### init?

[`RCECancelEventInitializer`](/docs/api/reference/interfaces/rcecanceleventinitializer/)\<`T`\>

Initialization parameters.

#### Returns

`RCECancelEvent`\<`T`\>

## Properties

### disposable

> `readonly` **disposable**: `Disposable`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:394

Event disposable using [VS Code's Disposable class](/docs/api/reference/variables/actionforcepriorityenum/).

***

### event

> `readonly` **event**: `Event`\<`T`\>

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:390

Publicly-exposed event.

***

### logReason?

> `readonly` `optional` **logReason?**: [`ReasonGenerator`](/docs/api/reference/type-aliases/reasongenerator/)\<`T`\>

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:402

The reason that will be used to log the cancellation.

***

### reason?

> `readonly` `optional` **reason?**: [`ReasonGenerator`](/docs/api/reference/type-aliases/reasongenerator/)\<`T`\>

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:398

The reason that will be used to send to Neuro-sama.

## Methods

### fire()

> **fire**(`data`): `void`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:407

Fires the event.

#### Parameters

##### data

`T`

The data to provide in the fire.

#### Returns

`void`
