import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label
} from 'reactstrap'

const MenuBar = (props) => {
  // for navbar
  const [isNavbarVisible, setNavbarOpen] = useState(false)
  const onToggleNavbar = () => setNavbarOpen(!isNavbarVisible)
  // for modal
  const [isCreateModalVisible, setCreateModal] = useState(false)
  const onToggleCreateModal = () => setCreateModal(!isCreateModalVisible)
  return (
    <Navbar color='light' light expand='md' className='rounded'>
      <Button
        color='info'
        size='md'
        onClick={onToggleCreateModal}
      >
        Tambah Santri
      </Button>
      <NavbarToggler onClick={onToggleNavbar} />
      <Collapse isOpen={isNavbarVisible} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <Input
              type='search'
              placeholder='cari santri'
              className='cari santri'
              value={props.value}
              onChange={(e) => props.onSearchSantri(e)}
            />
          </NavItem>
        </Nav>
      </Collapse>
      {/* modal */}
      <div>
        <Modal
          isOpen={isCreateModalVisible}
          toggle={onToggleCreateModal}
        >
          <ModalHeader toggle={onToggleCreateModal}>Tambah Santri</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for='exampleEmail'>Nama Santri</Label>
                <Input
                  type='text'
                  name='name'
                  placeholder='Nama Lengkap'
                  value={props.postDataSantri.name}
                  onChange={(e) => props.onHandleInput(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for='exampleEmail'>Jurusan Santri</Label>
                <Input
                  type='text'
                  name='programStudi'
                  placeholder='Program Studi'
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
                props.onHandlePost()
                onToggleCreateModal()
              }}
            >
              Tambah Santri
            </Button>
            <Button
              color='secondary'
              outline
              onClick={onToggleCreateModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </Navbar>
  )
}

MenuBar.propTypes = {
  onHandleInput: PropTypes.func,
  postDataSantri: PropTypes.object,
  onSearchSantri: PropTypes.func,
  onHandlePost: PropTypes.func,
  value: PropTypes.string
}

export default MenuBar
