

const Pagination = ({page, pagination, setPage}) => {
  return (

    
         <div className="flex justify-center items-center gap-5 mb-10">
        <button
          className="bg-blue-600 p-2 rounded text-white text-sm"
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          قبلی
        </button>
        <span >
          صفحه {pagination?.page} از {pagination?.totalPages}
        </span>
        <button
          className="bg-blue-600 p-2 rounded text-white text-sm"
          disabled={page >= pagination?.totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          بعدی
        </button>
      </div>
    
      
  )
}

export default Pagination



// const Pagination = ({ page, pagination, setPage }) => {
//   const currentPage = pagination?.page
//   const totalPages = pagination?.totalPages

//   return (
//     <div className="flex justify-center items-center gap-5 mb-10">
//       <button
//         className="bg-blue-600 p-2 rounded text-white text-sm"
//         disabled={currentPage <= 1}
//         onClick={() => setPage((prev) => prev - 1)}
//       >
//         قبلی
//       </button>

//       <span>
//         صفحه {currentPage} از {totalPages}
//       </span>

//       <button
//         className="bg-blue-600 p-2 rounded text-white text-sm"
//         disabled={currentPage >= totalPages}
//         onClick={() => setPage((prev) => prev + 1)}
//       >
//         بعدی
//       </button>
//     </div>
//   );
// };

// export default Pagination;