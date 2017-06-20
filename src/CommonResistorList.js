import React from 'react'
import { connect } from 'react-redux'

const CommonResistorList = props => <div>
    <h2>Common Resistors</h2>
    <ul>
      {props.resistors.commonResistors.map((r, idx) => <li key={idx}>{r}</li>)}
    </ul>
  </div>

const mapStateToProps = state => state

export default connect(mapStateToProps)(CommonResistorList)
