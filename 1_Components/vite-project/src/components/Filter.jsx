import React, { useState } from "react";
import details from "./details";

const Filter = () => {
  const [search, setSearch] = useState("");

  // Filtered list JSX ke bahar banai
  const filtered = details.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((value) => (
        <p key={value.id}>{value.name}</p>
      ))}
    </div>
  );
};

export default Filter;
