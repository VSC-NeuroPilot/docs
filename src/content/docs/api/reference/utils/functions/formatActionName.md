---
editUrl: false
next: false
prev: false
title: "formatActionName"
---

> **formatActionName**(`name`): `string`

Defined in: @vsc-neuropilot/api-types/dist/utils.d.mts:51

Turn an arbitrary string into a valid action name.

Converts the string to snake_case by replacing any series of non-alphanumeric characters into an underscore.
This is NOT a unique name generator, the same action name may be generated from different inputs.

## Parameters

### name

`string`

The name to convert. Should contain at least one alphanumeric character.

## Returns

`string`
