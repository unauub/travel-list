import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items 🤦‍♂️</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything 💖"
          : `You have ${numItems} items on your list, nd you already packed ${""}
          ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
