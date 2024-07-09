import postListReducer from '../../reducers/post-list-reducer';
import * as c from '../../actions/ActionTypes';
import { formatDistanceToNow } from 'date-fns';

describe('postListReducer', () => {

  let action;
  const postData = {
    // change
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is ot working correctly.',
    timeOpen: new Date(),
    formattedWaitTime: formatDistanceToNow(new Date(), {
      addSuffix: true
    }),
    id: 1
  };

  const currentState = {
    // change
    1: {
      names: 'Ryan & Aimen',
      location: '4b',
      issue: 'REdux action is not working correctly',
      id: 1
    }, 2: {
      names: 'Jasmine and Justine',
      location: '2a',
      issue: 'Reducer has side effects.',
      id: 2
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { types: null })).toEqual({});
  });

  test('Should successfully add new post data to mainPostList', () => {
    // change
    const { names, location, issue, id } = postData;
    action = {
      type: c.ADD_POST,
      names: names,
      location: location,
      issue: issue,
      id: id
    };

    expect(postListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

  test('Should successfully delete a post', () => {
    // change
    action = {
      type: c.DELETE_POST,
      id: 1
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: {
        names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2
      }
    });
  });

  test('Should add a formatted wait time to post entry', () => {
    // change
    const { names, location, issue, timeOpen, id } = postData;
    action = {
      type: c.UPDATE_TIME,
      formattedWaitTime: '4 minutes ago',
      id: id
    };
    expect(postListReducer({ [id] : postData }, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: '4 minutes ago'
      }
    });
  });

  test('should successfully add a post to the post list that includes date-fns-formatted wait times', () => {
    // change
    const { names, location, issue, timeOpen, formattedWaitTime, id } = postData;
    action = {
      type: c.ADD_POST,
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      formattedWaitTime: formattedWaitTime,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        formattedWaitTime: 'less than a minute ago',
        id: id
      }
    })
  })

});