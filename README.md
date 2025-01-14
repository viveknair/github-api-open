# GitHub API Open

A browser extension that provides quick access to GitHub repository API documentation.

## Description

This extension enhances your GitHub browsing experience by allowing you to quickly access the API documentation for any GitHub repository. It's designed to help developers who frequently need to reference GitHub's API documentation for specific repositories.

## Features

- Quick access to GitHub API documentation from repository pages
- Seamless browser integration
- Lightweight and fast

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/github-api-open.git
cd github-api-open
```

2. Install dependencies:

```bash
pnpm install
```

3. Build the extension:

```bash
pnpm build
```

The built extension will be available in the `out` directory.

## Development

- `pnpm watch` - Watches for changes and rebuilds automatically
- `pnpm build` - Builds the extension
- `pnpm clean` - Cleans the build directory

## Project Structure

- `src/` - Source code
  - `content.ts` - Content script for the extension
  - `bump-extension-version.ts` - Script for version management
- `static/` - Static assets
- `out/` - Build output directory

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using conventional commits
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

This project uses:

- Husky for git hooks
- Conventional commits for commit messages
- Prettier for code formatting
- TypeScript for type safety

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Vivek Nair
