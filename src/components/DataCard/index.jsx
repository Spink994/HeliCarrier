import React from "react";
import DataCardComponent from "./DataCardComponent";

const DataCard = ({ groupedDataDate, singleGroupedData }) => {
  return (
    <div className="flex flex-col gap-6">
      {groupedDataDate && (
        <span className="max-w-[168px] py-2 px-4 font-semibold text-[20px] bg-neutral-500 text-slate-100">
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
