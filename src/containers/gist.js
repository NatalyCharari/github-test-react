import React from "react";
import { connect } from "react-redux";
import GistsComponent from "../components/gistComponent";
import { fetchGists, deselectGist } from "../reducers/actions";
import { get } from "lodash";

export const GistContainer = (props) => {
  return <GistsComponent {...props} />;
};

const mapStateToProps = ({ gistReducer }) => ({
  show: !!gistReducer.currentItem,
  name: get(gistReducer.currentGist, 'name', ''),
  avatarUrl: get(gistReducer.currentGist, 'avatarUrl', ''),
  description: get(gistReducer.currentGist, 'description', ''),
  creationDate: get(gistReducer.currentGist, 'creationDate', ''),
});

const mapDispatchToProps = (dispatch) => ({
  readData: () => dispatch(fetchGists()),
  deselectGist: () => dispatch(deselectGist()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GistContainer);
