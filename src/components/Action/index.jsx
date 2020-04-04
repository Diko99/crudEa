import React from 'react'
import PropTypes from 'prop-types'
import {
  FormGroup, Label, Input, Button, NavbarToggler, Collapse,
  Nav, NavItem, ModalBody, Modal, ModalHeader, ModalFooter
} from 'reactstrap'

const ActionButton = (props) => {
  return (
    <Button
      color={props.color}
      onClick={props.onClickButton}
      outline={props.outline}
    >
      {props.titleButton}
    </Button>
  )
}

const ActionButtonFooter = (props) => {
  return (
    <ModalFooter>
      <ActionButton
        titleButton='Simpan Data'
        color='info'
        onClickButton={props.onClick}
      />
      <ActionButton
        titleButton='Batal'
        color='secondary'
        outline
        onClickButton={props.onToggleCreateModal}
      />
    </ModalFooter>
  )
}

const ActionModal = (props) => {
  return (
    <Modal isOpen={props.isCreateModalVisible} toggle={props.onToggleCreateModal}>
      <ModalHeader toggle={props.onToggleCreateModal}>
        Tambah Santri
      </ModalHeader>
      <FormModalInput {...props} />
      <ActionButtonFooter {...props} />
    </Modal>
  )
}

const FormModalInput = (props) => {
  return (
    <ModalBody>
      <FromInput
        label='Nama Santri'
        name='name'
        placeholder='Nama Santri'
        onChange={(e) => props.onHandleInput(e)}
      />
      <FromInput
        label='Jurusan Santri'
        name='programStudi'
        placeholder='Jurusan Santri'
        onChange={(e) => props.onHandleInput(e)}
      />
    </ModalBody>
  )
}

const FromInput = (props) => {
  return (
    <FormGroup>
      <Label for='exampleEmail'>{props.label}</Label>
      <Input
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </FormGroup>

  )
}

const ActionSearch = (props) => {
  return (
    <div className='ml-auto'>
      <NavbarToggler onClick={props.onToggleNavbar} />
      <Collapse isOpen={props.isNavbarVisible} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <Input
              type='search'
              placeholder='cari santri'
              className='cari santri'
              onChange={(e) => props.onSearchSantri(e)}
            />
          </NavItem>
        </Nav>
      </Collapse>
    </div>
  )
}

ActionButton.propTypes = {
  color: PropTypes.string,
  onClickButton: PropTypes.func,
  outline: PropTypes.bool,
  titleButton: PropTypes.string
}
ActionButtonFooter.propTypes = {
  onClick: PropTypes.func,
  onToggleCreateModal: PropTypes.func
}
ActionModal.propTypes = {
  isCreateModalVisible: PropTypes.bool,
  onToggleCreateModal: PropTypes.func
}
FormModalInput.propTypes = {
  onHandleInput: PropTypes.func
}
FromInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}
ActionSearch.propTypes = {
  onSearchSantri: PropTypes.func,
  onToggleNavbar: PropTypes.bool,
  isNavbarVisible: PropTypes.bool
}

export { ActionButton, ActionSearch, ActionModal }
