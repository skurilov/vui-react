![image](https://github.com/user-attachments/assets/11eda42f-24df-49f3-9888-d8d6c6aad215)


Vortex UI Library (`vui-react`) is a React-based component library designed to streamline the development of consistent and accessible user interfaces. The library is built with modern JavaScript/TypeScript, using Rollup for bundling, and Storybook for documentation and testing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Building the Library](#building-the-library)
- [Linting and Formatting](#linting-and-formatting)
- [Storybook](#storybook)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the Vortex UI library in your project, use your favorite package manager:

```bash
# Using pnpm
pnpm install vui-react

# Using npm
npm install vui-react

# Using yarn
yarn add vui-react
````

### Usage

```markdown
Once installed, you can start using the components in your React project:

```tsx
import React from 'react';
import { Button } from 'vui-react';

const App = () => (
  <div>
    <Button>Click Me</Button>
  </div>
);

export default App;
```


### Development

```markdown
## Development

### Cloning the Repository

To start contributing or exploring the codebase, clone the repository:

git clone git@github.com:skurilov/vui-react.git
cd vui-react
pnpm install
```


### Building the Library

```markdown
To build the library, run:

pnpm build
```

### Linting and Formatting

```markdown
## Linting and Formatting

To maintain code quality, the library uses `eslint` for linting and `prettier` for code formatting. Additionally, `stylelint` is used for linting CSS/SCSS files.

- **Lint JavaScript/TypeScript files:**

  pnpm lint
```

### Storybook

```markdown
## Storybook

Storybook is used for developing and documenting components in isolation. You can start the Storybook development server with:


pnpm storybook
```

### Contributing

```markdown
## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find a bug or have a suggestion.
```

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more details.
