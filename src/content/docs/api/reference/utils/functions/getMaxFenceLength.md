---
editUrl: false
next: false
prev: false
title: "getMaxFenceLength"
---

> **getMaxFenceLength**(`text`): `number`

Defined in: @vsc-neuropilot/api-types/dist/utils.d.mts:80

Searches for the longest fence (at least 3 backticks in a row) in the given text.

Enclosing fences should have at least one backtick more than this, and at least three.

## Parameters

### text

`string`

The text to search for fences in.

## Returns

`number`

The length of the longest fence found in the text, or 0 if no fences were found.

## See

https://spec.commonmark.org/0.12/#fenced-code-blocks
