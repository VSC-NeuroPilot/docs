---
editUrl: false
next: false
prev: false
title: "BaseCompanionError"
---

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:265

The base class for all errors caused by companions.
Usually this class is extended by other classes that are thrown by NeuroPilot,
but there may also be cases where this class is used directly.

If you're wanting to ensure that errors are coming from NeuroPilot, simply check if the error is an instance of this class.

## Extends

- `Error`

## Extended by

- [`CompanionRegistryError`](/docs/api/reference/index/classes/companionregistryerror/)
- [`PermissionError`](/docs/api/reference/index/classes/permissionerror/)

## Constructors

### Constructor

> **new BaseCompanionError**(`feature`, `error?`, `cause?`, `companion?`): `BaseCompanionError`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:278

#### Parameters

##### feature

`string`

##### error?

`string`

##### cause?

`string`

##### companion?

`string`

#### Returns

`BaseCompanionError`

#### Overrides

`Error.constructor`

## Properties

### cause?

> `optional` **cause?**: `unknown`

Defined in: .pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

#### Inherited from

`Error.cause`

***

### causedBy

> `readonly` **causedBy**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:269

An explanation of the cause that led to the error.

***

### companion?

> `readonly` `optional` **companion?**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:273

The companion that caused the error.

***

### feature

> `readonly` **feature**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:277

The feature that caused the error.

***

### message

> **message**: `string`

Defined in: .pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1075

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

Defined in: .pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1074

#### Inherited from

`Error.name`

***

### stack?

> `optional` **stack?**: `string`

Defined in: .pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.stack`

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

`Error.isError`
