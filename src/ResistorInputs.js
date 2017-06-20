import React from 'react'
import { connect } from 'react-redux'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { Col } from 'reactstrap'
import { Button } from 'reactstrap'
import { setResistorValue } from './actions'

class ResistorInputs extends React.Component {
	constructor(props, ...args) {
		super(props, ...args)
		this.setR1 = evt => props.setResistorValue('1', evt.target.value)
		this.setR2 = evt => props.setResistorValue('2', evt.target.value)
	}
	render() {
		return <div>
			<h2>Inputs</h2>
			<div>
				<h3>Equiv. R: {this.props.resistors.resistance}</h3>
				<Form>
					<FormGroup row>
						<Label sm={2}>R1</Label>
						<Col sm={10}>
							<Input type="number" name="R1" onChange={this.setR1} value={this.props.resistors.byId['1']} />
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label sm={2}>R2</Label>
						<Col sm={10}>
							<Input type="number" name="R2" onChange={this.setR2} value={this.props.resistors.byId['2']} />
						</Col>
					</FormGroup>
					<FormGroup>
						<Button>Seek</Button>
					</FormGroup>
				</Form>
			</div>
		</div>
	}
}

const mapDispatchToProps = { setResistorValue }

export default connect(s => s, mapDispatchToProps)(ResistorInputs)
