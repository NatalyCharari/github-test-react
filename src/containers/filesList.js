import React from "react";
import { connect } from "react-redux";
import FilesList from "../components/filesList";
import { deselectGist } from "../reducers/actions";
import { get } from "lodash";

export const FilesListContainer = (props) => {
  return <FilesList {...props} />;
};

const mapStateToProps = ({ gistReducer }) => ({
  show: !!gistReducer.currentItem,
  files: get(gistReducer.currentItem, "files", {}),
});

const mapDispatchToProps = (dispatch) => ({
  deselectGist: () => dispatch(deselectGist()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilesListContainer);
