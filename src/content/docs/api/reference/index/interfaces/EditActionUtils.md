---
editUrl: false
next: false
prev: false
title: "EditActionUtils"
---

Defined in: [extension/packages/types/src/companions/register.ts:210](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L210)

## Methods

### setPreviewCursor()

> **setPreviewCursor**(`location`, `prompt`): `TextEditorDecorationType`

Defined in: [extension/packages/types/src/companions/register.ts:217](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L217)

Set a preview cursor that matches the normal colour scheme for NeuroPilot's preview cursor.

#### Parameters

##### location

`Position`

A Position object where the cursor will be placed.

##### prompt

`string`

The prompt suffix that displays when hovering over the cursor. Must match the scheme "Neuro wants to (x)"

#### Returns

`TextEditorDecorationType`

The TextEditorDecorationType that was used to create the highlight.

***

### setPreviewHighlight()

> **setPreviewHighlight**(`startPosition`, `endPosition`, `prompt`): `TextEditorDecorationType`

Defined in: [extension/packages/types/src/companions/register.ts:225](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L225)

Set a preview highlight that matches the normal colour scheme for NeuroPilot's preview highlights.

#### Parameters

##### startPosition

`Position`

A Position object that marks the start of the highlight.

##### endPosition

`Position`

A Position object that marks the end of the highlight.

##### prompt

`string`

The prompt suffix that displays when hovering over the cursor. Must match the scheme "Neuro wants to (x)"

#### Returns

`TextEditorDecorationType`

The TextEditorDecorationType that was used to create the highlight.
