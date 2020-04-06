import PropTypes from 'prop-types'
import React from 'react'
import DataSantri from './dataSantri'
import PageNotFound from './page404'

const Contents = (props) => {
  return (
    <div className='container-fluid mt-3'>
      {props.dataSantri ? <DataSantri {...props} /> : <PageNotFound />}
    </div>
  )
}

Contents.propTypes = {
  dataSantri: PropTypes.array
}

export default Contents
