import React, { useEffect, useContext } from "react";
import { ACTIONS, JobContext } from "../../ContextAPI/JobStateContext";
import DataCard from "../DataCard";
import DataCardQueryResult from "../DataCardQueryResult";

const DataList = ({ data, unGroupedData }) => {
  const { state, dispatch, searchQueryResult } = useContext(JobContext);

  //Storing the job data to my local storage
  useEffect(() => {
    localStorage.setItem("jobsData", JSON.stringify(unGroupedData));
  }, [unGroupedData]);

  useEffect(() => {
    const storedDataInLocalStorage = JSON.parse(
      localStorage.getItem("jobsData")
    );
    if (storedDataInLocalStorage)
      dispatch({
        type: ACTIONS.FETCHED_DATA,
        payload: storedDataInLocalStorage,
      });
  }, [data, dispatch]);

  return (
    <div className="grid grid-cols-1 gap-16 mx-auto">
      {searchQueryResult.length > 0 &&
      searchQueryResult.length < state.length - 3
        ? searchQueryResult.map((result, index) => {
            return <DataCardQueryResult key={index} data={result} />;
          })
        : Object.keys(data)
            .sort()
            .map((key) => {
              return (
                <DataCard
                  key={key}
                  groupedDataDate={key}
                  singleGroupedData={data[key]}
                />
              );
            })}
    </div>
  );
};

export default DataList;
