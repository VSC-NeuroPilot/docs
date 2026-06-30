---
editUrl: false
next: false
prev: false
title: "PositionContextOptions"
---

Defined in: [extension/packages/types/src/actions/types.ts:327](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L327)

## Properties

### cursorPosition?

> `optional` **cursorPosition?**: `Position`

Defined in: [extension/packages/types/src/actions/types.ts:329](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L329)

The position of the cursor in the document.

***

### position?

> `optional` **position?**: `Position`

Defined in: [extension/packages/types/src/actions/types.ts:331](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L331)

The start of the range around which to get the context. Defaults to the start of the document if not provided.

***

### position2?

> `optional` **position2?**: `Position`

Defined in: [extension/packages/types/src/actions/types.ts:333](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L333)

The end of the range around which to get the context. If not provided, defaults to [position](/docs/api/reference/index/interfaces/positioncontextoptions/#position), or the end of the document if [position](/docs/api/reference/index/interfaces/positioncontextoptions/#position) is not provided.
