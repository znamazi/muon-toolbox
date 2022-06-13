import React from 'react'
import MuonToolbox from './components/MuonToolbox'

export const MuonTools = (props) => {
  const { mode, menuColor, menuBackground, itemColor } = props
  return (
    <MuonToolbox
      mode={mode}
      menuColor={menuColor}
      menuBackground={menuBackground}
      itemColor={itemColor}
    />
  )
}
