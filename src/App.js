import React from "react";
import Navigation from "./components/navigation";
import GistsList from "./containers/gistsList";
import Gist from "./containers/gist"

const App = () => {
  const appBarTitle = "React Test";
  const renderComponent = () => {
    return (
      <div>
        <Navigation barTitle={appBarTitle} />
        <GistsList />
        <Gist />
      </div>
    );
  };
  return renderComponent();
};

export default App;
