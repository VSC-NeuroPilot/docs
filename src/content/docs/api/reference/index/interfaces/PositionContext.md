---
editUrl: false
next: false
prev: false
title: "PositionContext"
---

Defined in: [extension/packages/types/src/actions/types.ts:311](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L311)

## Properties

### contextAfter

> **contextAfter**: `string`

Defined in: [extension/packages/types/src/actions/types.ts:315](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L315)

The context after the range, or an empty string if the cursor is not defined.

***

### contextBefore

> **contextBefore**: `string`

Defined in: [extension/packages/types/src/actions/types.ts:313](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L313)

The context before the cursor, or the entire context if the cursor is not defined.

***

### cursorDefined

> **cursorDefined**: `boolean`

Defined in: [extension/packages/types/src/actions/types.ts:323](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L323)

`true` if the cursor is defined and inside the context, `false` otherwise.

***

### endLine

> **endLine**: `number`

Defined in: [extension/packages/types/src/actions/types.ts:319](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L319)

The zero-based line where [contextBefore](/docs/api/reference/index/interfaces/positioncontext/#contextafter) ends.

***

### startLine

> **startLine**: `number`

Defined in: [extension/packages/types/src/actions/types.ts:317](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L317)

The zero-based line where [contextBefore](/docs/api/reference/index/interfaces/positioncontext/#contextbefore) starts.

***

### totalLines

> **totalLines**: `number`

Defined in: [extension/packages/types/src/actions/types.ts:321](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L321)

The number of total lines in the file.
