---
editUrl: false
next: false
prev: false
title: "Contributions"
---

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:419

Const enum for companion contributions

## Enumeration Members

### ACTIONS\_FORCE

> **ACTIONS\_FORCE**: `"actions:force"`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:443

Allows forcing actions from Neuro.
You do not need either [actions:manage](/docs/api/reference/enumerations/contributions/#actions_manage) or [actions:manage\_others](/docs/api/reference/enumerations/contributions/#actions_manage_others) to force actions.

***

### ACTIONS\_INJECT

> **ACTIONS\_INJECT**: `"actions:inject"`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:434

Allows injecting into other companions' actions.
This allows you to change all properties on that action (except for `name` and `source`).

***

### ACTIONS\_MANAGE

> **ACTIONS\_MANAGE**: `"actions:manage"`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:424

Allows you to add and remove your own actions from the actions registry.
Also allows you to register and unregister them on-demand.

***

### ACTIONS\_MANAGE\_OTHERS

> **ACTIONS\_MANAGE\_OTHERS**: `"actions:manage_others"`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:429

Allows you to register and unregister other companions' actions.
Does NOT allow you to add or remove them from the registry.

***

### ACTIONS\_PROCESS

> **ACTIONS\_PROCESS**: `"actions:process"`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:438

Allows subscribing to when an action status is changed.

***

### CHANGELOG

> **CHANGELOG**: `"changelog"`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:447

Allows adding changelogs to the `read_changelog` command, so Neuro can query it on-demand.

***

### CONTEXT

> **CONTEXT**: `"context"`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:451

Allows sending context to Neuro at any time.

***

### CURSOR\_GET

> **CURSOR\_GET**: `"cursor:get"`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:455

Allows you to get the virtual cursor position & subscribe to when it gets changed.

***

### CURSOR\_SET

> **CURSOR\_SET**: `"cursor:set"`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:460

Allows you to set the position of the virtual cursor.
This does NOT implicitly grant [cursor:get](/docs/api/reference/enumerations/contributions/#cursor_get) and will not let you view the cursor position.

***

### IMAGES

> **IMAGES**: `"images"`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:464

Currently unused.
