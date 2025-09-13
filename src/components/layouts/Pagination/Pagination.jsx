import styles from "./Pagination.module.scss";

const Pagination = ({ table }) => {
  const pageCount = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex;

  const createPages = () => {
    const pages = [];
    const delta = 2;
    const left = Math.max(0, currentPage - delta);
    const right = Math.min(pageCount - 1, currentPage + delta);

    let l;

    for (let i = 0; i < pageCount; i++) {
      if (i === 0 || i === pageCount - 1 || (i >= left && i <= right)) {
        if (l !== undefined && i - l > 1) {
          pages.push("...");
        }
        pages.push(i);
        l = i;
      }
    }

    return pages;
  };

  const pages = createPages();

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Назад
      </button>

      {pages.map((page, idx) =>
        page === "..." ? (
          <span key={idx} className={styles.ellipsis}>
            …
          </span>
        ) : (
          <button
            key={idx}
            className={page === currentPage ? styles.activePage : ""}
            onClick={() => table.setPageIndex(page)}
          >
            {page + 1}
          </button>
        )
      )}

      <button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Вперёд
      </button>
    </div>
  );
};

export default Pagination;
