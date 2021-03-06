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
    maxWidth: "91vw",
    padding: "1% 4%",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: "50%",
  },
  container: {},
  descriptionColumn: {
    maxWidth: "40vw",
  },
  tableCell: {
    padding: 10,
  },
  tableRow: {
    cursor: "pointer",
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

const GistsTable = ({
  allGists,
  readData,
  classes,
  show,
  selectGist,
  className,
}) => {
  const minRowsPerPage = 20;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(minRowsPerPage);

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

  const showDetailedGist = (gist) => {
    selectGist(gist);
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

  const BodyTextCell = ({ align, label }) => {
    const alignTo = align || "left";
    return (
      <TableCell align={alignTo} className={classes.tableCell}>
        {label}
      </TableCell>
    );
  };

  const renderList = () => {
    const rows =
      rowsPerPage > 0
        ? allGists.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : allGists;

    return show ? (
      <TableContainer className={`${classes.root} ${className}`}>
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
              <TableRow
                className={classes.tableRow}
                hover
                key={"row-" + index}
                onClick={() => showDetailedGist(gist)}
              >
                <TableCell className={classes.tableCell}>
                  <img
                    alt={"avatar"}
                    className={classes.avatar}
                    src={gist.owner.avatar_url}
                  />
                </TableCell>
                <BodyTextCell label={gist.owner.login} />
                <BodyTextCell label={gist.description} />
                <BodyTextCell align={"center"} label={gist.created_at} />
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
                rowsPerPageOptions={[
                  minRowsPerPage,
                  minRowsPerPage * 2,
                  { label: "All", value: -1 },
                ]}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    ) : null;
  };

  return renderList();
};

GistsTable.defaultProps = {
  allGists: [],
  readData: () => {},
  show: true,
  selectGist: () => {},
  className: "",
};

GistsTable.propTypes = {
  allGists: PropTypes.array,
  readData: PropTypes.func,
  show: PropTypes.bool,
  selectGist: PropTypes.func,
  className: PropTypes.string,
};

export default withStyles(styles, { name: "GistsList" })(GistsTable);
