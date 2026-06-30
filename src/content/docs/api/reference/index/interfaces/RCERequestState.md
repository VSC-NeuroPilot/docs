---
editUrl: false
next: false
prev: false
title: "RCERequestState"
---

Defined in: [extension/packages/types/src/actions/classes.ts:33](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L33)

## Properties

### attachNotification

> **attachNotification**: (`progress`) => `Promise`\<`void`\>

Defined in: [extension/packages/types/src/actions/classes.ts:48](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L48)

The function to report progress on the notification.
Should not be necessary to call in most circumstances.

#### Parameters

##### progress

`Progress`\<\{ `increment?`: `number`; `message?`: `string`; \}\>

A Progress object which reports updates for the RCE request.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the request is resolved in some way.

***

### interval?

> `optional` **interval?**: `Timeout` \| `null`

Defined in: [extension/packages/types/src/actions/classes.ts:61](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L61)

The interval timeout that reports progress to VS Code.

***

### notificationVisible

> **notificationVisible**: `boolean`

Defined in: [extension/packages/types/src/actions/classes.ts:41](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L41)

Whether or not the notification is visible on screen.

***

### prompt

> **prompt**: `string`

Defined in: [extension/packages/types/src/actions/classes.ts:37](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L37)

The prompt used for the request. Constructed from [the action's promptGenerator](/docs/api/reference/index/interfaces/rceaction/#promptgenerator).

***

### resolve

> **resolve**: () => `void`

Defined in: [extension/packages/types/src/actions/classes.ts:53](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L53)

Resolves the request, clearing timers and resources used by this object.
Should not be necessary to call in most circumstances.

#### Returns

`void`

***

### resolved

> **resolved**: `boolean`

Defined in: [extension/packages/types/src/actions/classes.ts:57](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L57)

Whether or not the request has been resolved.

***

### timeout?

> `optional` **timeout?**: `Timeout` \| `null`

Defined in: [extension/packages/types/src/actions/classes.ts:65](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/classes.ts#L65)

The timeout object that times out the request itself.
