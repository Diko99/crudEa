import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { ActionButton, FormInput } from '../../Action'

let IdSantriToDelete
let modalVisible

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
  const [isModalVisible, setModal] = useState(false)
  const onToggleModal = () => setModal(!isModalVisible)

  const isDeleteModalVisible = isModalVisible && modalVisible === 'delete'
  const isEditModalVisible = isModalVisible && modalVisible === 'edit'

  return (
    <tbody>
      {renderDataSantri(props).map((item, id) => (
        <tr key={id} className='text-white'>
          <th scope='row'>{item.id}</th>
          <td>{item.name}</td>
          <td>{item.programStudi}</td>
          <td>
            <div className='row justify-content-center'>
              <ActionButton
                titleButton='Hapus'
                colorButton='danger'
                className='mr-2'
                onClickButton={() => {
                  IdSantriToDelete = item.id
                  modalVisible = 'delete'
                  onToggleModal()
                }}
              />
              <ActionButton
                titleButton='Ubah'
                colorButton='warning'
                onClickButton={() => {
                  props.onDataUpdate(item)
                  modalVisible = 'edit'
                  onToggleModal()
                }}
              />
            </div>
          </td>
        </tr>
      ))}
      <ActionModal
        isModalVisible={isDeleteModalVisible}
        onHandleDelete={props.onHandleDelete}
        onToggleModal={onToggleModal}
      />

      <ActionModal
        isModalVisible={isEditModalVisible}
        postDataSantri={props.postDataSantri}
        onHandleUpdate={props.onHandleUpdate}
        onHandleInput={props.onHandleInput}
        onToggleModal={onToggleModal}
      />
    </tbody>
  )
}
const ActionModal = (props) => {
  const EditModal = modalVisible === 'edit'
  const DeleteModal = modalVisible === 'delete'

  const titleHeader = EditModal
    ? 'Update Data Santri'
    : DeleteModal
      ? 'Apakah anda yakin ingin menghapus santri ini ?'
      : 'salah passing modalVisible'

  const onToggleHeader = EditModal
    ? props.onToggleModal
    : DeleteModal
      ? null
      : () => {}

  const titleButton = EditModal
    ? 'Ubah'
    : DeleteModal
      ? 'Hapus'
      : 'Custom button'

  const colorButtonLeft = EditModal
    ? 'info'
    : DeleteModal
      ? 'secondary'
      : 'custom color'

  const colorButtonRight = EditModal
    ? 'secondary'
    : DeleteModal
      ? 'info'
      : 'custom color'
  const onClickButton = EditModal
    ? () => {
      props.onToggleModal()
      props.onHandleUpdate()
    }
    : DeleteModal
      ? () => {
        props.onHandleDelete(IdSantriToDelete)
        props.onToggleModal()
      }
      : () => {}

  const classNameBorder = DeleteModal ? 'justify-content-center border-0' : ''

  return (
    <Modal
      isOpen={props.isModalVisible}
      toggle={() => props.onToggleModal()}
    >
      <ActionModalHeader
        onToggleHeader={onToggleHeader}
        classNameBorder={classNameBorder}
        titleHeader={titleHeader}
      />
      <ActionModalEdit
        postDataSantri={props.postDataSantri}
        onChange={props.onHandleInput}
        isModalVisible={EditModal}
        onToggleModal={props.onToggleModal}
      />
      <ActionModalFooter
        classNameBorder={classNameBorder}
        titleButton={titleButton}
        colorButtonLeft={colorButtonLeft}
        DeleteModal={DeleteModal}
        onClickButton={onClickButton}
        colorButtonRight={colorButtonRight}
        EditModal={EditModal}
        onToggleModal={props.onToggleModal}
      />
    </Modal>
  )
}
const ActionModalHeader = (props) => {
  return (
    <ModalHeader
      toggle={props.onToggleHeader}
      className={props.classNameBorder}
    >
      {props.titleHeader}
    </ModalHeader>
  )
}
const ActionModalEdit = (props) => {
  if (props.isModalVisible) {
    return (
      <ModalBody>
        <FormInput
          label='Update Nama Santri'
          placeholder='Nama Santri'
          name='name'
          onChange={props.onChange}
          value={props.postDataSantri.name}
        />
        <FormInput
          label='Update Jurusan Santri'
          placeholder='Jurusan Santri'
          name='programStudi'
          onChange={props.onChange}
          value={props.postDataSantri.programStudi}
        />
      </ModalBody>
    )
  } else {
    return null
  }
}
const ActionModalFooter = (props) => {
  return (
    <ModalFooter className={props.classNameBorder}>
      <ActionButton
        className='px-5'
        titleButton={props.titleButton}
        colorButton={props.colorButtonLeft}
        outline={props.DeleteModal}
        onClickButton={props.onClickButton}
        onToggleModal={props.onToggleModal}
      />
      <ActionButton
        titleButton='Batal'
        colorButton={props.colorButtonRight}
        outline={props.EditModal}
        onClickButton={props.onToggleModal}
        className='px-5'
      />
    </ModalFooter>
  )
}

ActionModal.propTypes = {
  onHandleInput: PropTypes.func,
  onToggleModal: PropTypes.func,
  isModalVisible: PropTypes.bool,
  onHandleDelete: PropTypes.func,
  postDataSantri: PropTypes.object,
  onHandleUpdate: PropTypes.func
}
ActionModalFooter.propTypes = {
  classNameBorder: PropTypes.string,
  titleButton: PropTypes.string,
  DeleteModal: PropTypes.bool,
  onClickButton: PropTypes.func,
  colorButtonRight: PropTypes.string,
  EditModal: PropTypes.bool,
  colorButtonLeft: PropTypes.string,
  onToggleModal: PropTypes.func
}
Tbody.propTypes = {
  postDataSantri: PropTypes.object,
  onHandleUpdate: PropTypes.func,
  onHandleInput: PropTypes.func,
  onHandleDelete: PropTypes.func,
  onDataUpdate: PropTypes.func
}
DataSantri.propTypes = {
  onHandleUpdate: PropTypes.func,
  onHandleInput: PropTypes.func,
  onHandleDelete: PropTypes.func,
  postDataSantri: PropTypes.object,
  onDataUpdate: PropTypes.func
}
export default DataSantri
