import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'

const renderDataSantri = (props) => {
  return props.searchedSantri && props.value
    ? props.newDataSantri
    : props.dataSantri
}

const DataSantri = (props) => {
  return (
    <Table hover>
      <Thead />
      <Tbody {...props} />
    </Table>
  )
}

let IdSantriToDelete

const Thead = () => {
  return (
    <thead>
      <tr className='text-white'>
        <th scope='col' style={{ width: '20%' }}>ID</th>
        <th scope='col' style={{ width: '30%' }}>Nama</th>
        <th scope='col' style={{ width: '25%' }}>Jurusan</th>
        <th scope='col' style={{ width: '25%' }} className='text-center'>Action</th>
      </tr>
    </thead>
  )
}

const Tbody = (props) => {
  const [isEditModalVisible, setEditModal] = useState(false)
  const onToggleEditModal = () => setEditModal(!isEditModalVisible)

  const [isDeleteModalVisible, setDeleteModal] = useState(false)
  const onToggleDeleteModal = () => setDeleteModal(!isDeleteModalVisible)
  return (
    <tbody>
      {renderDataSantri(props).map((item, id) => (
        <tr key={id} className='text-white'>
          <th scope='row'>{item.id}</th>
          <td>{item.name}</td>
          <td>{item.programStudi}</td>
          <td>
            <div className='row justify-content-center'>
              {/* button delete */}
              <ActionButton
                button='delete'
                onClick={() => {
                  onToggleDeleteModal()
                  IdSantriToDelete = item.id
                }}
              />
              {/* button edit */}
              <ActionButton
                button='edit'
                onClick={() => {
                  props.onDataUpdate(item)
                  onToggleEditModal()
                }}
              />
            </div>
          </td>
        </tr>
      ))}

      <ActionModal
        modal='edit'
        postDataSantri={props.postDataSantri}
        onToggleEditModal={onToggleEditModal}
        isEditModalVisible={isEditModalVisible}
        postDataSantri={props.postDataSantri}
        onHandleInput={props.onHandleInput}
        onHandleUpdate={props.onHandleUpdate}
      />
      <ActionModal
        modal='delete'
        isDeleteModalVisible={isDeleteModalVisible}
        onToggleDeleteModal={onToggleDeleteModal}
        onHandleDelete={props.onHandleDelete}
      />
    </tbody>
  )
}

const ActionModal = (props) => {
  const modalEdit = props.modal === 'edit'
  const modalDelete = props.modal === 'delete'

  const isOpenModal = modalEdit
    ? props.isEditModalVisible
    : modalDelete
      ? props.isDeleteModalVisible
      : null
  const onToggleModal = modalEdit
    ? props.onToggleEditModal
    : modalDelete
      ? props.onToggleDeletetModal
      : null
  const titleModal = modalEdit
    ? 'Update Data Santri'
    : modalDelete
      ? 'Yakin mau hapus santri ini ?'
      : 'Custom Title'
  const onToggleCloseModal = modalEdit
    ? props.onToggleEditModal
    : modalDelete
      ? null
      : null

  const modalBodyEdit = modalEdit
    ? (
      <ModalHeaderEdit
        onChange={(e) => props.onHandleInput(e)}
        postDataSantri={props.postDataSantri}
        onToggleEditModal={props.onToggleEditModal}
        onClick={() => {
          props.onToggleEditModal()
          props.onHandleUpdate()
        }}
      />
    )
    : modalDelete
      ? (
        <ModalFooterDelete
          onToggleDeleteModal={props.onToggleDeleteModal}
          onClick={() => props.onHandleDelete(IdSantriToDelete)}
        />
      )
      : null

  return (
    <Modal
      isOpen={isOpenModal}
      toggle={onToggleModal}
    >
      <ModalHeader toggle={onToggleCloseModal}>{titleModal}</ModalHeader>
      {modalBodyEdit}
      <ModalFooter />
    </Modal>
  )
}

const ModalFooterDelete = (props) => {
  return (
    <ModalFooter>
      <Button
        outline
        color='secondary'
        onClick={props.onClick}
      >
        Delete
      </Button>
      <Button
        color='info'
        onClick={() => props.onToggleDeleteModal()}
      >
        Cancel
      </Button>
    </ModalFooter>
  )
}

const ModalHeaderEdit = (props) => {
  return (
    <div>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for='exampleEmail'>Nama Santri</Label>
            <Input
              type='text'
              name='name'
              placeholder='Nama santri'
              onChange={props.onChange}
              value={props.postDataSantri.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for='exampleEmail'>Jurusan Santri</Label>
            <Input
              type='text'
              name='programStudi'
              placeholder='Jurusan santri'
              value={props.postDataSantri.programStudi}
              onChange={props.onChange}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color='info'
          onClick={props.onClick}
        >
          Update
        </Button>
        <Button
          outline
          color='secondary'
        >
          Cancel
        </Button>
      </ModalFooter>
    </div>
  )
}

const ActionButton = (props) => {
  const ButtonEdit = props.button === 'edit'
  const ButtonDelete = props.button === 'delete'

  const color = ButtonEdit
    ? 'warning'
    : ButtonDelete
      ? 'danger'
      : ''
  const className = ButtonDelete
    ? 'mr-2'
    : ButtonEdit
      ? '' : ''
  const title = ButtonEdit
    ? 'Edit'
    : ButtonDelete
      ? 'Delete' : ''

  return (
    <Button
      color={color}
      className={className}
      onClick={props.onClick}
    >
      {title}
    </Button>
  )
}

DataSantri.propTypes = {
  onHandleUpdate: PropTypes.func,
  onHandleInput: PropTypes.func,
  onHandleDelete: PropTypes.func,
  postDataSantri: PropTypes.object,
  onDataUpdate: PropTypes.func
}
export default DataSantri
