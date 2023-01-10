# Repro for @vitejs/plugin-react fast refresh issue

Currently, fast refresh is working for a file only if either

- the file extension ends with an "x" (e.g. "jsx", "tsx") _or_
- the code in the file imports `React` in some way

Now when using a compile-to-JS language like [ReScript](https://rescript-lang.org/) **with the new JSX runtime enabled**, one will get `.js` or `.mjs` files with imports from "react/jsx-runtime" or "react/jsx-dev-runtime", but no `React` import, and fast refresh will not work for these files.

# How to reproduce

1. Install dependencies and start vite:

```sh
npm i
npm run dev
```

2. Increment counter
3. Change the text in `TestComponent.bs.js` (alternatively change it in TestComponent.res and run `npm run res:build` to recompile). Observe that the counter value is reset to 0.

# Workaround

1. Run `npx patch-package` to apply the patch from `patches/@vitejs+plugin-react+3.0.1.patch`.
2. Restart vite and repeat the above test steps.
3. Observe that TestComponent now refreshs correctly and the counter value remains unchanged.
