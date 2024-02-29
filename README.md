# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## NFT Market

- “Connecting you to the NFT world”

- Intro & Goal
Our goal is to create a platform that serves as the destination for NFT enthusiasts to share resources and discover relevant opportunities in the NFT world. 

- Why build it?

1. A lot of NFT communities are exclusive, this is a community that will be open to all and sundry. 
2. NFT resources are scattered all over the internet, this platform serves to aid navigation through various nft discuss.

- What is it?

Architecture

1. Homepage (Displaying a variety of nfts)
2. Information about a particular nft when clicked on from the homepage

Home Page

The Home page displays the list of nfts, authors, prices and so on. It includes sections such as search input to search for a particular nft in mind, horizontal slide of different kins of nfts.

Individual Page

This displays contents specific to the nft that was clicked on in the homepage. It also includes a navbar for easy navigations.