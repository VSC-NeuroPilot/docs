---
editUrl: false
next: false
prev: false
title: "ActionsEventData"
---

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:349

## Properties

### action

> `readonly` **action**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:353

The name of the action whose status was just updated.

***

### executionId

> `readonly` **executionId**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:366

A unique ID that is generated for every execution.
Can be used to separate multiple executions of the same action.

***

### message?

> `readonly` `optional` **message?**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:361

The message attached to the status update.

***

### status

> `readonly` **status**: [`ActionStatus`](/docs/api/reference/index/type-aliases/actionstatus/)

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:357

The action's current status.
