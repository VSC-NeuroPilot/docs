---
editUrl: false
next: false
prev: false
title: "RCERequestState"
---

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:44

## Properties

### attachNotification

> **attachNotification**: (`progress`) => `Promise`\<`void`\>

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:59

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

> `optional` **interval?**: `any`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:75

The interval timeout that reports progress to VS Code.

***

### notificationVisible

> **notificationVisible**: `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:52

Whether or not the notification is visible on screen.

***

### prompt

> **prompt**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:48

The prompt used for the request. Constructed from [the action's promptGenerator](/docs/api/reference/index/interfaces/rceaction/#promptgenerator).

***

### resolve

> **resolve**: () => `void`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:67

Resolves the request, clearing timers and resources used by this object.
Should not be necessary to call in most circumstances.

#### Returns

`void`

***

### resolved

> **resolved**: `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:71

Whether or not the request has been resolved.

***

### timeout?

> `optional` **timeout?**: `any`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:79

The timeout object that times out the request itself.
