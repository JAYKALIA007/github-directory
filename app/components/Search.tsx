"use-client";
import React, { Dispatch, SetStateAction, useState } from "react";
type SearchBarPropsType = {
  query: string;
  onChange: Dispatch<SetStateAction<string>>;
};

export const SearchBar: React.FC<SearchBarPropsType> = ({
  query,
  onChange,
}) => {
  return (
    <div>
      <input
        className="w-60 h-6 p-4 border border-gray-600 rounded-md my-4 text-sm"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search repos..."
      />
    </div>
  );
};
