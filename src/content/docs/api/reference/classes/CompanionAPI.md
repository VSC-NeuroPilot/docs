---
editUrl: false
next: false
prev: false
title: "CompanionAPI"
---

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:468

## Extends

- [`ActionForcePriorityEnum`](/docs/api/reference/variables/actionforcepriorityenum/)

## Constructors

### Constructor

> **new CompanionAPI**(`data`): `CompanionAPI`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:469

#### Parameters

##### data

[`CompanionMeta`](/docs/api/reference/interfaces/companionmeta/)

#### Returns

`CompanionAPI`

#### Overrides

`Disposable.constructor`

## Properties

### onActionStatusChanged

> **onActionStatusChanged**: `Event`\<[`ActionsEventData`](/docs/api/reference/interfaces/actionseventdata/)\>

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:535

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

> **onDidMoveCursor**: `Event`\<`any`\>

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:569

Subscribe to the event that fires if Neuro's cursor position changed.
You must have declared the `cursor:get` contribution point.

The listener will receive the same information as if your companion had called [CompanionAPI.getCursor](/docs/api/reference/classes/companionapi/#getcursor) manually.

See also: [VS Code's Event type](/docs/api/reference/variables/actionforcepriorityenum/)

## Methods

### addActions()

> **addActions**(`actions`, `register?`): `void`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:477

Add an action to NeuroPilot's actions registry.
You must have declared the `actions:manage` contribution point.

#### Parameters

##### actions

[`RCEAction`](/docs/api/reference/interfaces/rceaction/)\<`any`, `any`\>[]

An array of [actions](/docs/api/reference/interfaces/rceaction/) that will be registered.

##### register?

`boolean`

Whether or not these actions should be immediately registered to Neuro. This does not effect your ability to register the action at any point, this simply acts as a shorthand.

#### Returns

`void`

***

### addChangelog()

> **addChangelog**(`version`, `changelog`): `void`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:549

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

### getCursor()

> **getCursor**(): `any`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:555

Get Neuro's current cursor location in the current file.

#### Returns

`any`

Either a [Position](/docs/api/reference/variables/actionforcepriorityenum/) object showing where her cursor is right now, `null` if she can't access the current file, or `undefined` if there is no cursor in the file for whatever reason (such as a read-only editor).

***

### injectIntoAction()

> **injectIntoAction**(`name`, `injection`, `force?`): `void`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:519

Inject into any registered action and modify most of its properties.
You must have specified the `actions:inject` contribution point.

#### Parameters

##### name

`string`

The action name to inject into

##### injection

`Partial`\<[`InjectionBaseData`](/docs/api/reference/type-aliases/injectionbasedata/)\>

An object containing the properties to inject.

##### force?

`boolean`

Allows changing the action's description and schema. Defaults to false. **Don't set this to true if you don't need it!**

#### Returns

`void`

***

### registerAction()

> **registerAction**(`action`): `void`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:489

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

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:483

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

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:501

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

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:542

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

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:560

Move Neuro's cursor location.

#### Parameters

##### location?

`any`

The location to move her cursor to. `null` removes the cursor entirely and `undefined` moves it to the last known location (failing that, an error is logged and no cursor is placed).

#### Returns

`void`

***

### tryForceActions()

> **tryForceActions**(`params`, `strict?`): `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:511

Try to force an action from Neuro.
You must have specified the `actions:force` contribution point.

#### Parameters

##### params

[`ActionForceParams`](/docs/api/reference/interfaces/actionforceparams/)

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

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:495

Unregisters an action to Neuro.
You must have declared either the `actions:manage` or `actions:manage_others` contribution point.

#### Parameters

##### action

`string`

#### Returns

`void`
