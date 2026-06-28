---
editUrl: false
next: false
prev: false
title: "CompanionRegistryError"
---

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:629

This class being thrown means that there was an error with the companion registry.

## Extends

- [`BaseCompanionError`](/docs/api/reference/classes/basecompanionerror/)

## Constructors

### Constructor

> **new CompanionRegistryError**(`error?`, `cause?`): `CompanionRegistryError`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:630

#### Parameters

##### error?

`string`

##### cause?

`string`

#### Returns

`CompanionRegistryError`

#### Overrides

[`BaseCompanionError`](/docs/api/reference/classes/basecompanionerror/).[`constructor`](/docs/api/reference/classes/basecompanionerror/#constructor)

## Properties

### cause?

> `optional` **cause?**: `unknown`

Defined in: .pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

[`BaseCompanionError`](/docs/api/reference/classes/basecompanionerror/).[`cause`](/docs/api/reference/classes/basecompanionerror/#cause)

***

### causedBy

> `readonly` **causedBy**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:615

An explanation of the cause that led to the error.

#### Inherited from

[`BaseCompanionError`](/docs/api/reference/classes/basecompanionerror/).[`causedBy`](/docs/api/reference/classes/basecompanionerror/#causedby)

***

### companion?

> `readonly` `optional` **companion?**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:619

The companion that caused the error.

#### Inherited from

[`BaseCompanionError`](/docs/api/reference/classes/basecompanionerror/).[`companion`](/docs/api/reference/classes/basecompanionerror/#companion)

***

### feature

> `readonly` **feature**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:623

The feature that caused the error.

#### Inherited from

[`BaseCompanionError`](/docs/api/reference/classes/basecompanionerror/).[`feature`](/docs/api/reference/classes/basecompanionerror/#feature)

***

### message

> **message**: `string`

Defined in: .pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`BaseCompanionError`](/docs/api/reference/classes/basecompanionerror/).[`message`](/docs/api/reference/classes/basecompanionerror/#message)

***

### name

> **name**: `string`

Defined in: .pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

[`BaseCompanionError`](/docs/api/reference/classes/basecompanionerror/).[`name`](/docs/api/reference/classes/basecompanionerror/#name)

***

### stack?

> `optional` **stack?**: `string`

Defined in: .pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

[`BaseCompanionError`](/docs/api/reference/classes/basecompanionerror/).[`stack`](/docs/api/reference/classes/basecompanionerror/#stack)

## Methods

### isError()

> `static` **isError**(`error`): `error is Error`

Defined in: .pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.esnext.error.d.ts:23

Indicates whether the argument provided is a built-in Error instance or not.

#### Parameters

##### error

`unknown`

#### Returns

`error is Error`

#### Inherited from

[`BaseCompanionError`](/docs/api/reference/classes/basecompanionerror/).[`isError`](/docs/api/reference/classes/basecompanionerror/#iserror)
