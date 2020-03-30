import PropTypes from 'prop-types'
import React from 'react'
import DataSantri from './dataSantri'
import PageNotFound from './page404'

const Contents = (props) => {
  return (
    <div className='container-fluid'>
      {props.dataSantri
        ? <DataSantri
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
        // eslint-disable-next-line react/jsx-closing-bracket-location
        />
        : <PageNotFound />}
    </div>
  )
}

Contents.propTypes = {
  onHandleUpdate: PropTypes.func,
  onHandleInput: PropTypes.func,
  onHandleDelete: PropTypes.func,
  simpanDataSantri: PropTypes.array,
  searchedSantri: PropTypes.array,
  newDataSantri: PropTypes.array,
  value: PropTypes.string,
  postDataSantri: PropTypes.array,
  dataSantri: PropTypes.array,
  dataUpdate: PropTypes.func
}

export default Contents
