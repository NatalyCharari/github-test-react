import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { get } from "lodash";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  root: {
    maxWidth: "90vw",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: "50%",
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    readData();
  }, [readData]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const HeaderCell = ({ data }) => {
    const styleAttribute = get(data, "style", "");
    const className = styleAttribute ? classes[styleAttribute] : "";

    return (
      <TableCell align={data.align} className={className}>
        {data.label}
      </TableCell>
    );
  };
  const renderList = () => {
    const rows =
      rowsPerPage > 0
        ? allGists.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : allGists;

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
            {rows.map((gist, index) => (
              <TableRow key={"row-" + index}>
                <TableCell>
                  <img
                    alt={"avatar"}
                    className={classes.avatar}
                    src={gist.owner.avatar_url}
                  />
                </TableCell>
                <TableCell>{gist.owner.login}</TableCell>
                <TableCell>{gist.description}</TableCell>
                <TableCell>{gist.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={allGists.length}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[10, 20, { label: "All", value: -1 }]}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
              />
            </TableRow>
          </TableFooter>
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
