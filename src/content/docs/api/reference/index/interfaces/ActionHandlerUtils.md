---
editUrl: false
next: false
prev: false
title: "ActionHandlerUtils"
---

Defined in: [extension/packages/types/src/index.ts:60](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L60)

## Methods

### failure()

> **failure**(`message`, `historyNote?`): [`ActionHandlerResult`](/docs/api/reference/index/interfaces/actionhandlerresult/)

Defined in: [extension/packages/types/src/index.ts:78](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L78)

Create an action result with the specified message.
This should be used if the action failed, but should not be retried, e.g.
if the source of the error is out of Neuro's control or to prevent a retry
loop in case the action is not applicable in the current state.

#### Parameters

##### message

`string`

The message to send to Neuro. This should explain, if possible, why the action failed. If omitted, will just send "Action failed.".

##### historyNote?

`string`

A note for the history panel.

#### Returns

[`ActionHandlerResult`](/docs/api/reference/index/interfaces/actionhandlerresult/)

A successful action result with the specified message.

***

### retry()

> **retry**(`message`, `historyNote?`): [`ActionHandlerResult`](/docs/api/reference/index/interfaces/actionhandlerresult/)

Defined in: [extension/packages/types/src/index.ts:85](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L85)

Create an action result that tells Neuro to retry the forced action.

#### Parameters

##### message

`string`

The message to send to Neuro. This should contain the information required to fix the mistake.

##### historyNote?

`string`

A note for the history panel.

#### Returns

[`ActionHandlerResult`](/docs/api/reference/index/interfaces/actionhandlerresult/)

A failed action result with the specified message.

***

### success()

> **success**(`message?`, `historyNote?`): [`ActionHandlerResult`](/docs/api/reference/index/interfaces/actionhandlerresult/)

Defined in: [extension/packages/types/src/index.ts:68](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L68)

Create a successful action result.
This should be used if all parameters have been parsed correctly.

#### Parameters

##### message?

`string`

An optional message to send to Neuro.

##### historyNote?

`string`

A note for the history panel.

#### Returns

[`ActionHandlerResult`](/docs/api/reference/index/interfaces/actionhandlerresult/)

A successful action result.
