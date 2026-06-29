---
editUrl: false
next: false
prev: false
title: "ActionForceParams"
---

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:169

The parameters for forcing actions.

## See

NeuroClient.forceActions for most field documentation.

## Properties

### actionNames

> **actionNames**: `string`[]

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:173

***

### ephemeral\_context?

> `optional` **ephemeral\_context?**: `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:172

***

### overridePermissions?

> `optional` **overridePermissions?**: [`COPILOT`](/docs/api/reference/index/enumerations/permissionlevel/#copilot) \| [`AUTOPILOT`](/docs/api/reference/index/enumerations/permissionlevel/#autopilot) \| `Record`\<`string`, [`COPILOT`](/docs/api/reference/index/enumerations/permissionlevel/#copilot) \| [`AUTOPILOT`](/docs/api/reference/index/enumerations/permissionlevel/#autopilot)\>

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:183

If specified, execute all actions with the specified permission level instead of the current one.
If an object is provided, the keys are action names and the values are the permission levels to use for those actions.
If an action is not included in the object, it will not have its permission overridden.

Note that at the moment, action forces will not be retried if the permission is [PermissionLevel.COPILOT](/docs/api/reference/index/enumerations/permissionlevel/#copilot)
or if the chosen action's handler is async.

***

### priority?

> `optional` **priority?**: `any`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:174

***

### query

> **query**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:171

***

### state?

> `optional` **state?**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:170
