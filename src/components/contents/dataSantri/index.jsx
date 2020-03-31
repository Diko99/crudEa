import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'

const renderDataSantri = (props) => {
  return props.searchedSantri && props.value
    ? props.newDataSantri
    : props.dataSantri
}

let IdSantriToDelete

const DataSantri = (props) => {
  const [isEditModalVisible, setEditModal] = useState(false)
  const onToggleEditModal = () => setEditModal(!isEditModalVisible)

  const [isDeleteModalVisible, setDeleteModal] = useState(false)
  const onToggleDeleteModal = () => setDeleteModal(!isDeleteModalVisible)

  return (
    <Table hover>
      <thead>
        <tr className='text-white'>
          <th scope='col' style={{ width: '20%' }}>ID</th>
          <th scope='col' style={{ width: '30%' }}>Nama</th>
          <th scope='col' style={{ width: '25%' }}>Jurusan</th>
          <th scope='col' style={{ width: '25%' }} className='text-center'>Action</th>
        </tr>
      </thead>
      <tbody>
        {renderDataSantri(props).map((item, id) => (
          <tr key={id} className='text-white'>
            <th scope='row'>{item.id}</th>
            <td>{item.name}</td>
            <td>{item.programStudi}</td>
            <td>
              <div className='row justify-content-center'>
                <Button
                  color='danger'
                  className='mr-2'
                  onClick={() => {
                    onToggleDeleteModal()
                    IdSantriToDelete = item.id
                  }}
                >
                  Delete
                </Button>
                <Button
                  color='warning'
                  onClick={() => {
                    props.onDataUpdate(item)
                    onToggleEditModal()
                  }}
                >
                  Update
                </Button>

              </div>
              <div className='modal fade' id='dataDelete' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                <div className='modal-dialog' role='document'>
                  <div className='modal-content'>
                    <div className='modal-header justify-content-center'>
                      <h5 className='modal-title text-dark ' id='exampleModal'>
                        Yakin mau menghapus data santri ?
                      </h5>
                    </div>
                    <div className='modal-footer justify-content-center'>
                      <button className='btn btn-sm btn-default btn-danger' onClick={() => props.onHandleDelete(item.id)}>
                        Hapus
                      </button>
                      <button type='button' className='btn btn-secondary btn-sm' data-dismiss='modal'>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        ))}
        <div>
          <Modal
            isOpen={isEditModalVisible}
            toggle={onToggleEditModal}
          >
            <ModalHeader toggle={onToggleEditModal}>Update Data Santri</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for='exampleEmail'>Nama Santri</Label>
                  <Input
                    type='text'
                    name='name'
                    placeholder='Nama santri'
                    onChange={(e) => props.onHandleInput(e)}
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
                    onChange={(e) => props.onHandleInput(e)}
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button
                color='info'
                onClick={() => {
                  onToggleEditModal()
                  props.onHandleUpdate()
                }}
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
          </Modal>
        </div>

        <div>
          <Modal
            isOpen={isDeleteModalVisible}
            toggle={onToggleDeleteModal}
          >
            <ModalHeader toggle={onToggleDeleteModal}>Yakin mau menghapus ?</ModalHeader>
            <ModalFooter>
              <Button outline color='secondary' onClick={() => props.onHandleDelete(IdSantriToDelete)}>
                Delete
              </Button>
              <Button color='info' onClick={() => onToggleDeleteModal()}>
                Cancel
              </Button>

            </ModalFooter>
          </Modal>
        </div>
      </tbody>
    </Table>
  )
}

DataSantri.propTypes = {
  onHandleUpdate: PropTypes.func,
  onHandleInput: PropTypes.func,
  onHandleDelete: PropTypes.func,
  postDataSantri: PropTypes.object,
  value: PropTypes.string,
  onDataUpdate: PropTypes.func
}

export default DataSantri
