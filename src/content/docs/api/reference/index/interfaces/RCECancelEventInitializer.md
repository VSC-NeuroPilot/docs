---
editUrl: false
next: false
prev: false
title: "RCECancelEventInitializer"
---

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:127

## Type Parameters

### T

`T` = `any`

## Properties

### events?

> `optional` **events?**: \[`Event`\<`T`\>, ((`data`) => `any`) \| `null`\][]

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:133

Events that will trigger the cancellation. If the predicate is null, the event will always trigger the cancellation.

***

### logReason?

> `optional` **logReason?**: [`ReasonGenerator`](/docs/api/reference/index/type-aliases/reasongenerator/)\<`T`\>

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:131

The reason that will be used to log the cancellation.

***

### reason?

> `optional` **reason?**: [`ReasonGenerator`](/docs/api/reference/index/type-aliases/reasongenerator/)\<`T`\>

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:129

The reason that will be used to send to Neuro-sama.
