const RestructuredData = (key, allData) => {
  return allData.reduce((cachedData, data) => {
    const newData = data[key].split("T")[0];

    if (cachedData[newData] == null) cachedData[newData] = [];
    cachedData[newData].push(data);

    return cachedData;
  }, {});
};

export default RestructuredData;
