<<<<<<< HEAD
import React, { useMemo, useEffect } from "react";
=======
import React, { useEffect } from "react";
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
} from "react-table";
import AOS from "aos";
import "aos/dist/aos.css";

// Componente de Búsqueda Global
function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <input
      value={globalFilter || ""}
      onChange={(e) => setGlobalFilter(e.target.value || undefined)}
      placeholder="Buscar..."
      className="form-control mb-3"
    />
  );
}

// Componente de Tabla con AOS
function DataTable({ columns, data }) {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
<<<<<<< HEAD
      initialState: { pageSize: 5 }, // Número de filas por página
=======
      initialState: { pageSize: 5 },
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex, globalFilter } = state;

  return (
    <div className="container p-3">
      {/* Barra de búsqueda */}
      <GlobalFilter
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

      {/* Tabla responsiva */}
      <div className="table-responsive">
        <table
          {...getTableProps()}
          className="table table-striped table-bordered table-hover"
        >
<<<<<<< HEAD
          <thead className="table-dark  " data-aos="fade-left">
            {headerGroups.map((headerGroup) => (
              <tr 
                {...headerGroup.getHeaderGroupProps()}
                key={headerGroup.id}
=======
          <thead className="table-dark" data-aos="fade-left">
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                key={headerGroup.getHeaderGroupProps().key} 
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
                data-aos="fade-left"
              >
                {headerGroup.headers.map((column) => (
                  <th
<<<<<<< HEAD
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.id}
                  className="text-center align-middle"
                  data-aos="fade-left"
                >
                  {column.render("Header")}
                  <span style={{ display: "block", textAlign: "center" }}>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : " ⬍"}
                  </span>
                </th>
                
=======
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={column.id}
                    className="text-center align-middle"
                    data-aos="fade-left"
                  >
                    {column.render("Header")}
                    <span style={{ display: "block", textAlign: "center" }}>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : " ⬍"}
                    </span>
                  </th>
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
<<<<<<< HEAD
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id} data-aos="fade-left">
=======
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  key={row.original.id || row.getRowProps().key} 
                  data-aos="fade-left"
                >
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      key={cell.column.id}
                      className="text-center align-middle"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
<<<<<<< HEAD
          <tfoot >
            <tr >
              <td colSpan="1" className="bg-dark text-white">
                <div className="d-flex align-items-center justify-content-center">
                 Total: {data.length}
=======
          <tfoot>
            <tr>
              <td colSpan={columns.length} className="bg-dark text-white">
                <div className="d-flex align-items-center justify-content-center">
                  Total: {data.length}
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

<<<<<<< HEAD
    {/* Controles de paginación */}
<div className="container table-pagination">
  <div className="row justify-content-center">
    <div className="col-auto">
      <button
        className="btn bg-dark text-white"
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        Anterior
      </button>
    </div>
    <div className="col-auto d-flex align-items-center">
      <span className="bg-dark rounded text-white px-3 py-2 text-center">
        Página <strong>{pageIndex + 1} de {pageOptions.length}</strong>
      </span>
    </div>
    <div className="col-auto">
      <button
        className="btn bg-dark text-white"
        onClick={() => {
          nextPage();
          AOS.refresh(); // Refresca AOS al cambiar de página
        }}
        disabled={!canNextPage}
      >
        Siguiente
      </button>
    </div>
  </div>
</div>

=======
      {/* Controles de paginación */}
      <div className="container table-pagination">
        <div className="row justify-content-center">
          <div className="col-auto">
            <button
              className="btn bg-dark text-white"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Anterior
            </button>
          </div>
          <div className="col-auto d-flex align-items-center">
            <span className="bg-dark rounded text-white px-3 py-2 text-center">
              Página <strong>{pageIndex + 1} de {pageOptions.length}</strong>
            </span>
          </div>
          <div className="col-auto">
            <button
              className="btn bg-dark text-white"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
    </div>
  );
}

export default DataTable;
