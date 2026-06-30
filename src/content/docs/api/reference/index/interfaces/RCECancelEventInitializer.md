---
editUrl: false
next: false
prev: false
title: "RCECancelEventInitializer"
---

Defined in: [extension/packages/types/src/actions/classes.ts:128](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L128)

## Type Parameters

### T

`T` = `any`

## Properties

### events?

> `optional` **events?**: \[`Event`\<`T`\>, ((`data`) => `boolean` \| `Thenable`\<`boolean`\>) \| `null`\][]

Defined in: [extension/packages/types/src/actions/classes.ts:134](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L134)

Events that will trigger the cancellation. If the predicate is null, the event will always trigger the cancellation.

***

### logReason?

> `optional` **logReason?**: [`ReasonGenerator`](/docs/api/reference/index/type-aliases/reasongenerator/)\<`T`\>

Defined in: [extension/packages/types/src/actions/classes.ts:132](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L132)

The reason that will be used to log the cancellation.

***

### reason?

> `optional` **reason?**: [`ReasonGenerator`](/docs/api/reference/index/type-aliases/reasongenerator/)\<`T`\>

Defined in: [extension/packages/types/src/actions/classes.ts:130](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L130)

The reason that will be used to send to Neuro-sama.
