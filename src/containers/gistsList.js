import React from "react";
import { connect } from "react-redux";
import GistsList from "../components/gistsList";
import { fetchGists, selectGist } from "../reducers/actions";

export const GistsListContainer = (props) => {
  return <GistsList {...props} />;
};

const mapStateToProps = ({ gistReducer }) => ({
  show: !gistReducer.currentItem,
  allGists: gistReducer.items,
});

const mapDispatchToProps = (dispatch) => ({
  readData: () => dispatch(fetchGists()),
  selectGist: gist => dispatch(selectGist(gist)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GistsListContainer);
