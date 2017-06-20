import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux'

import CommonResistorList from './CommonResistorList'
import ResistorInputs from './ResistorInputs'
import ResistorDiagram from './ResistorDiagram'

class App extends Component {
  render() {
		return <Container style={{ marginTop: '5vh' }}>
				<Row>
					<Col sm="3">
						<CommonResistorList />
					</Col>
					<Col sm="4">
						<ResistorInputs />
					</Col>
					<Col sm="3">
						<ResistorDiagram />
					</Col>
				</Row>
			</Container>
  }
}

export default connect(state => state)(App)
