import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
import { Col } from 'reactstrap'
import { Button } from 'reactstrap'
import ColHeader from './ColHeader'

const ResistorInputs = props => 
	<div>
		<ColHeader title="Inputs" />
		<div>
			<FormGroup row>
				<Label sm={2}>R<sub>equiv</sub></Label>
				<Col sm={10}>
					<Input type="number" disabled value={props.requiv} />
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label sm={2}>R<sub>1</sub></Label>
				<Col sm={10}>
					<Input type="number" name="R1" onChange={evt => props.setR1(evt.target.value)} value={props.r1} />
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label sm={2}>R<sub>2</sub></Label>
				<Col sm={10}>
					<Input type="number" name="R2" onChange={evt => props.setR2(evt.target.value)} value={props.r2} />
				</Col>
			</FormGroup>
			<FormGroup>
				<Button color="primary" onClick={props.showSeekDialog}>Seek</Button>
			</FormGroup>
		</div>
	</div>

export default ResistorInputs
