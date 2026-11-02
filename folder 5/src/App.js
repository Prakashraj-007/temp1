
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  var employees = [
    "John Doe",
    "Jane Smith",
    "Mike Johnson",
    "Emily Davis",
    "James Brown",
    "Jennifer Wilson",
    "Paul Garcia",
    "Laura Martinez"
  ];

  const [query, setQuery] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  useEffect(function () {
    var q = query.toLowerCase();

    var result = employees.filter(function (employee) {
      return employee.toLowerCase().includes(q);
    });

    setFilteredEmployees(result);
  }, [query]);

  function handleSearch(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="app">
      <h1>Employee Directory</h1>

      <input
        className="search"
        type="text"
        placeholder="Search employees..."
        value={query}
        onChange={handleSearch}
      />

      <div className="list">
        {filteredEmployees.map(function (employee, index) {
          return (
            <div className="employee" key={index}>
              {employee}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
