import React from 'react'
import { connect } from 'react-redux'
import ColHeader from './ColHeader'

const CommonResistorList = props => <div>
    <ColHeader title="Common Resistors" />
    <ul>
      {props.resistors.commonResistors.map((r, idx) => <li key={idx}>{r}</li>)}
    </ul>
  </div>

const mapStateToProps = state => state

export default connect(mapStateToProps)(CommonResistorList)
