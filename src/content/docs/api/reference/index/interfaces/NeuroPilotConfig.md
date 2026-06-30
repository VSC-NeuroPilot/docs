---
editUrl: false
next: false
prev: false
title: "NeuroPilotConfig"
---

Defined in: [extension/packages/types/src/index.ts:208](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L208)

Contains configuration values for NeuroPilot.

Since these values come directly from the settings.json, it is possible that the user inputs an invalid value.
NeuroPilot generally assumes that all config values are valid and of the correct type.

## Properties

### afterContext

> `readonly` **afterContext**: [`ConfigValue`](/docs/api/reference/index/interfaces/configvalue/)\<`number`\>

Defined in: [extension/packages/types/src/index.ts:212](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L212)

The number of lines after the cursor position to include as context when editing a file or sending a completion request.

***

### beforeContext

> `readonly` **beforeContext**: [`ConfigValue`](/docs/api/reference/index/interfaces/configvalue/)\<`number`\>

Defined in: [extension/packages/types/src/index.ts:210](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L210)

The number of lines before the cursor position to include as context when editing a file or sending a completion request.

***

### cursorFollowsNeuro

> `readonly` **cursorFollowsNeuro**: [`ConfigValue`](/docs/api/reference/index/interfaces/configvalue/)\<`boolean`\>

Defined in: [extension/packages/types/src/index.ts:214](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L214)

Whether the real cursor follows Neuro's cursor.

***

### cursorPositionContextStyle

> `readonly` **cursorPositionContextStyle**: [`ConfigValue`](/docs/api/reference/index/interfaces/configvalue/)\<`"off"` \| `"inline"` \| `"lineAndColumn"` \| `"both"`\>

Defined in: [extension/packages/types/src/index.ts:229](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L229)

The style to use for specifying the cursor position in context messages.
Possible values are:
- `"off"`: Cursor position should not be mentioned to Neuro.
- `"inline"`: Cursor position should be denoted by `<<<|>>>`
- `"lineAndColumn"`: Cursor position should be reported in <line>:<column> format (one-based).
- `"both"`: Combination of `"inline"` and `"lineAndColumn"`.

***

### gameName

> `readonly` **gameName**: [`ConfigValue`](/docs/api/reference/index/interfaces/configvalue/)\<`string`\>

Defined in: [extension/packages/types/src/index.ts:243](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L243)

The game name NeuroPilot reports to the API.

***

### lineNumberContextFormat

> `readonly` **lineNumberContextFormat**: [`ConfigValue`](/docs/api/reference/index/interfaces/configvalue/)\<`string`\>

Defined in: [extension/packages/types/src/index.ts:239](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L239)

The format to use for line numbers in context messages.
This format should be prepended to every line.
`{n}` is used for the line number. Examples:
- `""`
- `"{n} "`
- `"{n}|"`
- `"{n}: "`

***

### nameOfAPI

> `readonly` **nameOfAPI**: [`ConfigValue`](/docs/api/reference/index/interfaces/configvalue/)\<`string`\>

Defined in: [extension/packages/types/src/index.ts:247](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L247)

The name of the entity currently acting as the API server.

***

### sendContentsOnFileChange

> `readonly` **sendContentsOnFileChange**: [`ConfigValue`](/docs/api/reference/index/interfaces/configvalue/)\<`boolean`\>

Defined in: [extension/packages/types/src/index.ts:220](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L220)

Whether to send contents of a file to Neuro when the user switches to it.
If false, Neuro will still know what file was switched to, but won't get the contents.
Neuro will never get the contents or the name of files that aren't Neuro-safe.

***

### userName

> `readonly` **userName**: [`ConfigValue`](/docs/api/reference/index/interfaces/configvalue/)\<`string`\>

Defined in: [extension/packages/types/src/index.ts:245](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L245)

The name to indicate who is controlling this VS Code instance alongside the API server. This replaces the default name `Vedal`.

***

### websocketUrl

> `readonly` **websocketUrl**: [`ConfigValue`](/docs/api/reference/index/interfaces/configvalue/)\<`string`\>

Defined in: [extension/packages/types/src/index.ts:241](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/index.ts#L241)

The URL to connect to the Neuro API.
