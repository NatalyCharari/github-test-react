import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { get } from "lodash";

import Avatar from "@material-ui/core/Avatar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  root: {
    maxWidth: "90vw",
  },
  container: {},
  descriptionColumn: {
    maxWidth: "40vw",
  },
});

const columns = [
  { id: "avatar", label: "Avatar", align: "center" },
  { id: "name", label: "Name", align: "center" },
  {
    id: "description",
    label: "Description",
    align: "center",
    style: "descriptionColumn",
  },
  { id: "created_date", label: "Creation Date", align: "center" },
];

const GistsList = ({ allGists, readData, classes }) => {
  useEffect(() => {
    readData();
  }, [readData]);

  const HeaderCell = ({ data, key }) => {
    const styleAttribute = get(data, "style", "");
    const className = styleAttribute ? classes[styleAttribute] : "";

    return (
      <TableCell key={key} align={data.align} className={className}>
        {data.label}
      </TableCell>
    );
  };
  const renderList = () => {
    console.log(allGists);
    return (
      <TableContainer className={classes.root}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <HeaderCell data={column} key={"header-cell-" + index} />
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {allGists.map((gist, index) => (
              <TableRow key={"row-" + index}>
                <Avatar src={gist.owner.avatar_url} />
                <TableCell>{gist.owner.login}</TableCell>
                <TableCell>{gist.description}</TableCell>
                <TableCell>{gist.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return renderList();
};

GistsList.defaultProps = {
  //GistComponent: <div />,
  allGists: [],
  readData: () => {},
};

GistsList.propTypes = {
  GistComponent: PropTypes.elementType,
  allGists: PropTypes.array,
  readData: PropTypes.func,
};

export default withStyles(styles, { name: "GistsList" })(GistsList);
