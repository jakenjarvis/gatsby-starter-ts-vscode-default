# gatsby-starter-ts-vscode-default

A simple starter to get up and developing quickly with Gatsby using TypeScript on vscode.

# Policy

- Use TypeScript.
- Use ESLint. (Use eslint-config-react-app according to [Gatsby's Using ESLint](https://www.gatsbyjs.com/docs/eslint/#how-to-use-eslint))
- Use stylelint. (minimum configuration)
- Use prettier. As recommended by prettier, it does not use prettier with the ESLint plugin. See [prettier's Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html) for more information.
- Use Jest. (Use jest-preset-gatsby. Using this able to simply implement the official website configuration)
- Include the settings required for development with vscode. (If you don't need to set vscode, just delete the `.vscode` folder)
- This starter uses official recommendations wherever possible and does not include personal preferences.
- This starter is forked from [gatsbyjs/gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default) and implemented in TypeScript.
- This starter keeps webpack and Babel as unaware as possible and leaves them to Gatsby. The ideal is to make them look like they aren't using them.

If you use styled-components, Emotion, Tailwind, etc., you need to add it.

# Referenced

## Gatsby

- https://www.gatsbyjs.com/docs/eslint/#how-to-use-eslint
- https://github.com/gatsbyjs/gatsby/issues/15971

## create-react-app

- https://create-react-app.dev/docs/setting-up-your-editor/
- https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/adding-typescript.md
- https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app#usage-outside-of-create-react-app
- https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/base.js
- https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js

## typescript-eslint

- https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md
- https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md

## prettier

- https://prettier.io/docs/en/integrating-with-linters.html

## ESLint

- https://eslint.org/docs/user-guide/configuring

## TypeScript TSConfig

- https://www.typescriptlang.org/tsconfig
- https://github.com/typescript-cheatsheets/react#troubleshooting-handbook-tsconfigjson

## Jest

- https://www.gatsbyjs.com/docs/unit-testing/
- https://github.com/keplersj/jest-preset-gatsby

## Referenced Japanese articles, etc.

- https://blog.ojisan.io/prettier-eslint-cli
- https://tombomemo.com/gatsby-install-settings/

## Discussion in Japanese about ESLint and eslint-config-react-app

- https://github.com/sadnessOjisan/blog.ojisan.io/issues/116

Thanks! [@sadnessOjisan](https://github.com/sadnessOjisan)

---

---

---

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's default starter
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->
