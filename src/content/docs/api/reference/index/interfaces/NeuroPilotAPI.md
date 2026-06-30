---
editUrl: false
next: false
prev: false
title: "NeuroPilotAPI"
---

Defined in: [extension/packages/types/src/index.ts:88](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L88)

## Properties

### actionHandler

> **actionHandler**: [`ActionHandlerUtils`](/docs/api/reference/index/interfaces/actionhandlerutils/)

Defined in: [extension/packages/types/src/index.ts:105](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L105)

Utililties for generating action handler messages

***

### actionValidation

> **actionValidation**: [`ActionValidationUtils`](/docs/api/reference/index/interfaces/actionvalidationutils/)

Defined in: [extension/packages/types/src/index.ts:101](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L101)

Utilities for generating action validation messages

***

### Companion

> **Companion**: [`CompanionAPIConstructor`](/docs/api/reference/index/type-aliases/companionapiconstructor/)

Defined in: [extension/packages/types/src/index.ts:93](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L93)

Register your companion extension by creating a new object from this class.
See [CompanionAPI](/docs/api/reference/index/interfaces/companionapi/) for the API surface it exposes.

***

### config

> **config**: [`NeuroPilotConfig`](/docs/api/reference/index/interfaces/neuropilotconfig/)

Defined in: [extension/packages/types/src/index.ts:97](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L97)

Config values and IDs from NeuroPilot.

## Methods

### applyDiffHighlighting()

> **applyDiffHighlighting**(`editor`, `diffRanges`): `void`

Defined in: [extension/packages/types/src/index.ts:185](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L185)

Apply diff highlighting to a text editor based on the provided diff ranges.
If you use [calculateDiffRanges](/docs/api/reference/index/interfaces/neuropilotapi/#calculatediffranges) to calculate the
diff ranges, the current text in the editor should be provided as the `newText` parameter.

#### Parameters

##### editor

`TextEditor`

The text editor to highlight.

##### diffRanges

[`DiffRange`](/docs/api/reference/index/interfaces/diffrange/)[]

The diff ranges to highlight.
If you use [calculateDiffRanges](/docs/api/reference/index/interfaces/neuropilotapi/#calculatediffranges) to calculate these,
the current text in the editor should be provided as the `newText` parameter.

#### Returns

`void`

***

### calculateDiff()

> **calculateDiff**(`oldLines`, `newLines`): [`Diff`](/docs/api/reference/index/interfaces/diff/)

Defined in: [extension/packages/types/src/index.ts:148](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L148)

Calculate the diff between two sets of lines using the Patience diff algorithm.

The algorithm is not limited to line-based diffs, you can also use it to calculate word- or
character-based diffs by splitting your text into arrays of words or characters instead of lines (at
the cost of performance).
However, documentation and property names still refer to everything as lines.

#### Parameters

##### oldLines

`string`[]

The lines before the change.

##### newLines

`string`[]

The lines after the change.

#### Returns

[`Diff`](/docs/api/reference/index/interfaces/diff/)

#### See

[https://github.com/jonTrent/PatienceDiff](https://github.com/jonTrent/PatienceDiff)

***

### calculateDiffPlus()

> **calculateDiffPlus**(`oldLines`, `newLines`): [`DiffPlus`](/docs/api/reference/index/interfaces/diffplus/)

Defined in: [extension/packages/types/src/index.ts:161](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L161)

Calculate the diff between two sets of lines, taking moved lines into account.

Note that moved lines are duplicated in the resulting diff:
A line will appear once with `oldIndex` set to the position it was moved from and `newIndex` set to the
position it was moved to, and a counterpart of that line will also appear with the same text and
`newIndex` set to -1. This is part of the original implementation of the algorithm, which we did not modify.
See also: [DiffPlusLine.newIndex](/docs/api/reference/index/interfaces/diffplusline/#newindex)

#### Parameters

##### oldLines

`string`[]

The lines before the change.

##### newLines

`string`[]

The lines after the change.

#### Returns

[`DiffPlus`](/docs/api/reference/index/interfaces/diffplus/)

#### See

[calculateDiff](/docs/api/reference/index/interfaces/neuropilotapi/#calculatediff)

***

### calculateDiffRanges()

> **calculateDiffRanges**(`startPosition`, `oldText`, `newText`, `tokenRegExp?`): [`DiffRange`](/docs/api/reference/index/interfaces/diffrange/)[]

Defined in: [extension/packages/types/src/index.ts:175](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L175)

Calculates the difference between the original and modified text. The ranges are based on the new text.

#### Parameters

##### startPosition

`Position`

The position to offset the resulting ranges by.

##### oldText

`string`

The text before the change.

##### newText

`string`

The text after the change.

##### tokenRegExp?

`RegExp`

The regular expression used for tokenization. The global flag must be set, and every
character in the text must be matched.
Defaults to `/\w+|\r?\n|\s+|./g` (word diff).
Examples:
- Line diff: `/.*(?:\r?\n|$)/g`
- Word diff: `/\w+|\r?\n|\s+|./g`
- Character diff: `/.|\r?\n/g`

#### Returns

[`DiffRange`](/docs/api/reference/index/interfaces/diffrange/)[]

***

### formatContext()

> **formatContext**(`context`, `overrideCursorStyle?`): `string`

Defined in: [extension/packages/types/src/index.ts:136](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L136)

Formats the context for sending to Neuro.
Assumes the cursor is at the end of `contextBefore` + `contextBetween` and at the start of `contextAfter`.

#### Parameters

##### context

[`PositionContext`](/docs/api/reference/index/interfaces/positioncontext/)

The context to format.

##### overrideCursorStyle?

[`CursorPositionContextStyle`](/docs/api/reference/index/type-aliases/cursorpositioncontextstyle/)

If provided, overrides the cursor style setting for this context.

#### Returns

`string`

The formatted context.

***

### getAction()

> **getAction**\<`TData`\>(`action`): [`RCEAction`](/docs/api/reference/index/interfaces/rceaction/)\<`TData`, [`SchemaTypes`](/docs/api/reference/index/type-aliases/schematypes/), `TData` *extends* `undefined` ? `unknown` : `TData`\> & `object` \| `undefined`

Defined in: [extension/packages/types/src/index.ts:112](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L112)

Get an action.

#### Type Parameters

##### TData

`TData` *extends* `object` \| `undefined` = `any`

#### Parameters

##### action

`string`

An action name.

#### Returns

[`RCEAction`](/docs/api/reference/index/interfaces/rceaction/)\<`TData`, [`SchemaTypes`](/docs/api/reference/index/type-aliases/schematypes/), `TData` *extends* `undefined` ? `unknown` : `TData`\> & `object` \| `undefined`

An [RCEAction](/docs/api/reference/index/interfaces/rceaction/) and its source companion.

***

### getActions()

> **getActions**\<`TData`\>(`actions`): [`RCEAction`](/docs/api/reference/index/interfaces/rceaction/)\<`TData`, [`SchemaTypes`](/docs/api/reference/index/type-aliases/schematypes/), `TData` *extends* `undefined` ? `unknown` : `TData`\> & `object`[]

Defined in: [extension/packages/types/src/index.ts:119](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L119)

Get an array of actions.

#### Type Parameters

##### TData

`TData` *extends* `object` \| `undefined` = `any`

#### Parameters

##### actions

`string`[]

#### Returns

[`RCEAction`](/docs/api/reference/index/interfaces/rceaction/)\<`TData`, [`SchemaTypes`](/docs/api/reference/index/type-aliases/schematypes/), `TData` *extends* `undefined` ? `unknown` : `TData`\> & `object`[]

An array of [RCEAction](/docs/api/reference/index/interfaces/rceaction/) and their corresponding source companions.

***

### getPositionContext()

> **getPositionContext**(`document`, `options`): [`PositionContext`](/docs/api/reference/index/interfaces/positioncontext/)

Defined in: [extension/packages/types/src/index.ts:128](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L128)

Gets the context around a specified range in a document.
If no range is specified, gets the entire document.
Do not use the result of this for position calculations, as the file is filtered to remove Windows-style line endings.

#### Parameters

##### document

`TextDocument`

The document to get the context from.

##### options

`Position` \| [`PositionContextOptions`](/docs/api/reference/index/interfaces/positioncontextoptions/)

The options for getting the context. If passed a vscode.Position, it is used as `cursorPosition`, `position` and `position2`.

#### Returns

[`PositionContext`](/docs/api/reference/index/interfaces/positioncontext/)

The context around the specified range. The amount of lines before and after the range is configurable in the settings.

***

### isPathNeuroSafe()

> **isPathNeuroSafe**(`path`): `boolean`

Defined in: [extension/packages/types/src/index.ts:192](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L192)

Checks if a file is Neuro-safe, according to the rules the user has set in NeuroPilot's settings.

It is recommended that you use this to check file paths if your actions are accessing a file for any reason.

#### Parameters

##### path

`string`

The path to the file. This utility expects an *absolute* path.

#### Returns

`boolean`
