---
editUrl: false
next: false
prev: false
title: "CompanionMeta"
---

Defined in: [extension/packages/types/src/companions/register.ts:166](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L166)

## Properties

### author

> **author**: `string`

Defined in: [extension/packages/types/src/companions/register.ts:185](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L185)

The author of the companion.
(that's you!)

You only need to put in a display name (and that's likely the only amount of space given for your display name anyways)

***

### contributes

> **contributes**: [`Contributions`](/docs/api/reference/index/enumerations/contributions/)[]

Defined in: [extension/packages/types/src/companions/register.ts:195](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L195)

An array of contributions this extension adds. Some features require a specific contribution to be specified, see the documentation.

#### See

[https://vsc-neuropilot.github.io/docs/api](https://vsc-neuropilot.github.io/docs/api)

***

### docs?

> `optional` **docs?**: `string`

Defined in: [extension/packages/types/src/companions/register.ts:190](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L190)

A link to your comapnion's documentation page.
This page can either be your repo, wiki, or separate site hosting your documentation.

***

### extensionId

> **extensionId**: `string`

Defined in: [extension/packages/types/src/companions/register.ts:178](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L178)

The ID of your extensino, as idenfitied on the marketplace.
You can pass this in from your ExtensionContext context object by using the Extension.id context.extension.id property.

You can also construct this from your package.json file using the format `${publisher}.${name}`.

***

### name?

> `optional` **name?**: `string`

Defined in: [extension/packages/types/src/companions/register.ts:171](https://github.com/VSC-NeuroPilot/neuropilot/blob/96a757267bf860c19ddfb9291b78c856b93565cc/packages/types/src/companions/register.ts#L171)

The human-readable name of your companion.
If left undefined, will use the extension name (not the extension display name!) from the [extensionId](/docs/api/reference/index/interfaces/companionmeta/#extensionid) property.
