---
editUrl: false
next: false
prev: false
title: "Contributions"
---

Defined in: [extension/packages/types/src/companions/enum.ts:4](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/enum.ts#L4)

Const enum for companion contributions

## Enumeration Members

### ACTIONS\_FORCE

> **ACTIONS\_FORCE**: `"actions:force"`

Defined in: [extension/packages/types/src/companions/enum.ts:28](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/enum.ts#L28)

Allows forcing actions from Neuro.
You do not need either [actions:manage](/docs/api/reference/index/enumerations/contributions/#actions_manage) or [actions:manage\_others](/docs/api/reference/index/enumerations/contributions/#actions_manage_others) to force actions.

***

### ACTIONS\_INJECT

> **ACTIONS\_INJECT**: `"actions:inject"`

Defined in: [extension/packages/types/src/companions/enum.ts:19](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/enum.ts#L19)

Allows injecting into other companions' actions.
This allows you to change all properties on that action (except for `name` and `source`).

***

### ACTIONS\_MANAGE

> **ACTIONS\_MANAGE**: `"actions:manage"`

Defined in: [extension/packages/types/src/companions/enum.ts:9](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/enum.ts#L9)

Allows you to add and remove your own actions from the actions registry.
Also allows you to register and unregister them on-demand.

***

### ACTIONS\_MANAGE\_OTHERS

> **ACTIONS\_MANAGE\_OTHERS**: `"actions:manage_others"`

Defined in: [extension/packages/types/src/companions/enum.ts:14](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/enum.ts#L14)

Allows you to register and unregister other companions' actions.
Does NOT allow you to add or remove them from the registry.

***

### ACTIONS\_PROCESS

> **ACTIONS\_PROCESS**: `"actions:process"`

Defined in: [extension/packages/types/src/companions/enum.ts:23](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/enum.ts#L23)

Allows subscribing to when an action status is changed.

***

### CHANGELOG

> **CHANGELOG**: `"changelog"`

Defined in: [extension/packages/types/src/companions/enum.ts:32](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/enum.ts#L32)

Allows adding changelogs to the `read_changelog` command, so Neuro can query it on-demand.

***

### CONTEXT

> **CONTEXT**: `"context"`

Defined in: [extension/packages/types/src/companions/enum.ts:36](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/enum.ts#L36)

Allows sending context to Neuro at any time.

***

### CURSOR\_GET

> **CURSOR\_GET**: `"cursor:get"`

Defined in: [extension/packages/types/src/companions/enum.ts:40](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/enum.ts#L40)

Allows you to get the virtual cursor position & subscribe to when it gets changed.

***

### CURSOR\_SET

> **CURSOR\_SET**: `"cursor:set"`

Defined in: [extension/packages/types/src/companions/enum.ts:45](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/enum.ts#L45)

Allows you to set the position of the virtual cursor.
This does NOT implicitly grant [cursor:get](/docs/api/reference/index/enumerations/contributions/#cursor_get) and will not let you view the cursor position.

***

### IMAGES

> **IMAGES**: `"images"`

Defined in: [extension/packages/types/src/companions/enum.ts:49](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/enum.ts#L49)

Currently unused.
