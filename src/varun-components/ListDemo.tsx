import React from "react";

export default function ListDemo() {
  const names = ["Hyd", "Bng", "Delhi", "Agra", "Bombay"];

  return (
    <div>
      <ul className="list-group">
        {names.map((i) => (
          <div>
            <li className="list-group-item">{i}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
