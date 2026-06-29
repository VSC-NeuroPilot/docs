---
editUrl: false
next: false
prev: false
title: "ActionValidationResult"
---

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:326

The result of attempting to execute an action client-side.

## Properties

### historyNote?

> `optional` **historyNote?**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:340

The reason to show on action panel.

***

### message?

> `optional` **message?**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:336

The message to send Neuro.
If success is `true`, this is optional, otherwise it should be an error message.

***

### retry?

> `optional` **retry?**: `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:338

If `true`, Neuro should retry the action if it was forced.

***

### success

> **success**: `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:331

If `false`, the action handler is not executed.
Warning: This is *not* the success parameter of the action result.
