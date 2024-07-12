import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";
import { formatDistanceToNow } from 'date-fns';

function NewPostForm(props){

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      title: event.target.title.value,
      body: event.target.body.value,
      votes: '0',
      id: v4(),
      timeOpen: new Date(),
      formattedWaitTime: formatDistanceToNow(new Date(), {
        addSuffix: true
      })
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText="Post" />
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
}

export default NewPostForm