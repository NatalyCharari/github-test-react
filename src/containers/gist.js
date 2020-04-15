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
  name: get(gistReducer.currentItem, "owner.login", ""),
  avatarUrl: get(gistReducer.currentItem, "owner.avatar_url", ""),
  description: get(gistReducer.currentItem, "description", ""),
  creationDate: get(gistReducer.currentItem, "created_at", ""),
  repository: get(gistReducer.currentItem, "owner.html_url", ""),
});

const mapDispatchToProps = (dispatch) => ({
  readData: () => dispatch(fetchGists()),
  deselectGist: () => dispatch(deselectGist()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GistContainer);
