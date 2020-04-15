import React from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = () => ({
  root: {
    height: "70vh",
    position: "relative",
    top: 30,
  },
  avatar: {},
  card: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: 0,
  },
});

const GistsComponent = ({
  avatarUrl,
  name,
  description,
  creationDate,
  classes,
  show,
  deselectGist,
}) => {
  const goToTable = () => {
    deselectGist();
  };

  return show ? (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.avatar}
            image={avatarUrl}
            title="Avatar"
            component="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
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

GistsComponent.defaultProps = {
  avatarUrl: "",
  name: "",
  description: "",
  creationDate: "",
  show: false,
  deselectGist: () => {},
};

GistsComponent.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  creationDate: PropTypes.string,
  show: PropTypes.bool,
  deselectGist: PropTypes.func,
};

export default withStyles(styles, { name: "GistsComponent" })(GistsComponent);
