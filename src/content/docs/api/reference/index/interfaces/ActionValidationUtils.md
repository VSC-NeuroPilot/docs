---
editUrl: false
next: false
prev: false
title: "ActionValidationUtils"
---

Defined in: [extension/packages/types/src/index.ts:36](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L36)

## Methods

### failure()

> **failure**(`message`, `historyNote?`): [`ActionValidationResult`](/docs/api/reference/index/interfaces/actionvalidationresult/)

Defined in: [extension/packages/types/src/index.ts:50](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L50)

Function to return an object that indicates handler failure.

#### Parameters

##### message

`string`

The message that will be sent to Neuro

##### historyNote?

`string`

If supplied, an action status update with its status set to success will be fired with the note. Otherwise, assumes that you've already done that yourself.

#### Returns

[`ActionValidationResult`](/docs/api/reference/index/interfaces/actionvalidationresult/)

An object with a failed validation result

***

### retry()

> **retry**(`message`, `historyNote?`): [`ActionValidationResult`](/docs/api/reference/index/interfaces/actionvalidationresult/)

Defined in: [extension/packages/types/src/index.ts:57](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L57)

Function to return an object that indicates handler failure.

#### Parameters

##### message

`string`

The message that will be sent to Neuro

##### historyNote?

`string`

If supplied, an action status update with its status set to success will be fired with the note. Otherwise, assumes that you've already done that yourself.

#### Returns

[`ActionValidationResult`](/docs/api/reference/index/interfaces/actionvalidationresult/)

An object with a failed validation result

***

### success()

> **success**(`message?`, `historyNote?`): [`ActionValidationResult`](/docs/api/reference/index/interfaces/actionvalidationresult/)

Defined in: [extension/packages/types/src/index.ts:43](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L43)

Function to return an object that indicates handler success.

#### Parameters

##### message?

`string`

The message that will be sent to Neuro

##### historyNote?

`string`

If supplied, an action status update with its status set to success will be fired with the note. Otherwise, assumes that you've already done that yourself.

#### Returns

[`ActionValidationResult`](/docs/api/reference/index/interfaces/actionvalidationresult/)

An object with a successful validation result
