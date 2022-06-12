import React from 'react'

import { MuonTools } from 'muon-toolbox'
import 'muon-toolbox/dist/index.css'
import { Flex } from 'rebass'

const App = () => {
  return (
    <Flex>
      <MuonTools mode='local' />
      <span>hi</span>
    </Flex>
  )
}

export default App
