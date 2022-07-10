import React from "react";

const DataCardQueryResult = ({ data }) => {
  return (
    <div className="flex flex-1 border border-slate-300 justify-between flex-wrap w-full gap-10 items-center cursor-pointer p-4 hover:bg-slate-100">
      <div className="flex justify-center items-center h-20 w-20 bg-neutral-300">
        {data?.company?.logoUrl === null ? (
          <p className="uppercase font-bold text-[22px]">
            {(data?.company?.name).substring(0, 2)}
          </p>
        ) : (
          <img
            src={data?.company?.logoUrl}
            alt={(data?.company?.name).substring(0, 2).toUpperCase()}
          />
        )}
      </div>
      <div className="flex flex-1 items-center flex-wrap gap-4">
        <div className="flex w-[200px] flex-col">
          <h1 className="text-xl font-bold p-0 m-0 leading-5 break-words max-w-[200px]">
            {data?.title}
          </h1>
          <span className="text-slate-400 leading-8">
            {data?.company?.name}
          </span>

          {
            <span key={data?.id} className="text-slate-500 leading-8">
              {data?.remotes[0]?.name || "Onsite"}
            </span>
          }
        </div>
        <div className="flex flex-1 gap-2 max-w-[450px] items-center flex-wrap">
          {data?.tags?.map((tag) => {
            return (
              <span
                key={tag.id}
                className="text-sm text-slate-500 border border-neutral-500 max-w-max py-1 px-4"
              >
                {tag.name}
              </span>
            );
          })}
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex flex-1 justify-center items-center h-10 w-10 bg-teal-300"></div>
          <h2 className="text-slate-600 font-medium">
            {data?.cities[0]?.name || "Not Available"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DataCardQueryResult;
