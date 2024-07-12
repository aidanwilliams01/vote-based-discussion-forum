import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props){

  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.postList).map((post) =>
        <Post
          whenPostClicked = { props.onPostSelection }
          title={post.title}
          body={post.body}
          votes={post.votes}
          timeOpen={post.timeOpen}
          formattedWaitTime={post.formattedWaitTime}
          id={post.id}
          key={post.id}
          onEditPost={props.onEditPost}/>
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  onPostSelection: PropTypes.func
};

export default PostList;