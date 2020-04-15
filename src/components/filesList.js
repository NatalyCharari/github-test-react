import React from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  root: {
    height: "100%",
    position: "relative",
  },
  card: {
    position: "absolute",
    margin: 0,
    width: "80%",
  },
  listItem: {
    "& p": {
      wordBreak: "break-all",
    },
  },
});

const FilesRows = ({ files, className }) => {
  const rows = [];
  Object.keys(files).forEach((key, index) => {
    rows.push(
      <ListItem key={"listItem-" + index}>
        <ListItemText
          className={className}
          primary={files[key].filename}
          secondary={files[key].raw_url}
        />
      </ListItem>
    );
  });
  return rows;
};

const FilesList = ({ files, classes, show, deselectGist }) => {
  const goToTable = () => {
    deselectGist();
  };

  return show ? (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h6">{"Files"}</Typography>
            <List className={classes.root}>
              <FilesRows files={files} className={classes.listItem} />
            </List>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={goToTable}>
            {"Go to table"}
          </Button>
        </CardActions>
      </Card>
    </div>
  ) : null;
};

FilesList.defaultProps = {
  files: {},
  show: false,
  deselectGist: () => {},
};

FilesList.propTypes = {
  files: PropTypes.object,
  show: PropTypes.bool,
  deselectGist: PropTypes.func,
};

export default withStyles(styles, { name: "FilesList" })(FilesList);
