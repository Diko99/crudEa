import PropTypes from 'prop-types'
import React from 'react'
import DataSantri from './dataSantri'
import PageNotFound from './page404'

const Contents = (props) => {
  return (
    <div className='container-fluid mt-3'>
      {props.dataSantri
        ? (
          <DataSantri
            value={props.value}
            dataSantri={props.dataSantri}
            newDataSantri={props.newDataSantri}
            postDataSantri={props.postDataSantri}
            onDataUpdate={props.onDataUpdate}
            onHandleInput={props.onHandleInput}
            onHandleUpdate={props.onHandleUpdate}
            onHandleDelete={props.onHandleDelete}
          />
        )
        : <PageNotFound />}
    </div>
  )
}

Contents.propTypes = {
  onHandleUpdate: PropTypes.func,
  onHandleInput: PropTypes.func,
  onHandleDelete: PropTypes.func,
  onDataUpdate: PropTypes.func,
  newDataSantri: PropTypes.array,
  dataSantri: PropTypes.array,
  value: PropTypes.string,
  postDataSantri: PropTypes.object
}

export default Contents
