import React, { useEffect } from "react";

export const useScript = (url, onload) => {
  useEffect(() => {
    let script = document.createElement("script");

    //add the url parameter to the script src, don't worry it will get clear later
    script.src = url;
    //set onload of script to the onload parameter
    script.onload = onload;

    //add the script to the document
    document.head.appendChild(script);

    return () => document.head.removeChild(script);
  }, [url, onload]);
};