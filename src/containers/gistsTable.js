import React from "react";
import { connect } from "react-redux";
import GistsTable from "../components/gistsTable";
import { fetchGists, selectGist } from "../reducers/actions";

export const GistsTableContainer = (props) => {
  return <GistsTable {...props} />;
};

const mapStateToProps = ({ gistReducer }) => ({
  show: !gistReducer.currentItem,
  allGists: gistReducer.items,
});

const mapDispatchToProps = (dispatch) => ({
  readData: () => dispatch(fetchGists()),
  selectGist: (gist) => dispatch(selectGist(gist)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GistsTableContainer);
