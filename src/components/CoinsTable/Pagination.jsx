import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
// Example items, to simulate fetching from another resources.


export default function Pagination({ itemsPerPage, setPage}) {

  const handlePageClick = (event) => {
    setPage(parseInt(event.selected + 1))
    const element = document.querySelector('.section-1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<MdNavigateNext className='text-2xl'/>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={10}
        previousLabel={<MdNavigateBefore className='text-2xl'/>}
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        pageClassName='page-num'
        previousLinkClassName='page-num'
        nextLinkClassName='page-num'
        activeLinkClassName='page-num-active'
      />
    </>
  );
}

