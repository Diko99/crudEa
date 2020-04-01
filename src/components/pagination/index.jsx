import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import ProptTypes from 'prop-types'

const MenuPagination = (props) => {
  return (
    <Pagination aria-label='Page navigation example' className='float-right'>
      <PaginationItem disabled={props.currentPage <= 1}>
        <PaginationLink onClick={() => props.onPreviousPage()}>
          Previous
        </PaginationLink>
      </PaginationItem>

      {props.paginationNumbers.map((item, index) => (
        <PaginationItem key={index} active={props.currentPage === item}>
          <PaginationLink id={item} onClick={(event) => props.onMovePage(event)}>
            {item}
          </PaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem disabled={props.currentPage >= props.paginationNumbers.length}>
        <PaginationLink onClick={() => props.onNextPage()}>
          Next
        </PaginationLink>
      </PaginationItem>

    </Pagination>
  )
}

MenuPagination.proptTypes = {
  currentPage: ProptTypes.func,
  paginationNumbers: ProptTypes.array,
  onPreviousPage: ProptTypes.func,
  onNextPage: ProptTypes.func,
  onMovePage: ProptTypes.func
}

export default MenuPagination
