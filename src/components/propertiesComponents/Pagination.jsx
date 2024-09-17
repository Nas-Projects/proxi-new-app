const Pagination = ({ page, pageSize, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <section className='container mx-auto flex justify-center items-center my-8'>
      <button
        className='mr-2 px-2 py-1 lg:py-2 px-3 border border-gray-300 rounded'
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        Previous
      </button>
      <span className='mx-2 text-slate-600'>
        Page {page} of {totalPages}
      </span>
      <button
         className='mr-2 px-2 py-1 lg:py-2 px-4 border border-gray-300 rounded'
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </section>
  );
};
export default Pagination;
