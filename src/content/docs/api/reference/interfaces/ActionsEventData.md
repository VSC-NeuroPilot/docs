---
editUrl: false
next: false
prev: false
title: "ActionsEventData"
---

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:190

## Properties

### action

> `readonly` **action**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:194

The name of the action whose status was just updated.

***

### executionId

> `readonly` **executionId**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:207

A unique ID that is generated for every execution.
Can be used to separate multiple executions of the same action.

***

### message?

> `readonly` `optional` **message?**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:202

The message attached to the status update.

***

### status

> `readonly` **status**: [`ActionStatus`](/docs/api/reference/type-aliases/actionstatus/)

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:198

The action's current status.
