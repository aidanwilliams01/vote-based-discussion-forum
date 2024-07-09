import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      {/* change */}
      <div onClick = {() => props.whenPostClicked(props.id)}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <p><em>{props.formattedWaitTime}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func,
  formattedWaitTime: PropTypes.string
};

export default Post;