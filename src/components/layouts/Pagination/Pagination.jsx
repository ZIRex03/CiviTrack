import styles from "./Pagination.module.scss";

const Pagination = ({ page, pageCount, setPage }) => {
  const createPages = () => {
    const pages = [];
    const delta = 2; // сколько страниц показывать вокруг текущей
    const left = Math.max(1, page + 1 - delta);
    const right = Math.min(pageCount, page + 1 + delta);
    let l;

    for (let i = 1; i <= pageCount; i++) {
      if (i === 1 || i === pageCount || (i >= left && i <= right)) {
        if (l !== undefined && i - l > 1) pages.push("...");
        pages.push(i);
        l = i;
      }
    }
    return pages;
  };

  const pages = createPages();

  return (
    <div className={styles.pagination}>
      <button onClick={() => setPage(page - 1)} disabled={page === 0}>
        Назад
      </button>

      {pages.map((p, idx) =>
        p === "..." ? (
          <span key={idx} className={styles.ellipsis}>…</span>
        ) : (
          <button
            key={idx}
            className={p - 1 === page ? styles.activePage : ""}
            onClick={() => setPage(p - 1)}
          >
            {p}
          </button>
        )
      )}

      <button onClick={() => setPage(page + 1)} disabled={page === pageCount - 1}>
        Вперёд
      </button>
    </div>
  );
};

export default Pagination;
