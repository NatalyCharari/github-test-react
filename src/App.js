import React from "react";
import Navigation from "./components/navigation";
import GistsList from "./containers/gistsList";

const App = () => {
  const appBarTitle = "React Test";
  const renderComponent = () => {
    return (
      <div>
        <Navigation barTitle={appBarTitle} />
        <GistsList />
      </div>
    );
  };
  return renderComponent();
};

export default App;
