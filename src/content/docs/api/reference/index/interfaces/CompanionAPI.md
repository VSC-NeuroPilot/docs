---
editUrl: false
next: false
prev: false
title: "CompanionAPI"
---

Defined in: [extension/packages/types/src/companions/register.ts:6](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L6)

## Extends

- `Disposable`

## Properties

### actionUtils

> **actionUtils**: `object`

Defined in: [extension/packages/types/src/companions/register.ts:11](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L11)

Utilities specific to creating actions.
These are separated due to them returning Disposables that need to be handled better.

#### CancelEvent

> **CancelEvent**: [`RCECancelEventConstructor`](/docs/api/reference/index/type-aliases/rcecanceleventconstructor/)

Creates a new cancel event for RCE.
Make sure to properly dispose of them when you no longer need the cancel events.
If you are adding them to the cancel events array of an action, this should automatically be handled.

#### edits

> **edits**: [`EditActionUtils`](/docs/api/reference/index/interfaces/editactionutils/)

#### files

> **files**: [`FileActionUtils`](/docs/api/reference/index/interfaces/fileactionutils/)

***

### onActionStatusChanged

> **onActionStatusChanged**: `Event`\<[`ActionsEventData`](/docs/api/reference/index/interfaces/actionseventdata/)\>

Defined in: [extension/packages/types/src/companions/register.ts:122](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L122)

Subscribe to the event that fires if an action status was changed.
You must have declared the `actions:process` contribution point.

Note that this event fires when action statuses change, see the example below to filter to actions beginning execution.

#### Example

```ts
companion.onDidAttemptAction((data) => {
    if (data.status === 'pending' && data.message === 'Validating action...') {
        doSomething(data)
    }
})
```

***

### onDidMoveCursor

> **onDidMoveCursor**: `Event`\<`Position` \| `null` \| `undefined`\>

Defined in: [extension/packages/types/src/companions/register.ts:161](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L161)

Subscribe to the event that fires if Neuro's cursor position changed.
You must have declared the `cursor:get` contribution point.

The listener will receive the same information as if your companion had called [CompanionAPI.getCursor](/docs/api/reference/index/interfaces/companionapi/#getcursor) manually.

See also: Event VS Code's Event type

## Methods

### abortActionForce()

> **abortActionForce**(): `Promise`\<`void`\>

Defined in: [extension/packages/types/src/companions/register.ts:96](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L96)

Aborts the current action force.
You must have specified the `actions:force` contribution point.

This temporarily unregisters all actions for 250ms before re-registering actions at their current permission level.

#### Returns

`Promise`\<`void`\>

***

### addActions()

> **addActions**(`actions`, `register?`): `void`

Defined in: [extension/packages/types/src/companions/register.ts:35](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L35)

Add an action to NeuroPilot's actions registry.
You must have declared the `actions:manage` contribution point.

#### Parameters

##### actions

[`RCEAction`](/docs/api/reference/index/interfaces/rceaction/)\<`any`, [`SchemaTypes`](/docs/api/reference/index/type-aliases/schematypes/), `any`\>[]

An array of [actions](/docs/api/reference/index/interfaces/rceaction/) that will be registered.

##### register?

`boolean`

Whether or not these actions should be immediately registered to Neuro. This does not effect your ability to register the action at any point, this simply acts as a shorthand.

#### Returns

`void`

***

### addChangelog()

> **addChangelog**(`version`, `changelog`): `void`

Defined in: [extension/packages/types/src/companions/register.ts:138](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L138)

Add a changelog entry that Neuro can query for your companion.
You must have specified the `changelog` contribution point.

#### Parameters

##### version

`string`

The version tag for your companion

##### changelog

`string`

The changelog for that version. It is strongly recommended to follow Markdown formatting.

#### Returns

`void`

***

### canForceActions()

> **canForceActions**(): `boolean`

Defined in: [extension/packages/types/src/companions/register.ts:69](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L69)

Checks whether or not forcing an action from Neuro is possible right now.
You must have specified the `actions:force` contribution point.

#### Returns

`boolean`

***

### dispose()

> **dispose**(): `any`

Defined in: extension/node\_modules/.pnpm/@types+vscode@1.120.0/node\_modules/@types/vscode/index.d.ts:1748

Dispose this object.

#### Returns

`any`

#### Inherited from

`Disposable.dispose`

***

### getCurrentActionForce()

> **getCurrentActionForce**(): [`ActionForceParams`](/docs/api/reference/index/interfaces/actionforceparams/) \| `null`

Defined in: [extension/packages/types/src/companions/register.ts:88](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L88)

Gets the status of the current action force.
You must have specified the `actions:force` contribution point.

#### Returns

[`ActionForceParams`](/docs/api/reference/index/interfaces/actionforceparams/) \| `null`

`null` if there is no action force currently, otherwise returns the exact params sent by the action force.

***

### getCursor()

> **getCursor**(): `Position` \| `null` \| `undefined`

Defined in: [extension/packages/types/src/companions/register.ts:145](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L145)

Get Neuro's current cursor location in the current file.

#### Returns

`Position` \| `null` \| `undefined`

Either a Position object showing where her cursor is right now, `null` if she can't access the current file, or `undefined` if there is no cursor in the file for whatever reason (such as a read-only editor).

***

### injectIntoAction()

> **injectIntoAction**(`name`, `injection`, `force?`): `void`

Defined in: [extension/packages/types/src/companions/register.ts:105](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L105)

Inject into any registered action and modify most of its properties.
You must have specified the `actions:inject` contribution point.

#### Parameters

##### name

`string`

The action name to inject into

##### injection

`Partial`\<[`InjectionBaseData`](/docs/api/reference/index/type-aliases/injectionbasedata/)\>

An object containing the properties to inject.

##### force?

`boolean`

Allows changing the action's description and schema. Defaults to false. **Don't set this to true if you don't need it!**

#### Returns

`void`

***

### isNeuroConnected()

> **isNeuroConnected**(): `boolean`

Defined in: [extension/packages/types/src/companions/register.ts:25](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L25)

Whether or not Neuro is connected to NeuroPilot.

#### Returns

`boolean`

***

### registerAction()

> **registerAction**(`action`): `void`

Defined in: [extension/packages/types/src/companions/register.ts:49](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L49)

Registers an action to Neuro.
You must have declared either the `actions:manage` or `actions:manage_others` contribution point.

#### Parameters

##### action

`string`

#### Returns

`void`

***

### removeActions()

> **removeActions**(`actions`): `void`

Defined in: [extension/packages/types/src/companions/register.ts:42](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L42)

Remove an action from NeuroPilot's actions registry.
You must have declared the `actions:manage` contribution point.

#### Parameters

##### actions

`string`[]

An array of action names to remove from the registry.

#### Returns

`void`

***

### reregisterAllActions()

> **reregisterAllActions**(`conservative?`): `void`

Defined in: [extension/packages/types/src/companions/register.ts:63](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L63)

Re-attempts to register all actions
You must have declared either the `actions:manage` or `actions:manage_others` contribution point.

#### Parameters

##### conservative?

`boolean`

If true, only re-register actions as is deemed necessary.

#### Returns

`void`

***

### sendContext()

> **sendContext**(`message`, `silent?`): `void`

Defined in: [extension/packages/types/src/companions/register.ts:130](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L130)

Send freeform context to Neuro.
You must have specified the `context` contribution point.

#### Parameters

##### message

`string`

The context to send to Neuro. Will be formatted as "Message from (companion): "

##### silent?

`boolean`

If false, will prompt Neuro more strongly to react to that context. Defaults to true.

#### Returns

`void`

***

### setCursor()

> **setCursor**(`location?`): `void`

Defined in: [extension/packages/types/src/companions/register.ts:151](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L151)

Move Neuro's cursor location.

#### Parameters

##### location?

`Position` \| `null`

The location to move her cursor to. `null` removes the cursor entirely and `undefined` moves it to the last known location (failing that, an error is logged and no cursor is placed).

#### Returns

`void`

***

### tryForceActions()

> **tryForceActions**(`params`, `strict?`): `boolean`

Defined in: [extension/packages/types/src/companions/register.ts:80](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L80)

Try to force an action from Neuro.
You must have specified the `actions:force` contribution point.

#### Parameters

##### params

[`ActionForceParams`](/docs/api/reference/index/interfaces/actionforceparams/)

An object describing the action force's parameters.

##### strict?

`boolean`

If true, fails if any action in the parameter object cannot be executed by Neuro, otherwise simply strips out those actions if found.
Defaults to false.
If actions are stripped out, at least one action must remain, otherwise the action force will fail.

#### Returns

`boolean`

`true` if successfully forced an action, `false` otherwise.

***

### unregisterAction()

> **unregisterAction**(`action`): `void`

Defined in: [extension/packages/types/src/companions/register.ts:56](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L56)

Unregisters an action to Neuro.
You must have declared either the `actions:manage` or `actions:manage_others` contribution point.

#### Parameters

##### action

`string`

#### Returns

`void`
