import React from 'react'
import { connect } from 'react-redux'
import { FormGroup, Label, Input } from 'reactstrap'
import { Col } from 'reactstrap'
import { Button } from 'reactstrap'
import { setResistorValue, showDialog } from './actions'
import ColHeader from './ColHeader'
import SeekDialog from './SeekDialog'

class ResistorInputs extends React.Component {
	constructor(props, ...args) {
		super(props, ...args)
		this.setR1 = evt => props.setResistorValue('1', evt.target.value)
		this.setR2 = evt => props.setResistorValue('2', evt.target.value)
	}
	render() {
		return <div>
      <ColHeader title="Inputs" />
			<div>
        <FormGroup row>
          <Label sm={2}>R<sub>equiv</sub></Label>
          <Col sm={10}>
            <Input type="number" disabled value={this.props.resistors.parallelResistance} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>R<sub>1</sub></Label>
          <Col sm={10}>
            <Input type="number" name="R1" onChange={this.setR1} value={this.props.resistors.byId['1']} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>R<sub>2</sub></Label>
          <Col sm={10}>
            <Input type="number" name="R2" onChange={this.setR2} value={this.props.resistors.byId['2']} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Button color="primary" onClick={() => this.props.showDialog('seek')}>Seek</Button>
        </FormGroup>
				<SeekDialog />
			</div>
		</div>
	}
}

const mapDispatchToProps = { setResistorValue, showDialog }

export default connect(s => s, mapDispatchToProps)(ResistorInputs)
