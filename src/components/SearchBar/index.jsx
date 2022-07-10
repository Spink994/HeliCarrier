import React, { useState, useContext } from "react";
import { ACTIONS, JobContext } from "../../ContextAPI/JobStateContext";

const SearchBar = () => {
  const { dispatch } = useContext(JobContext);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.SEARCH_QUERY, payload: search });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="min-w-[300px] md:w-[500px] max-w-[500px] mx-auto border border-slate-500"
    >
      <input
        className="w-full outline-none border-none p-4 bg-transparent text-slate-500"
        type="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          if (e.target.value === "")
            dispatch({ type: ACTIONS.SEARCH_QUERY, payload: "" });
        }}
        placeholder="Search by e.g. tag, country, cities, type etc..."
        name="search-bar"
        id="search-bar"
      />
    </form>
  );
};

export default SearchBar;