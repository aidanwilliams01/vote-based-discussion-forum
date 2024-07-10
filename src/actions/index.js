import * as c from './../actions/ActionTypes';

export const deletePost = id => ({
  type: c.DELETE_POST,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addPost = (post) => {
  const { title, body, votes, id, formattedWaitTime, timeOpen } = post;
  return {
    type: c.ADD_POST,
    title: title,
    body: body,
    votes: votes,
    id: id,
    formattedWaitTime: formattedWaitTime,
    timeOpen: timeOpen
  }
}

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
})