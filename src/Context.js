import React, { createContext, useState, useEffect } from "react";

export const JestCopy = createContext(null);

const Context = ({ children }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    linkedin: "",
    github: "",
    designation: "",
    coverLetter: "",
  });

  useEffect(() => {
    const localData = localStorage.getItem("jestcopy");
    if (localData) setData(JSON.parse(localData));
  }, []);

  useEffect(() => {
    localStorage.setItem("jestcopy", JSON.stringify(data));
  }, [data]);

  return (
    <JestCopy.Provider value={{ data, setData }}>{children}</JestCopy.Provider>
  );
};

export default Context;
