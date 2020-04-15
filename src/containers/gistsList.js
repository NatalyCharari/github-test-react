import React from "react";
import { connect } from "react-redux";
import GistsList from "../components/gistsList";
import { fetchGists } from "../reducers/actions";

export const GistsListContainer = (props) => {
  return <GistsList {...props} />;
};

const mapStateToProps = ({ gistReducer }) => ({
  //GistComponent: generalGist,
  allGists: gistReducer.items,
});

const mapDispatchToProps = (dispatch) => ({
  readData: () => dispatch(fetchGists()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GistsListContainer);
