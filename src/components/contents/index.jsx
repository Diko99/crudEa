import PropTypes from 'prop-types'
import React from 'react'
import DataSantri from './dataSantri'
import PageNotFound from './page404'

const Contents = (props) => {
  return (
    // ternary logical
    <div className='container-fluid mt-3'>
      {props.dataSantri ? <DataSantri {...props} /> : <PageNotFound />}
    </div>
  )
}

Contents.propTypes = { // validasi props
  dataSantri: PropTypes.array
}

export default Contents
