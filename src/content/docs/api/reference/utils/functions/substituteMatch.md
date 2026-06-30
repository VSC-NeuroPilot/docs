---
editUrl: false
next: false
prev: false
title: "substituteMatch"
---

> **substituteMatch**(`match`, `replacement`): `string`

Defined in: [extension/packages/types/src/utils/index.ts:50](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/utils/index.ts#L50)

Return the string that would be inserted for the specified match.

Similar to String.replace, but returns the string instead of replacing directly.

## Parameters

### match

`RegExpExecArray`

A single match returned by matching a regular expression.

### replacement

`string`

The replacement string, which can contain substitutions.
Supports JavaScript-style and .NET-style substitutions.
The substitutions `` $` ``, `$'` and `$_` are not supported.

## Returns

`string`

The substituted string.

## Throws

Error if the substitution is invalid or if the capture group does not exist.
