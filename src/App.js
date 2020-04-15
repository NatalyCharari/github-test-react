import React from "react";
import Navigation from "./components/navigation";
import GistsTable from "./containers/gistsTable";
import Gist from "./containers/gist";
import FilesList from "./containers/filesList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    row: {
      display: "flex",
      width: "100vw",
      height: "60vh",
      flexDirection: "row",
      padding: 30,
    },
    column1: {
      width: "30%",
      flex: "1 1 0px",
    },
    column2: {
      width: "70%",
      flex: "1 1 0px",
    },
  },
  { name: "App" }
);

const App = () => {
  const appBarTitle = "React Test";
  const classes = useStyles();

  const renderComponent = () => {
    return (
      <div>
        <Navigation barTitle={appBarTitle} />
        <GistsTable />
        <div className={classes.row}>
          <div className={classes.column1}>
            <Gist />
          </div>
          <div className={classes.column2}>
            <FilesList />
          </div>
        </div>
      </div>
    );
  };
  return renderComponent();
};

export default App;
