import React from 'react'
import { connect } from 'react-redux'
import { setResistorValue, showDialog } from './actions'
import ResistorInputs from './ResistorInputs'
import SeekDialog from './SeekDialog'

// small violation of the "container should render one presentation component" here to make room for the seek dialog; could be refactored
const ResistorInputsContainer = props =>
  <div>
    <ResistorInputs
      requiv={props.resistors.parallelResistance}
      r1={props.resistors.byId['1']}
      r2={props.resistors.byId['2']}
      setR1={r => props.setResistorValue('1', r)}
      setR2={r => props.setResistorValue('2', r)}
      showSeekDialog={() => props.showDialog('seek')} />
    <SeekDialog />
  </div>

const mapDispatchToProps = { setResistorValue, showDialog }

export default connect(s => s, mapDispatchToProps)(ResistorInputsContainer)
