import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import { newPost } from "../Redux/reducers/Actions/post_actions";

const styles = {
  root: {
    color: "red"
  }
};

class Home extends Component {
  render() {
    const { classes } = this.props;
    return <h1 className={classes.root}>Hello, World</h1>;
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});

export default connect(
  mapStateToProps,
  { newPost }
)(withStyles(styles)(Home));
