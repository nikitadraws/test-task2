import React, { useState } from "react";
import { CustomTable } from "./CustomTable";
import { Column, Row, State, initialColumns, initialItems, row } from "./data";
import "./styles.scss";

export const Task1 = () => {
  const [items, setItems] = useState<Row[]>(initialItems);
  const [cols, setCols] = useState<Column[]>(initialColumns);
  const [pageSize, setPageSize] = useState<number>(10);
  const [pagination, setPagination] = useState<boolean>(false);
  const [customField, setCustomField] = useState<number>(0);

  const getRowWithState = (state?: State) => {
    if (items.length) {
      return { ...items[0], state };
    }
    setItems(initialItems);
    setCols(initialColumns);
    return { ...row, state };
  };

  return (
    <>
      <div className="settings-container">
        <div className="settings">
          <div
            className="settings__row"
            onClick={() =>
              setItems((prev) => [getRowWithState(State.DANGER), ...prev])
            }
          >
            Добавить строку со state = danger
          </div>
          <div
            className="settings__row"
            onClick={() =>
              setItems((prev) => [getRowWithState(State.WARNING), ...prev])
            }
          >
            Добавить строку со state = warning
          </div>
          <div
            className="settings__row"
            onClick={() =>
              setItems((prev) => [getRowWithState(State.NORMAL), ...prev])
            }
          >
            Добавить строку со state = normal
          </div>
          <div
            className="settings__row"
            onClick={() => setItems((prev) => [getRowWithState(), ...prev])}
          >
            Добавить строку без state
          </div>
          <div
            className="settings__row"
            onClick={() => setItems((prev) => prev.slice(1))}
          >
            Удалить строку
          </div>
          <div
            className="settings__row"
            onClick={() => {
              setCols((prev) => ["new field", ...prev]);
              setItems((prev) =>
                prev.map((el) => {
                  setCustomField((prev) => prev + 1);
                  return {
                    [`newField${customField}`]: "new table cell",
                    ...el,
                  };
                })
              );
            }}
          >
            Добавить колонку
          </div>
          <div
            className="settings__row"
            onClick={() => {
              setCols((prev) => (prev.length > 2 ? prev.slice(1) : prev));
              setItems((prev) =>
                cols.length > 2
                  ? prev.map((el) => {
                      const preparedObj = Object.entries(el);
                      const convertedObj = preparedObj.slice(1);

                      return Object.fromEntries(convertedObj);
                    })
                  : prev
              );
            }}
          >
            Удалить колонку
          </div>
        </div>
        <div
          onClick={() => {
            setItems(initialItems);
            setCols(initialColumns);
          }}
          className="settings settings__row"
        >
          Reset (всего строк {items.length})
        </div>
        <div className="settings">
          <div>
            <label htmlFor="pagination">
              <input
                type="checkbox"
                id="pagination"
                onChange={() => setPagination((prev) => !prev)}
                checked={pagination}
              />{" "}
              включить пагинацию
            </label>
            {pagination && (
              <>
                <div>{`pageSize: ${pageSize}`}</div>
                <div
                  className="settings__row"
                  onClick={() =>
                    setPageSize((prev) => (prev > 5 ? prev - 5 : 5))
                  }
                >
                  -5 строк на странице
                </div>
                <div
                  className="settings__row"
                  onClick={() => {
                    setPageSize((prev) => prev + 5);
                  }}
                >
                  +5 строк на странице
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <CustomTable
        cols={cols}
        items={items}
        pageSize={pagination ? pageSize : null}
      />
    </>
  );
};
