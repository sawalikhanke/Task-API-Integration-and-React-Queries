import React from "react";
import UserTable from "./UserTable";

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>🚀 Users Table</h1>
      <UserTable />
    </div>
  );
};

export default App;
