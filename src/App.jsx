import React from "react";
import Layout from "./views/Layout";
import Home from "./views/Home";
function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
