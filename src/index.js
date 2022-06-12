import React from 'react'
import MuonToolbox from './components/MuonToolbox'

export const MuonTools = (props) => {
  const { mode } = props
  return <MuonToolbox mode={mode} />
}
