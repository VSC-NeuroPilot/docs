---
editUrl: false
next: false
prev: false
title: "substituteMatch"
---

> **substituteMatch**(`match`, `replacement`): `string`

Defined in: @vsc-neuropilot/api-types/dist/utils.d.mts:31

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
