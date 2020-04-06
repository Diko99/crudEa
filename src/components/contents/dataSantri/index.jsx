import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'reactstrap'
import { ActionButton, ActionModal } from '../../Action'

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
                className='text-white'
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
        titleAction='hapus'
        onHandleDelete={() => props.onHandleDelete(IdSantriToDelete)}
        isDeleteModalVisible={isDeleteModalVisible}
        onToggleModal={onToggleModal}
        className='px-5'
      />
      <ActionModal
        titleAction='edit'
        isEditModalVisible={isEditModalVisible}
        postDataSantri={props.postDataSantri}
        onClickButton={props.onHandleUpdate}
        onHandleInput={props.onHandleInput}
        onToggleModal={onToggleModal}
      />
    </tbody>
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
