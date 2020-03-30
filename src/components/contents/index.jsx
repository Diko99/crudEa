import PropTypes from 'prop-types'
import React from 'react'
import DataSantri from './dataSantri'
import PageNotFound from './page404'

const Contents = (props) => {
  return (
    <div className='container-fluid'>
      {props.dataSantri
        ? (
          <DataSantri
            value={props.value}
            searchedSantri={props.searchedSantri}
            newDataSantri={props.newDataSantri}
            onHandleUpdate={props.onHandleUpdate}
            postDataSantri={props.postDataSantri}
            onHandleInput={props.onHandleInput}
            dataSantri={props.dataSantri}
            onHandleDelete={props.onHandleDelete}
            dataUpdate={props.dataUpdate}
            simpanDataSantri={props.simpanDataSantri}
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
  simpanDataSantri: PropTypes.func,
  dataUpdate: PropTypes.func,
  searchedSantri: PropTypes.func,
  newDataSantri: PropTypes.array,
  dataSantri: PropTypes.array,
  value: PropTypes.string,
  postDataSantri: PropTypes.object
}

export default Contents
