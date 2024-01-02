import classes from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, paginate }) => {
  console.log(totalPages);
  return (
    <div className={classes["pagination-container"]}>
      <button
        onClick={() => paginate(currentPage - 1)}
        className={`${classes.previous} ${classes.round}`}
        disabled={currentPage === 1}
      >
        &#8249;
      </button>
      <button
        onClick={() => paginate(currentPage + 1)}
        className={`${classes.next} ${classes.round}`}
        disabled={currentPage === totalPages}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Pagination;
