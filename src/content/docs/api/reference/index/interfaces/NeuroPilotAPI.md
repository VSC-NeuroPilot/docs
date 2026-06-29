---
editUrl: false
next: false
prev: false
title: "NeuroPilotAPI"
---

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:366

## Properties

### actionHandler

> **actionHandler**: `ActionHandlerUtils`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:383

Utililties for generating action handler messages

***

### actionValidation

> **actionValidation**: `ActionValidationUtils`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:379

Utilities for generating action validation messages

***

### Companion

> **Companion**: [`CompanionAPIConstructor`](/docs/api/reference/index/type-aliases/companionapiconstructor/)

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:371

Register your companion extension by creating a new object from this class.
See [CompanionAPI](/docs/api/reference/index/interfaces/companionapi/) for the API surface it exposes.

***

### config

> **config**: [`NeuroPilotConfig`](/docs/api/reference/index/interfaces/neuropilotconfig/)

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:375

Config values and IDs from NeuroPilot.

## Methods

### applyDiffHighlighting()

> **applyDiffHighlighting**(`editor`, `diffRanges`): `void`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:458

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

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:421

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

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:434

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

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:448

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

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:409

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

### getActions()

> **getActions**(`action?`): `ItselfOrArray`\<[`RCEAction`](/docs/api/reference/index/interfaces/rceaction/)\<`undefined`, `any`, `any`\> & `object`\> \| `undefined`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:390

Get an action or an array of actions.

#### Parameters

##### action?

`string` \| `string`[]

A string or array of strings of action names.

#### Returns

`ItselfOrArray`\<[`RCEAction`](/docs/api/reference/index/interfaces/rceaction/)\<`undefined`, `any`, `any`\> & `object`\> \| `undefined`

An action (if a string was provided), undefined (if a string was provided and nothing was found), or an array of actions (if nothing or an array was provided)

#### Todo

split into overloads for sanity

***

### getPositionContext()

> **getPositionContext**(`document`, `options`): [`PositionContext`](/docs/api/reference/index/interfaces/positioncontext/)

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:401

Gets the context around a specified range in a document.
If no range is specified, gets the entire document.
Do not use the result of this for position calculations, as the file is filtered to remove Windows-style line endings.

#### Parameters

##### document

`TextDocument`

The document to get the context from.

##### options

`any`

The options for getting the context. If passed a vscode.Position, it is used as `cursorPosition`, `position` and `position2`.

#### Returns

[`PositionContext`](/docs/api/reference/index/interfaces/positioncontext/)

The context around the specified range. The amount of lines before and after the range is configurable in the settings.

***

### isPathNeuroSafe()

> **isPathNeuroSafe**(`path`): `boolean`

Defined in: @vsc-neuropilot/api-types/dist/index.d.mts:465

Checks if a file is Neuro-safe, according to the rules the user has set in NeuroPilot's settings.

It is recommended that you use this to check file paths if your actions are accessing a file for any reason.

#### Parameters

##### path

`string`

The path to the file. This utility expects an *absolute* path.

#### Returns

`boolean`
