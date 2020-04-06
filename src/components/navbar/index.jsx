import React, { useState } from 'react'
import { Navbar } from 'reactstrap'
import PropTypes from 'prop-types'
import { ActionSearch, ActionButton, ActionModal } from '../Action'

const MenuBar = (props) => {
  const [isCreateModalVisible, setCreateModal] = useState(false)
  const onToggleCreateModal = () => setCreateModal(!isCreateModalVisible)

  return (
    <Navbar color='light' light expand='md' className='rounded'>
      <ActionButton
        titleButton='Tambah Santri'
        colorButton='info'
        onClickButton={onToggleCreateModal}
      />
      <ActionSearch {...props} />
      <ActionModal
        label='Tambah Santri'
        isCreateModalVisible={isCreateModalVisible}
        onToggleCreateModal={() => onToggleCreateModal()}
        onClick={() => {
          props.onHandlePost()
          onToggleCreateModal()
        }}
        {...props}
      />
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
