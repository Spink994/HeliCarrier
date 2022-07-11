import React from "react";
import DataCardComponent from "./DataCardComponent";

const DataCard = ({ groupedDataDate, singleGroupedData }) => {
  return (
    <div
      className="flex flex-col gap-6"
      onClick={() => alert("No data Available at the moment...")}
    >
      {groupedDataDate && (
        <span className="max-w-[168px] py-2 px-4 font-semibold border border-slate-300 text-[20px] text-slate-400">
          {groupedDataDate}
        </span>
      )}

      {singleGroupedData &&
        singleGroupedData.map((data, index) => {
          return <DataCardComponent data={data} key={index} />;
        })}
    </div>
  );
};

export default DataCard;
