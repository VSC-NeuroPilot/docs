---
editUrl: false
next: false
prev: false
title: "CompanionRegistryError"
---

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:283

This class being thrown means that there was an error with the companion registry.

## Extends

- [`BaseCompanionError`](/docs/api/reference/index/classes/basecompanionerror/)

## Constructors

### Constructor

> **new CompanionRegistryError**(`error?`, `cause?`): `CompanionRegistryError`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:284

#### Parameters

##### error?

`string`

##### cause?

`string`

#### Returns

`CompanionRegistryError`

#### Overrides

[`BaseCompanionError`](/docs/api/reference/index/classes/basecompanionerror/).[`constructor`](/docs/api/reference/index/classes/basecompanionerror/#constructor)

## Properties

### cause?

> `optional` **cause?**: `unknown`

Defined in: .pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

#### Inherited from

[`BaseCompanionError`](/docs/api/reference/index/classes/basecompanionerror/).[`cause`](/docs/api/reference/index/classes/basecompanionerror/#cause)

***

### causedBy

> `readonly` **causedBy**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:269

An explanation of the cause that led to the error.

#### Inherited from

[`BaseCompanionError`](/docs/api/reference/index/classes/basecompanionerror/).[`causedBy`](/docs/api/reference/index/classes/basecompanionerror/#causedby)

***

### companion?

> `readonly` `optional` **companion?**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:273

The companion that caused the error.

#### Inherited from

[`BaseCompanionError`](/docs/api/reference/index/classes/basecompanionerror/).[`companion`](/docs/api/reference/index/classes/basecompanionerror/#companion)

***

### feature

> `readonly` **feature**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:277

The feature that caused the error.

#### Inherited from

[`BaseCompanionError`](/docs/api/reference/index/classes/basecompanionerror/).[`feature`](/docs/api/reference/index/classes/basecompanionerror/#feature)

***

### message

> **message**: `string`

Defined in: .pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1075

#### Inherited from

[`BaseCompanionError`](/docs/api/reference/index/classes/basecompanionerror/).[`message`](/docs/api/reference/index/classes/basecompanionerror/#message)

***

### name

> **name**: `string`

Defined in: .pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1074

#### Inherited from

[`BaseCompanionError`](/docs/api/reference/index/classes/basecompanionerror/).[`name`](/docs/api/reference/index/classes/basecompanionerror/#name)

***

### stack?

> `optional` **stack?**: `string`

Defined in: .pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

[`BaseCompanionError`](/docs/api/reference/index/classes/basecompanionerror/).[`stack`](/docs/api/reference/index/classes/basecompanionerror/#stack)

## Methods

### isError()

> `static` **isError**(`error`): `error is Error`

Defined in: .pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.esnext.error.d.ts:21

Indicates whether the argument provided is a built-in Error instance or not.

#### Parameters

##### error

`unknown`

#### Returns

`error is Error`

#### Inherited from

[`BaseCompanionError`](/docs/api/reference/index/classes/basecompanionerror/).[`isError`](/docs/api/reference/index/classes/basecompanionerror/#iserror)
