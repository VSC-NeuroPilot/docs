---
editUrl: false
next: false
prev: false
title: "RCECancelEvent"
---

Defined in: [extension/packages/types/src/actions/classes.ts:137](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L137)

## Type Parameters

### T

`T` = `any`

## Properties

### disposable

> `readonly` **disposable**: `Disposable`

Defined in: [extension/packages/types/src/actions/classes.ts:146](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L146)

Event disposable using Disposable VS Code's Disposable class.

***

### event

> `readonly` **event**: `Event`\<`T`\>

Defined in: [extension/packages/types/src/actions/classes.ts:141](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L141)

Publicly-exposed event.

***

### logReason?

> `readonly` `optional` **logReason?**: [`ReasonGenerator`](/docs/api/reference/index/type-aliases/reasongenerator/)\<`T`\>

Defined in: [extension/packages/types/src/actions/classes.ts:156](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L156)

The reason that will be used to log the cancellation.

***

### reason?

> `readonly` `optional` **reason?**: [`ReasonGenerator`](/docs/api/reference/index/type-aliases/reasongenerator/)\<`T`\>

Defined in: [extension/packages/types/src/actions/classes.ts:151](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L151)

The reason that will be used to send to Neuro-sama.

## Methods

### fire()

> **fire**(`data`): `void`

Defined in: [extension/packages/types/src/actions/classes.ts:162](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L162)

Fires the event.

#### Parameters

##### data

`T`

The data to provide in the fire.

#### Returns

`void`
