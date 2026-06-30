---
editUrl: false
next: false
prev: false
title: "ActionValidationResult"
---

Defined in: [extension/packages/types/src/actions/types.ts:203](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L203)

The result of attempting to execute an action client-side.

## Properties

### historyNote?

> `optional` **historyNote?**: `string`

Defined in: [extension/packages/types/src/actions/types.ts:217](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L217)

The reason to show on action panel.

***

### message?

> `optional` **message?**: `string`

Defined in: [extension/packages/types/src/actions/types.ts:213](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L213)

The message to send Neuro.
If success is `true`, this is optional, otherwise it should be an error message.

***

### retry?

> `optional` **retry?**: `boolean`

Defined in: [extension/packages/types/src/actions/types.ts:215](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L215)

If `true`, Neuro should retry the action if it was forced.

***

### success

> **success**: `boolean`

Defined in: [extension/packages/types/src/actions/types.ts:208](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L208)

If `false`, the action handler is not executed.
Warning: This is *not* the success parameter of the action result.
