import React, { useContext } from "react";
import { ACTIONS, JobContext } from "../../ContextAPI/JobStateContext";
import Button from "../Button";

const Filters = () => {
  const { dispatch } = useContext(JobContext);

  const handleFilter = (payload) => {
    dispatch({ type: ACTIONS.SEARCH_QUERY, payload: payload });
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 overflow-auto mx-auto">
      <Button onClick={() => handleFilter("")}>All</Button>
      <Button onClick={() => handleFilter("remote")}>Remote</Button>
      <Button onClick={() => handleFilter("python")}>Python</Button>
      <Button onClick={() => handleFilter("react")}>React</Button>
      <Button onClick={() => handleFilter("javascript")}>JavaScript</Button>
      <Button onClick={() => handleFilter("typescript")}>TypeScript</Button>
    </div>
  );
};

export default Filters;
