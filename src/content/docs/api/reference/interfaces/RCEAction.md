---
editUrl: false
next: false
prev: false
title: "RCEAction"
---

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:50

ActionHandler to use with constants for records of actions and their corresponding handlers.

You may optionally type the interface if you are sure the action will take a specific form.

## Extends

- [`ActionForcePriorityEnum`](/docs/api/reference/variables/actionforcepriorityenum/)

## Type Parameters

### T

`T` *extends* [`ActionForcePriorityEnum`](/docs/api/reference/variables/actionforcepriorityenum/) \| `undefined` = `any`

### E

`E` = `any`

## Properties

### autoRegister?

> `optional` **autoRegister?**: `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:136

Whether to automatically register the action with Neuro if all conditions are met.
Defaults to true.

If `false`, the RCE system will never automatically register the action, and only automatically unregister if the user disables permission.
You need to call [CompanionAPI.registerAction](/docs/api/reference/classes/companionapi/#registeraction) or [CompanionAPI.unregisterAction](/docs/api/reference/classes/companionapi/#unregisteraction) manually.

If `true`, the action will be automatically registered and unregistered based on the [registerCondition](/docs/api/reference/interfaces/rceaction/#registercondition) and current permission settings.
However, the conditions are not watched, so if the conditions change, the action may not be immediately registered or unregistered.
Call [CompanionAPI.reregisterAllActions](/docs/api/reference/classes/companionapi/#reregisterallactions) to update the registration.

Note that certain events also call [CompanionAPI.reregisterAllActions](/docs/api/reference/classes/companionapi/#reregisterallactions).

***

### cancelEvents?

> `optional` **cancelEvents?**: (`context`) => [`RCECancelEvent`](/docs/api/reference/classes/rcecancelevent/)\<`E`\> \| `null`[]

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:85

Cancellation events attached to the action that will be automatically set up.
Each cancellation event will be setup in parallel to each other.
If one cancellation event fires, the request is cancelled and all listeners will be disposed as soon as possible.

Following VS Code's pattern, Disposables will not be awaited if async.
Returns from calling the `dispose()` function will not be used anywhere.

#### Parameters

##### context

[`RCEContext`](/docs/api/reference/classes/rcecontext/)\<`T`, `E`\>

#### Returns

[`RCECancelEvent`](/docs/api/reference/classes/rcecancelevent/)\<`E`\> \| `null`

***

### category

> **category**: `string` \| `null`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:122

The category of the request.
You can use null if the action is never added to the registry.

***

### contextSetupHook?

> `optional` **contextSetupHook?**: (`context`) => `Thenable`\<`void`\>[]

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:155

Setup handlers that will be invoked to help setup the [RCEContext.storage](/docs/api/reference/classes/rcecontext/#storage) object.
These functions should not throw.

These functions will be parallelised, so the same key should not be accessed from multiple functions.

#### Parameters

##### context

[`RCEContext`](/docs/api/reference/classes/rcecontext/)\<`T`, `E`\>

#### Returns

`Thenable`\<`void`\>

***

### defaultPermission?

> `optional` **defaultPermission?**: [`PermissionLevel`](/docs/api/reference/enumerations/permissionlevel/)

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:117

Default permission for actions when no permission is configured in user or workspace settings. Defaults to [PermissionLevel.OFF](/docs/api/reference/enumerations/permissionlevel/#off).

***

### displayName?

> `optional` **displayName?**: `string`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:56

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

> **handler**: `RCEHandler`\<`T`, `E`\>

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:104

The function to handle the action.
This function must be synchronous.

An action result can be sent as either a synchronous result or asynchronous result, it will automatically be handled by RCE.
(see [RCEHandlerReturns](/docs/api/reference/type-aliases/rcehandlerreturns/))

***

### hidden?

> `optional` **hidden?**: `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:141

Whether the action should be hidden in the action permissions view.
Usually meant for actions that are exclusively used in action forces.

***

### preview?

> `optional` **preview?**: (`context`) => `object`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:94

A function that is used to preview the action's effects.
This function will be called while awaiting user approval, if the action is set to Copilot permission.

The action must return a Disposable-like object. The disposable will not be awaited if async.
If your preview function does not require a dispose function to be called, return a no-op Disposable-like.

#### Parameters

##### context

[`RCEContext`](/docs/api/reference/classes/rcecontext/)\<`T`, `E`\>

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

> **promptGenerator**: [`PromptGenerator`](/docs/api/reference/type-aliases/promptgenerator/)\<`T`, `E`\> \| `null`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:115

The function to generate a prompt for the action request (Copilot Mode). 
The prompt should fit the phrasing scheme "Neuro wants to [prompt]".
Example: `"edit the current file."` resulting in "Neuro wants to edit the current file.".

Only set this to `null` if the action is never intended to be used in Copilot mode.

It is this way due to a potential new addition in Neuro API "v2". (not officially proposed)
More info (comment): https://github.com/VedalAI/neuro-game-sdk/discussions/58#discussioncomment-12938623

***

### registerCondition?

> `optional` **registerCondition?**: () => `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:148

A condition that must be true for the action to be registered.
If not provided, the action is always registered.
Should not be used if [autoRegister](/docs/api/reference/interfaces/rceaction/#autoregister) is `false`.
**This function must never throw.**

#### Returns

`boolean`

***

### validators?

> `optional` **validators?**: `object`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:61

An object that defines an array of functions to validate the action's "environment".
Validators run before requests/executions to ensure environment/input validity.

#### async?

> `optional` **async?**: (`context`) => `Promise`\<[`ActionValidationResult`](/docs/api/reference/interfaces/actionvalidationresult/)\>[]

Asynchronous validators that will be ran in parallel to each other.
These will be executed after an action result, so it's perfect for long-running validators.

Async validators will time out (and consequently fail) after 1 second (1000ms). It is planned that this value will be adjustable in the future.

##### Parameters

###### context

[`RCEContext`](/docs/api/reference/classes/rcecontext/)\<`T`, `E`\>

##### Returns

`Promise`\<[`ActionValidationResult`](/docs/api/reference/interfaces/actionvalidationresult/)\>

#### sync?

> `optional` **sync?**: (`context`) => [`ActionValidationResult`](/docs/api/reference/interfaces/actionvalidationresult/)[]

Synchronous validators that will block execution of the rest of the thread.
As this delays the action result to Neuro, any promises must resolve quickly so as to be effectively synchronous speed-wise. 

Tip: If you supply validators that ensure certain items are not nullable, you may be able to assert that they are a non-nullable value for [generating the Copilot-mode prompt](/docs/api/reference/interfaces/rceaction/#promptgenerator), [preview effects](/docs/api/reference/interfaces/rceaction/#preview) and/or [handling the action](/docs/api/reference/interfaces/rceaction/#handler).

##### Parameters

###### context

[`RCEContext`](/docs/api/reference/classes/rcecontext/)\<`T`, `E`\>

##### Returns

[`ActionValidationResult`](/docs/api/reference/interfaces/actionvalidationresult/)
