---
editUrl: false
next: false
prev: false
title: "RCEAction"
---

Defined in: [extension/packages/types/src/actions/types.ts:52](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L52)

ActionHandler to use with constants for records of actions and their corresponding handlers.

You may optionally type the interface if you are sure the action will take a specific form.

## Extends

- `Omit`\<`Action`, `"schema"`\>

## Type Parameters

### TData

`TData` *extends* `unknown` \| `undefined` = `undefined`

### TSchema

`TSchema` *extends* [`SchemaTypes`](/docs/api/reference/index/type-aliases/schematypes/) = [`SchemaTypes`](/docs/api/reference/index/type-aliases/schematypes/)

### TDataShape

`TDataShape` *extends* `unknown` \| `undefined` = `TData` *extends* `undefined` ? [`InferDataFromSchema`](/docs/api/reference/index/type-aliases/inferdatafromschema/)\<`TSchema`\> : `TData`

## Properties

### autoRegister?

> `optional` **autoRegister?**: `boolean`

Defined in: [extension/packages/types/src/actions/types.ts:130](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L130)

Whether to automatically register the action with Neuro if all conditions are met.
Defaults to true.

If `false`, the RCE system will never automatically register the action, and only automatically unregister if the user disables permission.
You need to call [CompanionAPI.registerAction](/docs/api/reference/index/interfaces/companionapi/#registeraction) or [CompanionAPI.unregisterAction](/docs/api/reference/index/interfaces/companionapi/#unregisteraction) manually.

If `true`, the action will be automatically registered and unregistered based on the [registerCondition](/docs/api/reference/index/interfaces/rceaction/#registercondition) and current permission settings.
However, the conditions are not watched, so if the conditions change, the action may not be immediately registered or unregistered.
Call [CompanionAPI.reregisterAllActions](/docs/api/reference/index/interfaces/companionapi/#reregisterallactions) to update the registration.

Note that certain events also call [CompanionAPI.reregisterAllActions](/docs/api/reference/index/interfaces/companionapi/#reregisterallactions).

***

### cancelEvents?

> `optional` **cancelEvents?**: (`context`) => [`RCECancelEvent`](/docs/api/reference/index/interfaces/rcecancelevent/)\<`any`\> \| `null`[]

Defined in: [extension/packages/types/src/actions/types.ts:82](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L82)

Cancellation events attached to the action that will be automatically set up.
Each cancellation event will be setup in parallel to each other.
If one cancellation event fires, the request is cancelled and all listeners will be disposed as soon as possible.

Following VS Code's pattern, Disposables will not be awaited if async.
Returns from calling the `dispose()` function will not be used anywhere.

#### Parameters

##### context

[`RCEContext`](/docs/api/reference/index/interfaces/rcecontext/)\<`TData`, `TSchema`, `TDataShape`\>

#### Returns

[`RCECancelEvent`](/docs/api/reference/index/interfaces/rcecancelevent/)\<`any`\> \| `null`

***

### category

> **category**: `string` \| `null`

Defined in: [extension/packages/types/src/actions/types.ts:116](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L116)

The category of the request.
You can use null if the action is never added to the registry.

***

### contextSetupHooks?

> `optional` **contextSetupHooks?**: (`context`) => `Thenable`\<`void`\>[]

Defined in: [extension/packages/types/src/actions/types.ts:149](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L149)

Setup handlers that will be invoked to help setup the [RCEContext.storage](/docs/api/reference/index/interfaces/rcecontext/#storage) object.
These functions should not throw.

These functions will be parallelised, so the same key should not be accessed from multiple functions.

#### Parameters

##### context

[`RCEContext`](/docs/api/reference/index/interfaces/rcecontext/)\<`TData`, `TSchema`, `TDataShape`\>

#### Returns

`Thenable`\<`void`\>

***

### defaultPermission?

> `optional` **defaultPermission?**: [`PermissionLevel`](/docs/api/reference/index/enumerations/permissionlevel/)

Defined in: [extension/packages/types/src/actions/types.ts:111](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L111)

Default permission for actions when no permission is configured in user or workspace settings. Defaults to [PermissionLevel.OFF](/docs/api/reference/index/enumerations/permissionlevel/#off).

***

### description

> **description**: `string`

Defined in: extension/node\_modules/.pnpm/neuro-game-sdk@1.1.1/node\_modules/neuro-game-sdk/dist/index.d.mts:18

A plaintext description of what this action does.
This information will be directly received by Neuro.

#### Inherited from

`Omit.description`

***

### displayName?

> `optional` **displayName?**: `string`

Defined in: [extension/packages/types/src/actions/types.ts:67](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L67)

A human-friendly name for the action. If not provided, the action's name converted to Title Case will be used.

#### Examples

```ts
Edit File
```

```ts
edit_file -> Edit File // if displayName isn't set
```

***

### handler

> **handler**: `RCEHandler`\<`TData`, `TSchema`, `TDataShape`\>

Defined in: [extension/packages/types/src/actions/types.ts:99](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L99)

The function to handle the action.
This function must be synchronous.

An action result can be sent as either a synchronous result or asynchronous result, it will automatically be handled by RCE.
(see [RCEHandlerReturns](/docs/api/reference/index/type-aliases/rcehandlerreturns/))

***

### hidden?

> `optional` **hidden?**: `boolean`

Defined in: [extension/packages/types/src/actions/types.ts:135](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L135)

Whether the action should be hidden in the action permissions view.
Usually meant for actions that are exclusively used in action forces.

***

### name

> **name**: `string`

Defined in: extension/node\_modules/.pnpm/neuro-game-sdk@1.1.1/node\_modules/neuro-game-sdk/dist/index.d.mts:13

The name of the action, which is its unique identifier.
Should be a lowercase string with words separated by underscores or dashes.

#### Inherited from

`Omit.name`

***

### preview?

> `optional` **preview?**: (`context`) => `object`

Defined in: [extension/packages/types/src/actions/types.ts:91](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L91)

A function that is used to preview the action's effects.
This function will be called while awaiting user approval, if the action is set to Copilot permission.

The action must return a Disposable-like object. The disposable will not be awaited if async.
If your preview function does not require a dispose function to be called, return a no-op Disposable-like.

#### Parameters

##### context

[`RCEContext`](/docs/api/reference/index/interfaces/rcecontext/)\<`TData`, `TSchema`, `TDataShape`\>

#### Returns

`object`

##### dispose

> **dispose**: () => `unknown`

###### Returns

`unknown`

#### Example

```ts
return { dispose: () => undefined } // for no-ops
```

***

### promptGenerator

> **promptGenerator**: [`PromptGenerator`](/docs/api/reference/index/type-aliases/promptgenerator/)\<`TData`, `TSchema`, `TDataShape`\> \| `null`

Defined in: [extension/packages/types/src/actions/types.ts:109](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L109)

The function to generate a prompt for the action request (Copilot Mode). 
The prompt should fit the phrasing scheme "Neuro wants to [prompt]".

Only set this to `null` if the action is never intended to be used in Copilot mode.

It is this way due to a potential new addition in Neuro API "v2". (not officially proposed)
More info (comment): https://github.com/VedalAI/neuro-game-sdk/discussions/58#discussioncomment-12938623

***

### registerCondition?

> `optional` **registerCondition?**: () => `boolean`

Defined in: [extension/packages/types/src/actions/types.ts:142](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L142)

A condition that must be true for the action to be registered.
If not provided, the action is always registered.
Should not be used if [autoRegister](/docs/api/reference/index/interfaces/rceaction/#autoregister) is `false`.
**This function must never throw.**

#### Returns

`boolean`

***

### schema?

> `optional` **schema?**: `TSchema`

Defined in: [extension/packages/types/src/actions/types.ts:61](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L61)

A valid JSON Schema or Standard JSON Schema that describes the action's parameters.
Standard JSON Schemas (like Zod v4+) will be automatically converted to JSON Schema before registration.

***

### validators?

> `optional` **validators?**: `RCEValidators`\<`TData`, `TSchema`, `TDataShape`\>

Defined in: [extension/packages/types/src/actions/types.ts:72](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/actions/types.ts#L72)

An object that defines an array of functions to validate the action's "environment".
Validators run before requests/executions to ensure environment/input validity.
