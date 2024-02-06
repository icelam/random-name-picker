<p align="center">
    <img alt="Random Name Picker for Lucky Draw" src="./logo.svg" width="100" />
</p>
<h1 align="center">Random Name Picker for Lucky Draw</h1>
<p align="center">
    Simple HTML5 random name picker for picking lucky draw winner using Web Animations and AudioContext API
</p>

<p align="center">
    <a href="https://www.typescriptlang.org/"><img height="20" src="https://img.shields.io/badge/built_with-TypeScript-007acc.svg?logo=typescript" alt="Built with TypeScript"></a>
    <a href="https://nodejs.org/en/"><img height="20" src="https://img.shields.io/badge/Node.js-18-026e00.svg?logo=Node.js" alt="Node.js"></a>
    <a href="https://yarnpkg.com/"><img height="20" src="https://img.shields.io/badge/Yarn-1-25799f.svg?logo=Yarn" alt="Yarn"></a>
    <a href="https://eslint.org/"><img height="20" src="https://img.shields.io/badge/code_style-ESLint-5b5be0.svg?logo=eslint" alt="Code Style"></a>
    <a href="https://conventionalcommits.org"><img height="20" src="https://img.shields.io/badge/conventional_commits-1.0.0-yellow.svg" alt="Conventional Commits"></a>
    <a href="./LICENSE"><img height="20" src="https://img.shields.io/github/license/icelam/random-name-picker?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAEFCu8CAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAHKADAAQAAAABAAAAHAAAAABHddaYAAAC5UlEQVRIDd2WPWtVQRCGby5pVASLiGghQSxyG8Ui2KWwCfkH9olY2JneQkiR0oCIxH/gB+qVFDYBIWBAbAIRSbCRpLXwIxLiPT7vnNm9e87ZxJtUwYH3zO47Mzv7Mbv3tlo5KYriGtgAJ81OY1ENdG/YI4boFEOI911BXgY/pdtwGuAtXpvmB1tAXHDnUolE5urkPOQo6MqA3pXWmJJL4Bb4rQ7yEYfxsjnIF29NJIoNC6e5fxOL/qN+9KCz7AaLpN8zI415N2i2EptpGrkRIjGeAuvR6IY1hSFLFUOug9Ms2M7ZxIUNytm1mnME186sdI2BOCwAyQMg54ugzSmKmwbPwSbolKH+hbAtQdsOoF+BsF3anUVwBdiOWRidFZDKTTrKEAJTm3GVrGkHzw/uPZbyx7DNNLfB7KGmRsCcr+/gjaiPSpAOTyX9qG4L/XBDdWXDDf1M+wtQ5fwCOtcb4Dto6VpLmzByB6gqdHbTItGSJdAGqibJQhmRfCF7IN4beSF2G9CqnGXQrxofXU+EykllNeoczRgYytDKMubDIRK0g5MF8rE69cGu0u9nlUcqaUZ41W0qK2nGcSzr4D2wV9U9wxp1rnpxn8agXAOHMQ9cy9kbHM7ngY4gFb03TxrO/yfBUifTtXt78jCrjY/jgEFnMn45LuNWUtknuu7NSm7D3QEn3HbatV1Q2jvgIRf1sfODKQaeymxZoMLlTqsq1LF+HvaTqQOzEzUCfni0/eNIA+DfuE3KEtbsegckGmMktTXacnBHPVe687ugkpT+axCkkhBSyRSjWI2xf1KMMVmYiQdWksK9BEFiQoiYLIlvJA3/zeTzCejP0RbB6YPbhZuB+0pR3KcdX0LaJtju0ZgBL8Bd+sbz2QIaU2OfBX3BaQLsgZysQtrk0M8Sh1A0w3DyyYnGnAiZ4gqZ/TvI2A8OGd1YIbF7+F3P+B6dYpYdsJNZgrjO0UdOIhmom0nwL0pnfnzkL1803jAoKhvyAAAAAElFTkSuQmCC" alt="License"></a>
    <a href="https://github.com/icelam/random-name-picker/releases"><img alt="Current version" src="https://img.shields.io/github/v/release/icelam/random-name-picker.svg?sort=semver&label=latest&logo=github"/></a>
</p>

## Live Demo
Demo is available at [https://pinkylam.me/playground/random-name-picker](https://pinkylam.me/playground/random-name-picker)

### Technology Stack
* Pug
* CSS3 (SCSS)
* Web Animations API
* AudioContext API

## Development

### Prerequisite
* Node 18 above or nvm installed
* Yarn or NPM installed

### Install dependencies
To install dependencies:
```bash
yarn install
```

### Start development server
To start the development server:
```bash
yarn start
```

### Build production
To build the project for production:
```bash
yarn build
```
All the build files can be found in `/dist` folder.

## General Guidance on Deployment

This app works fine under common static web hosting choices. Here's a general outline of the steps you can follow:

1. Set up your CI/CD pipeline to use Node.js and arn images. (If you prefer not to use a CI/CD pipeline, make sure you have both Node.js and Yarn installed on your machine.)

2. Start by installing the project dependencies. Run the command `yarn install` to ensure that all the necessary npm packages are installed and ready for the build process. To optimize costs and improve the efficiency of your CI/CD pipeline, you can consider adding a cache for the `node_modules` directory. Check your specific CI/CD tool's documentation for cache configuration options.

3. Next, you'll need to build the project. Use the command `yarn build` to initiate the build process. This command will compile and bundle the source code, generating the assets required for hosting.

4. Once the build process is complete, you'll need to copy all the generated assets located under the `/dist` directory. The specific command to accomplish this may vary depending on the CI/CD tool and OS you're using. Typically, you'll need to include a step in your pipeline that copies the contents of the `/dist` directory to a storage accessible by your chosen static web hosting service.
