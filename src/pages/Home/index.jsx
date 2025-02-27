import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useQuery } from "@apollo/react-hooks";
import getData from "../../graphql/getData";
import Container from "../../components/Container";
import DataList from "../../components/DataList";
import Filters from "../../components/Filters";
import SearchBar from "../../components/SearchBar";
import RestructuredData from "../../Helpers/GroupBy";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { JobContext } from "../../ContextAPI/JobStateContext";
import Downloadbutton from "../../components/Downloadbutton";

const Home = () => {
  //This portion of code is coming from the ContextAPI i created to manage my app's state
  const { searchQueryResult, searchQuery } = useContext(JobContext);
  const [response, setResponse] = useState(false);
  const [checkInstallationPrompt, setCheckInstallationPrompt] = useState(false);

  //getting the loading state and data from the graphql server
  const { loading, data, error } = useQuery(getData);

  const [groupedData, setGroupedData] = useState([]);

  useEffect(() => {
    // A helper function that helps me restructure the my data according to i want it
    // to be grouped; In this case, the date it was created.
    if (!error && !loading && data)
      setGroupedData(RestructuredData("createdAt", data.jobs));
  }, [data, error, loading]);

  useEffect(() => {
    const responseFromStorage = JSON.parse(localStorage.getItem("response"));
    if (responseFromStorage) {
      setResponse(responseFromStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("response", JSON.stringify(response));
  }, [response]);

  useEffect(() => {
    window.addEventListener("load", () => {
      navigator.serviceWorker.ready.then((worker) => {
        if (worker.waiting !== null) {
          console.log("A new update is available");
          setTimeout(() => {
            window.location.reload(true);
          }, 2300);
        }
      });
    });

    const checkResponse = localStorage.getItem("A2HS_prompt");
    if (checkResponse) setResponse(true);
    else setResponse(false);
  }, []);

  // Checking if the installation prompt is ready to be invoked
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setCheckInstallationPrompt(true);
    });
  }, [checkInstallationPrompt]);

  //The spinner's dependencies
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "green",
    borderWidth: "15px",
  };

  return (
    <div className="relative max-w-full mt-8">
      {loading ? (
        <div className="max-w-full h-screen flex justify-center items-center">
          <ClipLoader loading={loading} cssOverride={override} size={150} />
        </div>
      ) : (
        <Container>
          <div className="flex flex-col align-middle space-y-8 justify-center">
            <SearchBar />
            {searchQueryResult.length > 0 && searchQuery !== "" && (
              <p className="mx-auto text-xl font-bold text-slate-400">
                Showing results for "{searchQuery}"
              </p>
            )}
            {searchQueryResult.length === 0 && searchQuery !== "" && (
              <div className="flex flex-col gap-2 justify-center mx-auto text-slate-400">
                <p className="mx-auto text-xl font-bold text-slate-400 text-center">
                  Cannot find results for "{searchQuery}"{" "}
                </p>
                <span className="text-center">
                  Please check your search parameters and try again
                </span>
                <p className="text-center">
                  Try "London", "Javascript, "Germany", etc...
                </p>
              </div>
            )}
            <Filters />
            <DataList data={groupedData || null} unGroupedData={data || null} />
          </div>
        </Container>
      )}
      {checkInstallationPrompt && (
        <Downloadbutton response={response} setResponse={setResponse} />
      )}
    </div>
  );
};

export default Home;
