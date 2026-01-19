import React, { useState } from "react";

const Pagging = () => {
  const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
  const itemsPerPage = 2;

  const [page, setPage] = useState(0);

  const start = page * itemsPerPage;
  const currentItems = data.slice(start, start + itemsPerPage);

  return (
    <div>
      <ul>
        {currentItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 0}
      >
        Previous
      </button>

      <button
        onClick={() => setPage(page + 1)}
        disabled={start + itemsPerPage >= data.length}
      >
        Next
      </button>
    </div>
  );
};

export default Pagging;
