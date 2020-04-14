import React from "react";
import Navigation from "./components/Navigation";

const App = () => {
  const appBarTitle = "React Test";
  const renderComponent = () => {
    return (
      <div>
        <Navigation barTitle={appBarTitle} />
      </div>
    );
  };
  return renderComponent();
};

export default App;
