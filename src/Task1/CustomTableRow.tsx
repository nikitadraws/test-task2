import React from "react";
import { RowCell } from "./data";
import "./styles.scss";

interface CustomTableRowProps {
  cell: RowCell;
}

// конвертация получаемых данных для вывода в ячейку строки таблицы
export const CustomTableRow = ({ cell }: CustomTableRowProps) => {
  if (cell === undefined) {
    return <div className="custom-table__row-cell"></div>;
  }

  if (typeof cell === "boolean") {
    return (
      <div className="custom-table__row-cell custom-table__row-cell_center">
        {!cell
          ? String.fromCodePoint(parseInt("0x2610 ", 16))
          : String.fromCodePoint(parseInt("0x2714  ", 16))}
      </div>
    );
  }

  if (cell instanceof Date) {
    let date = new Date();

    const offset = date.getTimezoneOffset();
    date = new Date(date.getTime() - offset * 60 * 1000);

    return (
      <div className="custom-table__row-cell">
        {" "}
        {date.toISOString().split("T")[0]}
      </div>
    );
  }

  if (Array.isArray(cell)) {
    return (
      <div className="custom-table__row-cell">
        <ul className="custom-table__list">
          {cell.map((val) => (
            <li className="custom-table__list-item" title={val!.toString()}>
              {val!.toString()}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (typeof cell === "string" && cell.match(new RegExp("^https?://"))) {
    return (
      <div className="custom-table__row-cell">
        <a href={cell} target="_blanket" title={cell}>
          {cell}
        </a>
      </div>
    );
  }

  return <div className="custom-table__row-cell"> {cell.toString()}</div>;
};
