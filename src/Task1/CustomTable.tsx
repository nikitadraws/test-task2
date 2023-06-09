import React, { useEffect, useState } from "react";
import { Column, Row, rowColor } from "./data";
import { CustomTableRow } from "./CustomTableRow";
import "./styles.scss";

interface CustomTableProps {
  cols: Column[];
  items: Row[];
  pageSize: number | null;
}

export const CustomTable = ({ cols, items, pageSize }: CustomTableProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPageCount = pageSize ? Math.ceil(items.length / pageSize) : 1;

  // высчитываем какие строки будут показаны на странице если включена пагинация
  const itemsSlice = pageSize
    ? items.slice(pageSize * currentPage - pageSize, pageSize * currentPage)
    : items;

  // вытаскиваем state если имеется и преобразуем строки для вывода в таблицу
  const covertedRows = itemsSlice.map((row) => {
    const { state, ...rest } = row;
    return (
      <div
        className="custom-table__row"
        style={{ backgroundColor: row.state && rowColor[row.state] }}
      >
        {Object.values(rest).map((cell) => (
          <CustomTableRow cell={cell} />
        ))}
      </div>
    );
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize, items.length]);

  return (
    <>
      <div className="custom-table-wrapper">
        <div className="custom-table">
          <div className="custom-table__header">
            {cols.map((name: string) => {
              return <div className="custom-table__header-cell">{name}</div>;
            })}
          </div>
          {covertedRows.length ? (
            covertedRows
          ) : (
            <div className="custom-table__no-data">Нет данных</div>
          )}
        </div>
        {pageSize && (
          <div className="custom-table__pagination">
            <div
              onClick={() =>
                setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1))
              }
              className="custom-table__pagination_toggle"
            >
              {currentPage > 1 && "назад"}
            </div>
            {currentPage}
            <div
              onClick={() =>
                setCurrentPage((prev) =>
                  prev < totalPageCount ? prev + 1 : prev
                )
              }
              className="custom-table__pagination_toggle"
            >
              {currentPage < totalPageCount && totalPageCount !== 1 && "дальше"}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
