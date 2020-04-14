import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Navigation = ({ barTitle }) => {
  const renderComponent = () => {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">{barTitle}</Typography>
        </Toolbar>
      </AppBar>
    );
  };
  return renderComponent();
};

Navigation.propTypes = {
  barTitle: PropTypes.string,
};

Navigation.defaultProps = {
  barTitle: "App Bar",
};

export default Navigation;
