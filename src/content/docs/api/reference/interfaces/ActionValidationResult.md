---
editUrl: false
next: false
prev: false
title: "ActionValidationResult"
---

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:166

The result of attempting to execute an action client-side.

## Properties

### historyNote?

> `optional` **historyNote?**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:180

The reason to show on action panel.

***

### message?

> `optional` **message?**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:176

The message to send Neuro.
If success is `true`, this is optional, otherwise it should be an error message.

***

### retry?

> `optional` **retry?**: `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:178

If `true`, Neuro should retry the action if it was forced.

***

### success

> **success**: `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:171

If `false`, the action handler is not executed.
Warning: This is *not* the success parameter of the action result.
