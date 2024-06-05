import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-white w-full text-center rounded-md py-3 bg-primary"
    >
      {text}
    </button>
  );
}
