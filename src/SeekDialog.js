import React from 'react'
import { connect } from 'react-redux'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { FormGroup, Label, Input, Button } from 'reactstrap'
import { Col } from 'reactstrap'
import { showDialog, hideDialog, toggleDialog, setDialogData, seekResistance } from './actions'

const SeekDialog = props => {

	const dlgName = 'seek'
	const dlg = props.ui.dialogs.seek

	const changeTargetResistance = evt => props.setDialogData(dlgName, 'parallelResistance', evt.target.value)

	const onOk = () => {
		props.hideDialog(dlgName)
		props.seekResistance(dlg.parallelResistance)
	}

  return <Modal isOpen={dlg.isShown} toggle={() => props.appToggleDialog(dlgName)}>
      <ModalHeader toggle={() => props.appToggleDialog(dlgName)}>Seek R<sub>eq</sub></ModalHeader>
      <ModalBody>
				<FormGroup row>
					<Label sm={2}>R<sub>equiv</sub></Label>
					<Col sm={10}>
						<Input type="number" value={dlg.parallelResistance} onChange={changeTargetResistance} />
					</Col>
				</FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onOk}>OK</Button>
        <Button color="secondary" onClick={() => props.hideDialog(dlgName)}>Cancel</Button>
      </ModalFooter>
    </Modal>
}

const mapStateToProps = state => state
const mapDispatchToProps = { showDialog, hideDialog, toggleDialog, setDialogData, seekResistance }

export default connect(mapStateToProps, mapDispatchToProps)(SeekDialog)
