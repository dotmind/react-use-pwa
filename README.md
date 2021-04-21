<div align="center">
  <img alt="header" src="https://raw.githubusercontent.com/dotmind/react-use-pwa/master/assets/header.png" />
</div>
<h1 align="center">
  @dotmind/react-use-pwa
</h1>
<p align="center">
  Prompt to install Progressive Web App and more with React hooks. Builded by <a href="https://dotmind.io/" target="_blank">.mind.io</a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@dotmind/react-use-pwa">
    <img src="https://img.shields.io/npm/v/@dotmind/react-use-pwa" />
  </a>
  <a href="https://www.npmjs.com/package/@dotmind/react-use-pwa">
    <img src="https://img.shields.io/npm/dw/@dotmind/react-use-pwa" />
  </a>
  <a href="https://github.com/dotmind/react-use-pwa">
    <img src="https://img.shields.io/github/license/dotmind/react-use-pwa" />
  </a>
  <a href="https://github.com/dotmind/rn-shadow-generator">
    <img src="https://img.shields.io/npm/types/typescript" />
  </a>
</p>

## Menu

- [Menu](#menu)
- [✋ Disclaimer](#-disclaimer)
- [💻 Installation](#-installation)
- [👷‍♂️ How it's work](#️-how-its-work)
  - [usePwa usage](#usepwa-usage)
  - [usePwaAppSize usage](#usepwaappsize-usage)
- [⚡️ Contributing](#️-contributing)
- [🔐 License](#-license)


## ✋ Disclaimer

This package help to prompt to install and manage Progressive Web App (PWA) installed with React hooks.

Please check if your app have the required criteria before use : [web.dev/install-criteria](https://web.dev/install-criteria/#criteria)

Want to make a good PWA ? [Read this](https://web.dev/pwa-checklist/)

## 💻 Installation

```bash
yarn add @dotmind/react-use-pwa
```

or

```bash
npm i @dotmind/react-use-pwa --save
```

## 👷‍♂️ How it's work

### usePwa usage

```javascript
import { useEffect, useCallback  } from 'react';
import { usePwa } from '@dotmind/react-use-pwa';

const App = () => {
  const {
    installPrompt,
    isInstalled,
    isStandalone,
    isOffline,
    canInstall,
  } = usePwa();

  const handleInstallPrompt = useCallback(() => {
    if (canInstall) {
      installPrompt();
    }
  }, [canInstall, installPrompt]);

  if (isOffline) {
    return <p>Please check your network 📶</p>;
  }

  if (!isInstalled || !isStandalone) {
    return (
      <button onClick={handleInstallPrompt}>
        <span>Hey install our app 👋</span>
      </button>
    );
  }

  return (
    <h1>Welcome to our new app 🚀</h1>
  );
};

```

| | description | type |
|-|-|-|
| installPrompt | Show install prompt | `() => Promise<void>` |
| isInstalled | Is app installed on device | `boolean` |
| isStandalone | Is app run in standalone mode | `boolean` |
| isOffline | Is app run in offline mode | `boolean` |
| canInstall | Device can install app | `boolean` |
| userChoice | Prompt user choice | `'accepted' \| 'dismissed' \| 'unknow'` |

### usePwaAppSize usage

Choose app launching width and height (only in desktop standalone mode).

```javascript
import { usePwaAppSize } from '@dotmind/react-use-pwa';

const App = () => {
  usePwaAppSize(400, 560);

  return <AppProvider />;
};
```

| arguments | description | required | default value |
|-|-|-|-|
| width | App width | false | `800` |
| height | App height | false | `800` |
| options | App options | false | `{ fixed: false }` |

**App options**

| option | description | type
|-|-|-|
| fixed | User can't resize app width & height | `boolean`

## ⚡️ Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## 🔐 License

[MIT](https://choosealicense.com/licenses/mit/)
