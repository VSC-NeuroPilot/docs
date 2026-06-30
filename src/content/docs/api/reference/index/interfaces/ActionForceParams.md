---
editUrl: false
next: false
prev: false
title: "ActionForceParams"
---

Defined in: [extension/packages/types/src/actions/types.ts:16](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L16)

The parameters for forcing actions.

## See

NeuroClient.forceActions for most field documentation.

## Properties

### actionNames

> **actionNames**: `string`[]

Defined in: [extension/packages/types/src/actions/types.ts:20](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L20)

***

### ephemeral\_context?

> `optional` **ephemeral\_context?**: `boolean`

Defined in: [extension/packages/types/src/actions/types.ts:19](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L19)

***

### overridePermissions?

> `optional` **overridePermissions?**: [`COPILOT`](/docs/api/reference/index/enumerations/permissionlevel/#copilot) \| [`AUTOPILOT`](/docs/api/reference/index/enumerations/permissionlevel/#autopilot) \| `Record`\<`string`, [`COPILOT`](/docs/api/reference/index/enumerations/permissionlevel/#copilot) \| [`AUTOPILOT`](/docs/api/reference/index/enumerations/permissionlevel/#autopilot)\>

Defined in: [extension/packages/types/src/actions/types.ts:30](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L30)

If specified, execute all actions with the specified permission level instead of the current one.
If an object is provided, the keys are action names and the values are the permission levels to use for those actions.
If an action is not included in the object, it will not have its permission overridden.

Note that at the moment, action forces will not be retried if the permission is [PermissionLevel.COPILOT](/docs/api/reference/index/enumerations/permissionlevel/#copilot)
or if the chosen action's handler is async.

***

### priority?

> `optional` **priority?**: `ActionForcePriorityEnum`

Defined in: [extension/packages/types/src/actions/types.ts:21](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L21)

***

### query

> **query**: `string`

Defined in: [extension/packages/types/src/actions/types.ts:18](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L18)

***

### state?

> `optional` **state?**: `string`

Defined in: [extension/packages/types/src/actions/types.ts:17](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L17)
