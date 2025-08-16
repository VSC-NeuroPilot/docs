# NeuroPilot Docs

This is the repository where NeuroPilot Docs are held. Astro + Starlight is used as the site framework, and the docs are hosted on GitHub Pages.

## Contributing

After cloning the repository and installing dependencies, you'll be able to access the in-built test server using `pnpm run dev` or `pnpm start`.

If you are adding new dependencies, please pin them to approximately their version using the tilde (~) in `package.json`. You can see examples in the `package.json` file.

To test everything, including some functionalities disallowed in dev mode, you'll need to build the site with `pnpm run build` and then preview it using `pnpm run preview`.

Before committing, please check your contributions using `pnpm run check` as this will allow you to catch potential mistakes in the frontmatter/configuration.
