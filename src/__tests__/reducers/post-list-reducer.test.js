import postListReducer from '../../reducers/post-list-reducer';
import * as c from '../../actions/ActionTypes';
import { formatDistanceToNow } from 'date-fns';

describe('postListReducer', () => {

  let action;
  const postData = {
    title: 'test',
    body: 'test',
    votes: 0,
    timeOpen: new Date(),
    formattedWaitTime: formatDistanceToNow(new Date(), {
      addSuffix: true
    }),
    id: 1
  };

  const currentState = {
    1: {
      title: 'test',
      body: 'test',
      id: 1
    }, 2: {
      title: 'test 2',
      body: 'test 2',
      id: 2
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { types: null })).toEqual({});
  });

  test('Should successfully add new post data to mainPostList', () => {
    const { title, body, id } = postData;
    action = {
      type: c.ADD_POST,
      title: title,
      body: body,
      id: id
    };

    expect(postListReducer({}, action)).toEqual({
      [id] : {
        title: title,
        body: body,
        id: id
      }
    });
  });

  test('Should successfully delete a post', () => {
    action = {
      type: c.DELETE_POST,
      id: 1
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: {
        title: 'test 2',
        body: 'test 2',
        id: 2
      }
    });
  });

  test('Should add a formatted wait time to post entry', () => {
    const { title, body, votes, timeOpen, id } = postData;
    action = {
      type: c.UPDATE_TIME,
      formattedWaitTime: '4 minutes ago',
      id: id
    };
    expect(postListReducer({ [id] : postData }, action)).toEqual({
      [id] : {
        title: title,
        body: body,
        votes: votes,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: '4 minutes ago'
      }
    });
  });

  test('should successfully add a post to the post list that includes date-fns-formatted wait times', () => {
    const { title, body, votes, timeOpen, formattedWaitTime, id } = postData;
    action = {
      type: c.ADD_POST,
      title: title,
      body: body,
      votes: votes,
      timeOpen: timeOpen,
      formattedWaitTime: formattedWaitTime,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        title: title,
        body: body,
        votes: votes,
        timeOpen: timeOpen,
        formattedWaitTime: 'less than a minute ago',
        id: id
      }
    })
  })

});