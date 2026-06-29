---
editUrl: false
next: false
prev: false
title: "RCEAction"
---

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:196

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

## Indexable

> \[`key`: `string`\]: `Action`

> \[`key`: `number`\]: `Action`

> \[`key`: `symbol`\]: `Action`

## Properties

### autoRegister?

> `optional` **autoRegister?**: `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:271

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

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:221

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

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:257

The category of the request.
You can use null if the action is never added to the registry.

***

### contextSetupHooks?

> `optional` **contextSetupHooks?**: (`context`) => `Thenable`\<`void`\>[]

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:290

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

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:252

Default permission for actions when no permission is configured in user or workspace settings. Defaults to [PermissionLevel.OFF](/docs/api/reference/index/enumerations/permissionlevel/#off).

***

### displayName?

> `optional` **displayName?**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:207

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

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:240

The function to handle the action.
This function must be synchronous.

An action result can be sent as either a synchronous result or asynchronous result, it will automatically be handled by RCE.
(see [RCEHandlerReturns](/docs/api/reference/index/type-aliases/rcehandlerreturns/))

***

### hidden?

> `optional` **hidden?**: `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:276

Whether the action should be hidden in the action permissions view.
Usually meant for actions that are exclusively used in action forces.

***

### preview?

> `optional` **preview?**: (`context`) => `object`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:230

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

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:250

The function to generate a prompt for the action request (Copilot Mode). 
The prompt should fit the phrasing scheme "Neuro wants to [prompt]".

Only set this to `null` if the action is never intended to be used in Copilot mode.

It is this way due to a potential new addition in Neuro API "v2". (not officially proposed)
More info (comment): https://github.com/VedalAI/neuro-game-sdk/discussions/58#discussioncomment-12938623

***

### registerCondition?

> `optional` **registerCondition?**: () => `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:283

A condition that must be true for the action to be registered.
If not provided, the action is always registered.
Should not be used if [autoRegister](/docs/api/reference/index/interfaces/rceaction/#autoregister) is `false`.
**This function must never throw.**

#### Returns

`boolean`

***

### schema?

> `optional` **schema?**: `TSchema`

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:201

A valid JSON Schema or Standard JSON Schema that describes the action's parameters.
Standard JSON Schemas (like Zod v4+) will be automatically converted to JSON Schema before registration.

***

### validators?

> `optional` **validators?**: `RCEValidators`\<`TData`, `TSchema`, `TDataShape`\>

Defined in: @vsc-neuropilot/api-types/dist/index-CvuPi5gB.d.mts:212

An object that defines an array of functions to validate the action's "environment".
Validators run before requests/executions to ensure environment/input validity.
