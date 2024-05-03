import React, { Fragment } from "react";
import "./style.css";

const Table = (props) => {
  const {
    headers,
    contents,
    emptyText = "Tidak ada data",
    border = false,
    isOverflowY = true,
    isOverflowX = true,
  } = props;
  return (
    <>
      <div
        className={`${isOverflowX && "overflow-x-auto"} ${
          isOverflowY && "overflow-y-auto"
        } hide-scroll relative ${
          border && "border-[1px] border-slate-300 rounded-lg"
        }`}
      >
        <table
          className={`table-fixed w-full text-left font-medium text-[#484848]`}
        >
          <thead className="font-bold sticky top-0 shadow z-10">
            <tr>
              {headers.map((header, index) => {
                return (
                  <th
                    scope="col"
                    className="py-5 px-5 whitespace-nowrap capitalize bg-slate-400"
                    key={`head${index}`}
                  >
                    {header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {contents?.length ? (
              contents.map((content, index) => {
                return (
                  <tr key={`row${index}`} className={`bg-white`}>
                    {content.map((item, idx) => {
                      return item?.text ? (
                        <td
                          className={`p-5 w-auto whitespace-nowrap truncate ${
                            item?.className ?? ""
                          }`}
                          key={`row-${index}-col${idx}`}
                        >
                          {item?.text}
                        </td>
                      ) : (
                        <td
                          className={`p-2 ${item?.className}`}
                          key={`row-${index}-col${idx}`}
                        >
                          {item?.custom}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={headers?.length}
                  className="text-neutral-500 text-center h-32"
                >
                  {emptyText}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
