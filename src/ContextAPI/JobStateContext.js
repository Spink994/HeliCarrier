import React, { createContext, useReducer, useState } from "react";

export const JobContext = createContext();

export const ACTIONS = {
  FETCHED_DATA: "fetchedData",
  SEARCH_QUERY: "search params",
};

const JobStateContext = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryResult, setSearchQueryResult] = useState([]);

  const jobReducer = (state, { type, payload }) => {
    switch (type) {
      case ACTIONS.FETCHED_DATA:
        state = payload.jobs;
        return state;

      case ACTIONS.SEARCH_QUERY:
        const filteredState = state.filter(
          (job) =>
            job.title.toLowerCase().includes(payload.toLowerCase()) ||
            job.cities[0]?.name.toLowerCase().includes(payload.toLowerCase()) ||
            job.cities[0]?.country?.name
              .toLowerCase()
              .includes(payload.toLowerCase()) ||
            job.company?.name.toLowerCase().includes(payload.toLowerCase()) ||
            job.remotes[0]?.type.toLowerCase().includes(payload.toLowerCase())
        );

        setSearchQuery(payload);
        setSearchQueryResult(filteredState);
        return state;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(jobReducer, []);

  const allGlobalStates = {
    state,
    dispatch,
    searchQueryResult,
    searchQuery,
    setSearchQuery,
  };

  return (
    <JobContext.Provider value={allGlobalStates}>
      {children}
    </JobContext.Provider>
  );
};

export default JobStateContext;
