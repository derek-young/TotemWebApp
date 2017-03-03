const mockFBFriends = require('./mock_fb_friend_list');

const defaults = {
  api_url: 'http://localhost:8000',
  uid: null,
  name: null,
  groupId: null, //'-KdSF7i59sk07XoRgcYo', //group 'Ballers'
  groupName: '',
  pendingInvites: {},
  friendList: mockFBFriends,
  dataRetrieved: false
};

export default function userReducer(state = defaults, action) {
  switch(action.type) {
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.name,
        groupId: null
      };
    case 'DATA_RETRIEVED': {
      return { ...state, dataRetrieved: true };
    }
    case 'UPDATE_PENDING_INVITES': {
      return { ...state, pendingInvites: action.pendingInvites };
    }
    case 'UPDATE_USER_GROUP_ID': {
      return { ...state, groupId: action.payload.id };
    }
    case 'UPDATE_FRIENDS': {
      return { ...state, friendList: action.friendList };
    }
    case 'UPDATE_GROUP_NAME': {
      return { ...state, groupName: action.payload.name }
    }
    case 'DATA_ON_RESIGN': {
      const newState = { ...state }
      if (action.userData.pendingInvites) {
        newState.pendingInvites = action.userData.pendingInvites
      }
      if (action.userData.friends) {
        newState.friendList = action.userData.friends
      }
      return newState;
    }
  }
  return state;
};
