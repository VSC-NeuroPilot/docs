---
editUrl: false
next: false
prev: false
title: "ActionsEventData"
---

Defined in: [extension/packages/types/src/actions/types.ts:234](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L234)

## Properties

### action

> `readonly` **action**: `string`

Defined in: [extension/packages/types/src/actions/types.ts:238](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L238)

The name of the action whose status was just updated.

***

### executionId

> `readonly` **executionId**: `string`

Defined in: [extension/packages/types/src/actions/types.ts:251](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L251)

A unique ID that is generated for every execution.
Can be used to separate multiple executions of the same action.

***

### message?

> `readonly` `optional` **message?**: `string`

Defined in: [extension/packages/types/src/actions/types.ts:246](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L246)

The message attached to the status update.

***

### status

> `readonly` **status**: [`ActionStatus`](/docs/api/reference/index/type-aliases/actionstatus/)

Defined in: [extension/packages/types/src/actions/types.ts:242](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L242)

The action's current status.
