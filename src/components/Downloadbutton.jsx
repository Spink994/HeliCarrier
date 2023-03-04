import React, { useEffect } from "react";
import { ImDownload } from "react-icons/im";
import { deferredPrompt } from "../serviceWorkerRegistration";

const Downloadbutton = ({ setResponse }) => {
  // Installation must be done by a user gesture! Here, the button click
  const handleBeforeInstall = (e) => {
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
        setResponse(true);
      } else {
        console.log("User dismissed the A2HS prompt");
        setResponse(false);
      }
      deferredPrompt = null;
    });
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      navigator.serviceWorker.ready.then((data) => console.log(data));
      console.log(navigator.serviceWorker.getRegistration());
    });
  }, []);

  return (
    <button
      onClick={handleBeforeInstall}
      className="flex justify-center rounded-full items-center fixed bottom-8 right-8 bg-slate-900 h-8 w-8"
    >
      <ImDownload className="text-white text-xl" />
    </button>
  );
};

export default Downloadbutton;
