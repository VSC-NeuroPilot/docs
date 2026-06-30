---
editUrl: false
next: false
prev: false
title: "FileActionUtils"
---

Defined in: [extension/packages/types/src/companions/register.ts:198](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L198)

## Methods

### markPreviewFiles()

> **markPreviewFiles**(`uris`, `promptString`, `absolutelyAllFiles?`, `noChildren?`): `Disposable`

Defined in: [extension/packages/types/src/companions/register.ts:207](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L207)

Mark certain files with a preview effect.

#### Parameters

##### uris

`Uri`[]

An array of files to mark. Direct inputs here are automatically assumed to be Neuro-safe, you must perform your own Neuro-safe checks at call time.

##### promptString

`string`

A string that describes what Neuro is about to do. Should match the scheme "Neuro wants to (do something)"

##### absolutelyAllFiles?

`boolean`

For folders, bypass checking children for Neuro-safe path validation and highlights them anyways. Has no effect on files.

##### noChildren?

`boolean`

For folders, does not mark its children in the preview effect. Has no effect on files.

#### Returns

`Disposable`

A Disposable that, when its dispose method is called, unmarks the marked files.
