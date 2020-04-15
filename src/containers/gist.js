import React from "react";
import { connect } from "react-redux";
import GistsComponent from "../components/gistComponent";
import { fetchGists, deselectGist } from "../reducers/actions";
import { get } from "lodash";

export const GistContainer = (props) => {
  return <GistsComponent {...props} />;
};

const mapStateToProps = ({ gistReducer }) => {
  console.log(gistReducer)
  return {
    show: !!gistReducer.currentItem,
    name: get(gistReducer.currentItem, "owner.login", ""),
    avatarUrl: get(gistReducer.currentItem, "owner.avatar_url", ""),
    description: get(gistReducer.currentItem, "description", ""),
    creationDate: get(gistReducer.currentItem, "creationDate", ""),
  };
};

const mapDispatchToProps = (dispatch) => ({
  readData: () => dispatch(fetchGists()),
  deselectGist: () => dispatch(deselectGist()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GistContainer);
