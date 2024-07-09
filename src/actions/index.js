import * as c from './../actions/ActionTypes';

export const deletePost = id => ({
  type: c.DELETE_POST,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addPost = (post) => {
  // change
  const { names, location, issue, id, formattedWaitTime, timeOpen } = post;
  return {
    type: c.ADD_POST,
    names: names,
    location: location,
    issue: issue,
    id: id,
    formattedWaitTime: formattedWaitTime,
    timeOpen: timeOpen
  }
}

export const updateTime = (id, formattedWaitTime) => ({
  // change
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
})