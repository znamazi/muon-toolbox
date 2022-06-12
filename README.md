# muon-toolbox

> Muon Toolbox

[![NPM](https://img.shields.io/npm/v/muon-toolbox.svg)](https://www.npmjs.com/package/muon-toolbox) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save https://github.com/znamazi/muon-toolbox.git
```

## Usage

```jsx
import React, { Component } from 'react'

import { MuonTools } from 'muon-toolbox'

class Example extends Component {
  render() {
    return <MuonTools mode={process.env.MODE} />
  }
}

MODE = local | dev | production
```

## License

MIT © [znamazi](https://github.com/znamazi)
