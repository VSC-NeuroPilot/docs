---
editUrl: false
next: false
prev: false
title: "RCECancelEventInitializer"
---

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:378

## Type Parameters

### T

`T` = `any`

## Properties

### events?

> `optional` **events?**: \[`Event`\<`T`\>, ((`data`) => `boolean` \| `Promise`\<`boolean`\>) \| `null`\][]

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:384

Events that will trigger the cancellation. If the predicate is null, the event will always trigger the cancellation.

***

### logReason?

> `optional` **logReason?**: [`ReasonGenerator`](/docs/api/reference/type-aliases/reasongenerator/)\<`T`\>

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:382

The reason that will be used to log the cancellation.

***

### reason?

> `optional` **reason?**: [`ReasonGenerator`](/docs/api/reference/type-aliases/reasongenerator/)\<`T`\>

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:380

The reason that will be used to send to Neuro-sama.
