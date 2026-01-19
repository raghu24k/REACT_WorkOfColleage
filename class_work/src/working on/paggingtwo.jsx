import React, { useState } from "react";

const Paggingtwo = () => {
  const data = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20"
  ];

  const recordsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(data.length / recordsPerPage);

  const onClickNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onClickPrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Pagination Component</h2>
      <ul>
        {data
          .slice(
            currentPage * recordsPerPage,
            currentPage * recordsPerPage + recordsPerPage
          )
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <button onClick={onClickPrevious} disabled={currentPage === 0}>
          Previous
        </button>
        <span style={{ margin: "0 15px" }}>
          Page {currentPage + 1} / {totalPages}
        </span>
        <button onClick={onClickNext} disabled={currentPage === totalPages - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Paggingtwo;
