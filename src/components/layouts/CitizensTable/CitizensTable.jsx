import React, { useMemo, useState, useRef } from "react";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./CitizensTable.module.scss";

export default function CitizensTable() {
  const { citizens } = useSelector(({ citizens }) => citizens);

  const [search, setSearch] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [professionFilter, setProfessionFilter] = useState("");

  const filteredData = useMemo(() => {
    return citizens.filter((c) => {
      return (
        c.name.toLowerCase().includes(search.toLowerCase()) &&
        (!genderFilter || c.gender === genderFilter) &&
        (!regionFilter || c.region === regionFilter) &&
        (!professionFilter || c.profession === professionFilter)
      );
    });
  }, [citizens, search, genderFilter, regionFilter, professionFilter]);

  const columns = useMemo(
    () => [
      { header: "Аватар", accessorKey: "avatar" },
      { header: "Имя", accessorKey: "name" },
      { header: "Пол", accessorKey: "gender" },
      { header: "Дата рождения", accessorKey: "birthDate" },
      { header: "Профессия", accessorKey: "profession" },
      { header: "Регион", accessorKey: "region" },
      { header: "Действие", accessorKey: "action" },
    ],
    []
  );

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const parentRef = useRef();
  const rowVirtualizer = useVirtualizer({
    count: filteredData.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    overscan: 10,
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Поиск по имени..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <select
          value={genderFilter}
          onChange={(e) => {
            setGenderFilter(e.target.value);
          }}
        >
          <option value="">Все</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
        <select
          value={regionFilter}
          onChange={(e) => {
            setRegionFilter(e.target.value);
          }}
        >
          <option value="">Все регионы</option>
          {[...new Set(citizens.map((c) => c.region))].map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <select
          value={professionFilter}
          onChange={(e) => {
            setProfessionFilter(e.target.value);
          }}
        >
          <option value="">Все профессии</option>
          {[...new Set(citizens.map((c) => c.profession))].map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <span className={styles.resultsText}>
        Найдено: {filteredData.length} записей
      </span>

      <div className={styles.tableWrapper} ref={parentRef}>
        <div className={styles.tableHeader}>
          {columns.map((col) => (
            <div key={col.accessorKey} className={styles.th}>
              {col.header}
            </div>
          ))}
        </div>

        <div
          style={{
            position: "relative",
            height: rowVirtualizer.getTotalSize(),
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const row = table.getRowModel().rows[virtualRow.index];
            return (
              <div
                key={row.id}
                className={styles.tr}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                {row.getVisibleCells().map((cell) => {
                  const value =
                    cell.column.id === "avatar" ? (
                      <img
                        src={cell.getValue()}
                        alt="avatar"
                        className={styles.avatar}
                      />
                    ) : cell.column.id === "gender" ? (
                      cell.getValue() === "male" ? (
                        "Мужской"
                      ) : (
                        "Женский"
                      )
                    ) : cell.column.id === "action" ? (
                      <Link
                        to={`/citizens/${row.original.id}`}
                        className={styles.viewBtn}
                      >
                        Подробнее
                      </Link>
                    ) : (
                      cell.getValue()
                    );
                  return (
                    <div key={cell.id} className={styles.td}>
                      {value}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
