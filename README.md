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
    return <MuonTools mode={process.env.MODE} menuColor='#313144' menuBackground='#313144' itemColor='#ffffff'/>
  }
}

MODE = local | dev | production

Default:
menuColor='#313144' menuBackground='#313144' itemColor='#ffffff'
```

## License

MIT © [znamazi](https://github.com/znamazi)
