import React, { Component } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import ProptTypes from 'prop-types'

class MenuPagination extends Component {
  render () {
    const prevButton = {
      disabled: this.isDisabledPrevious(),
      onClick: this.props.onPreviousPage,
      title: 'Previous'
    }
    const nextButton = {
      disabled: this.isDisabledNext(),
      onClick: this.props.onNextPage,
      title: 'Next'
    }
    return (
      <Pagination
        aria-label='Page navigation example'
        className='float-right'
        size='sm'
      >
        {this.renderActionButton(prevButton)}
        {this.renderPaginationButton()}
        {this.renderActionButton(nextButton)}
      </Pagination>
    )
  }

  renderActionButton = (props = { active: false, id: 'id-kosongan' }) => {
    return (
      <PaginationItem
        key={props.index}
        disabled={props.disabled}
        active={props.active}
      >
        <PaginationLink
          id={props.id}
          onClick={props.onClick}
        >
          {props.title}
        </PaginationLink>

      </PaginationItem>
    )
  }

  renderPaginationButton = () => {
    return this.props.paginationNumbers.map((item, index) => {
      const paginationNumberButton = {
        key: index,
        active: this.props.currentPage === item,
        id: item,
        title: item,
        onClick: this.props.onMovePage
      }
      return this.renderActionButton(paginationNumberButton)
    })
  }

  isDisabledPrevious = () => {
    return this.props.currentPage <= 1
  }

  isDisabledNext = () => {
    return this.props.currentPage === this.props.paginationNumbers.length
  }
}
MenuPagination.proptTypes = {
  currentPage: ProptTypes.func,
  paginationNumbers: ProptTypes.array,
  onPreviousPage: ProptTypes.func,
  onNextPage: ProptTypes.func,
  onMovePage: ProptTypes.func
}

export default MenuPagination
