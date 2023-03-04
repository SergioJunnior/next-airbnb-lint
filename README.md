# Next.js Boilerplate with ESLint and Prettier

This is a starter template for a Next.js project with ESLint and Prettier configured with the rules of the Airbnb style guide, but with some customizations.

## Features

- Next.js framework
- ESLint with [Airbnb style guide](https://github.com/airbnb/javascript) and customizations
- [typescript-eslint](https://typescript-eslint.io/)
- Prettier with custom configuration

## Customizations

The following rules from the Airbnb style guide have been adjusted:

- `react/function-component-definition` is set to

  ```text
  [
    "error",
    {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function"
    }
  ]
  ```

- `react-hooks/exhaustive-deps` is set to `"off"`
- `react/jsx-props-no-spreading` is set to `"off"`
- `react/prop-types` is set to `off`
- `import/prefer-default-export` is set to `off`
- `import/no-default-export` is set to `error`
- `react/no-unknown-property` is set to

```text
[
    2,
    {
        "ignore": ["jsx", "global"]
    }
]
```

The following rules have also been added:

- `@typescript-eslint/no-explicit-any` is set to `"warn"`
- `@typescript-eslint/ban-types` is set to

```text
[
    "error",
      {
        "extendDefaults": true,
        "types": {
          "{}": false
        }
    }
]
```

- `indent` is set to `["error", 2]`
- `linebreak-style` is set to `"off"`
- `object-shorthand` is set to `"error"`
- `no-console` is set to `warn`
- `no-unused-vars` is set to `["error", { "vars": "all", "args": "all" }]`
- `import/prefer-default-export` is set to `off`
- `import/no-default-export` is set to `error`

Also the rule `import/no-default-export` is set to `off` on all `.ts` and `.tsx` files on `src/pages` to not break Next.js routes.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Linting and Formatting

To run ESLint and fix ESLint errors, use the following commands:

```bash
npm run eslint
```

```bash
npm run eslint:fix
```

To run Prettier and fix Prettier errors, use the following commands:

```bash
npm run prettier
```

```bash
npm run prettier:fix
```

## Conclusion

This is a simple starter template for a Next.js project with ESLint and Prettier already configured to help you start your projects faster. Feel free to customize it further to fit your specific needs.
