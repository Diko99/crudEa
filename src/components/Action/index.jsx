import React from 'react'
import PropTypes from 'prop-types'
import {
  FormGroup, Label, Input, Button, NavbarToggler, Collapse,
  Nav, NavItem, ModalBody, Modal, ModalHeader, ModalFooter
} from 'reactstrap'

const ActionButton = (props) => {
  return (
    <Button
      className={props.className}
      color={props.colorButton}
      onClick={props.onClickButton}
      outline={props.outline}
    >
      {props.titleButton}
    </Button>
  )
}

const ActionModal = (props) => {
  const actionDelete = props.titleAction === 'hapus'
  const actionUpdate = props.titleAction === 'edit'
  const actionAddSantri = props.titleAction === 'addsantri'

  const titleActionHeader = actionDelete
    ? 'Apakah anda Yakin ingin mengahapus santri ini ?'
    : actionUpdate
      ? 'Update data santri'
      : actionAddSantri ? 'Tambah Santri' : ''

  const modalHeader = actionDelete
    ? null
    : actionUpdate
      ? (
        <FormModalInput
          {...props}
          value={props.postDataSantri}
        />
      )
      : actionAddSantri
        ? <FormModalInput {...props} /> : ''

  const isModalVisible = actionDelete
    ? props.isDeleteModalVisible
    : actionUpdate
      ? props.isEditModalVisible
      : actionAddSantri
        ? props.isCreateModalVisible : ''

  const titleButtonLeft = actionDelete
    ? 'Hapus'
    : actionUpdate
      ? 'Update'
      : actionAddSantri
        ? 'Tambah Santri' : ''

  const titleButtonRight = actionDelete
    ? 'Batal'
    : actionUpdate
      ? 'Batal'
      : actionAddSantri
        ? 'Batal' : ''

  const onClickButton = actionUpdate
    ? () => {
      props.onClickButton()
      props.onToggleModal()
    }
    : actionDelete
      ? () => {
        props.onHandleDelete()
        props.onToggleModal()
      }
      : actionAddSantri
        ? props.onClick : ''

  return (
    <Modal isOpen={isModalVisible}>
      <ModalHeader
        toggle={props.onToggleCreateModal}
      >
        {titleActionHeader}
      </ModalHeader>
      {modalHeader}
      <ActionButtonFooter
        {...props}
        titleButtonLeft={titleButtonLeft}
        titleButtonRight={titleButtonRight}
        onClick={onClickButton}
      />
    </Modal>
  )
}

const ActionButtonFooter = (props) => {
  return (
    <ModalFooter>
      <ActionButton
        titleButton={props.titleButtonLeft}
        colorButton='info'
        onClickButton={props.onClick}
        className={props.className}
      />
      <ActionButton
        className={props.className}
        titleButton={props.titleButtonRight}
        colorButton='secondary'
        outline
        onClickButton={props.onToggleModal}
      />
    </ModalFooter>
  )
}

const FormModalInput = (props) => {
  return (
    <ModalBody>
      <FormInput
        label='Nama Santri'
        name='name'
        placeholder='Nama Santri'
        value={props.postDataSantri.name}
        onChange={(e) => props.onHandleInput(e)}
      />
      <FormInput
        label='Jurusan Santri'
        name='programStudi'
        value={props.postDataSantri.programStudi}
        placeholder='Jurusan Santri'
        onChange={(e) => props.onHandleInput(e)}
      />
    </ModalBody>
  )
}

const FormInput = (props) => {
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
  className: PropTypes.string,
  colorButton: PropTypes.string,
  onClickButton: PropTypes.func,
  outline: PropTypes.bool,
  titleButton: PropTypes.string
}
ActionButtonFooter.propTypes = {
  onClick: PropTypes.func,
  onToggleModal: PropTypes.func,
  titleButtonRight: PropTypes.string,
  titleButtonLeft: PropTypes.string,
  className: PropTypes.string
}
ActionModal.propTypes = {
  onClickButton: PropTypes.string,
  titleAction: PropTypes.string,
  isCreateModalVisible: PropTypes.bool,
  onToggleCreateModal: PropTypes.func,
  label: PropTypes.string,
  postDataSantri: PropTypes.object,
  isDeleteModalVisible: PropTypes.string,
  isEditModalVisible: PropTypes.string,
  onToggleModal: PropTypes.string,
  onHandleDelete: PropTypes.string,
  onClick: PropTypes.string
}
FormModalInput.propTypes = {
  onHandleInput: PropTypes.func
}
FormInput.propTypes = {
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

export { ActionButton, ActionSearch, ActionModal, FormInput }
