---
editUrl: false
next: false
prev: false
title: "RCECancelEvent"
---

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:135

## Type Parameters

### T

`T` = `any`

## Properties

### disposable

> `readonly` **disposable**: `Disposable`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:143

Event disposable using Disposable VS Code's Disposable class.

***

### event

> `readonly` **event**: `Event`\<`T`\>

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:139

Publicly-exposed event.

***

### logReason?

> `readonly` `optional` **logReason?**: [`ReasonGenerator`](/docs/api/reference/index/type-aliases/reasongenerator/)\<`T`\>

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:151

The reason that will be used to log the cancellation.

***

### reason?

> `readonly` `optional` **reason?**: [`ReasonGenerator`](/docs/api/reference/index/type-aliases/reasongenerator/)\<`T`\>

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:147

The reason that will be used to send to Neuro-sama.

## Methods

### fire()

> **fire**(`data`): `void`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:156

Fires the event.

#### Parameters

##### data

`T`

The data to provide in the fire.

#### Returns

`void`
