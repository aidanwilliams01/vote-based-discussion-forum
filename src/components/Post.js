import React from "react";
import PropTypes from "prop-types";

function Post(props){
  function decrement() {
    props.onEditPost({
      title: props.title, 
      body: props.body, 
      votes: (props.votes - 1).toString(), 
      id: props.id,
      timeOpen: props.timeOpen,
      formattedWaitTime: props.formattedWaitTime});
  }

  function increment() {
    props.onEditPost({
      title: props.title, 
      body: props.body, 
      votes: (parseInt(props.votes) + 1).toString(), 
      id: props.id,
      timeOpen: props.timeOpen,
      formattedWaitTime: props.formattedWaitTime});
  }

  return (
    <React.Fragment>
      <div>
        <h3 onClick = {() => props.whenPostClicked(props.id)}>{props.title}</h3>
        <p>{props.body}</p>
        <p><em>{props.formattedWaitTime}</em></p>
        <div>Votes: {props.votes}</div>
        <button onClick={decrement}>Downvote</button>
        <button onClick={increment}>Upvote</button>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  votes: PropTypes.string,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func,
  formattedWaitTime: PropTypes.string
};

export default Post;