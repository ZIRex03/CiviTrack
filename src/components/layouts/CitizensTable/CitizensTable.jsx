import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

import styles from "./CitizensTable.module.scss";
import Pagination from "@/components/layouts/Pagination/Pagination";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CitizensTable() {
  const { citizens } = useSelector(({ citizens }) => citizens);
  const citizensData = citizens;

  const [search, setSearch] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [professionFilter, setProfessionFilter] = useState("");

  const regions = useMemo(
    () =>
      [...new Set(citizensData.map((c) => c.region))].sort((a, b) =>
        a.localeCompare(b)
      ),
    [citizensData]
  );

  const professions = useMemo(
    () =>
      [...new Set(citizensData.map((c) => c.profession))].sort((a, b) =>
        a.localeCompare(b)
      ),
    [citizensData]
  );

  const filteredData = useMemo(() => {
    return citizensData.filter((c) => {
      return (
        c.name.toLowerCase().includes(search.toLowerCase()) &&
        (!genderFilter || c.gender === genderFilter) &&
        (!regionFilter || c.region === regionFilter) &&
        (!professionFilter || c.profession === professionFilter)
      );
    });
  }, [citizensData, search, genderFilter, regionFilter, professionFilter]);

  const columns = useMemo(
    () => [
      {
        header: "Аватар",
        accessorKey: "avatar",
        cell: (info) => (
          <img src={info.getValue()} alt="avatar" className={styles.avatar} />
        ),
      },
      { header: "Имя", accessorKey: "name" },
      {
        header: "Пол",
        accessorKey: "gender",
        cell: (info) => (info.getValue() === "male" ? "Мужской" : "Женский"),
      },
      { header: "Дата рождения", accessorKey: "birthDate" },
      { header: "Профессия", accessorKey: "profession" },
      { header: "Регион", accessorKey: "region" },
      {
        header: "Действие",
        cell: (info) => (
          <Link
            to={`/citizens/${info.row.original.id}`}
            className={styles.viewBtn}
          >
            Подробнее
          </Link>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageIndex: 0, pageSize: 10 } },
  });

  const { pageIndex, pageSize } = table.getState().pagination;
  const total = table.getFilteredRowModel().rows.length;
  const start = pageIndex * pageSize + 1;
  const end = Math.min((pageIndex + 1) * pageSize, total);

  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Поиск по имени..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            table.setPageIndex(0);
          }}
        />

        <select
          value={genderFilter}
          onChange={(e) => {
            setGenderFilter(e.target.value);
            table.setPageIndex(0);
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
            table.setPageIndex(0);
          }}
        >
          <option value="">Все регионы</option>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

        <select
          value={professionFilter}
          onChange={(e) => {
            setProfessionFilter(e.target.value);
            table.setPageIndex(0);
          }}
        >
          <option value="">Все профессии</option>
          {professions.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <span className={styles.resultsText}>
        Показано {start}-{end} из {total}
      </span>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination table={table} />
      </div>
    </div>
  );
}
