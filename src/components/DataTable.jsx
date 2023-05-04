import React, { useState } from 'react';
import {Pagination, Table} from 'react-bootstrap';

function DataTable({ columns, data, rowsPerPage, initialPage }) {
    const [currentPage, setCurrentPage] = useState(initialPage);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    const pages = Math.ceil(data.length / rowsPerPage);
  
    const slicedData = data.slice(
      (currentPage - 1) * rowsPerPage,
      currentPage * rowsPerPage
    );
  
    const rows = slicedData.map((row, index) => {
      const rowData = Object.values(row);
      return (
        <tr key={index}>
          {rowData.map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      );
    });
  
    const pageItems = [];
    const ellipsisInterval = 15;
    const maxPagesToShow = 10;
    let startPage = currentPage - Math.floor(maxPagesToShow / 2);
    let endPage = currentPage + Math.floor(maxPagesToShow / 2);
  
    if (startPage < 1) {
      startPage = 1;
      endPage = startPage + maxPagesToShow - 1;
    } else if (endPage > pages) {
      endPage = pages;
      startPage = endPage - maxPagesToShow + 1;
    }
  
    pageItems.push(
      <Pagination.Item
        key={'first'}
        active={1 === currentPage}
        onClick={() => handlePageChange(1)}
      >
        First
      </Pagination.Item>
    );
  
    if (startPage > 2) {
      pageItems.push(<Pagination.Ellipsis key="start-ellipsis" />);
    }
  
    for (let i = startPage; i <= endPage; i++) {
      pageItems.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
  
    if (endPage < pages - 1 && endPage + ellipsisInterval < pages) {
      pageItems.push(<Pagination.Ellipsis key="middle-ellipsis" />);
      pageItems.push(
        <Pagination.Item
          key={pages}
          active={pages === currentPage}
          onClick={() => handlePageChange(pages)}
        >
          {pages}
        </Pagination.Item>
      );
    } else if (endPage + ellipsisInterval >= pages) {
      for (let i = endPage + 1; i <= pages; i++) {
        pageItems.push(
          <Pagination.Item
            key={i}
            active={i === currentPage}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </Pagination.Item>
        );
      }
    } else if (endPage + ellipsisInterval < pages) {
      const nextPage = endPage + ellipsisInterval;
      pageItems.push(<Pagination.Ellipsis key="end-ellipsis" />);
      pageItems.push(
        <Pagination.Item
          key={pages}
          active={pages === currentPage}
          onClick={() => handlePageChange(pages)}
        >
          {pages}
        </Pagination.Item>
      );
    }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <Pagination>{pageItems}</Pagination>
    </div>
  );
}

export default DataTable;
