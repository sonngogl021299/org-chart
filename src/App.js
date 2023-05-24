import React from "react";
import OrganizationalChart from "./components/orgChart";
import employees from "./data";

const App = () => {
  return (
    <>
      <OrganizationalChart data={employees} />
    </>
  );
};

export default App;
