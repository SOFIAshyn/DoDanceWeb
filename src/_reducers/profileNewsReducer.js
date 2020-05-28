import { UPLOAD_PROFILE_NEWS, UPLOAD_PROFILE_NOTIFICATIONS, UPLOAD_POST } from '../_actions/types';

export default function userNews(state=null, action=false) {
  switch (action.type) {
    case UPLOAD_PROFILE_NEWS:
      return { ...state, profileDataNews: action.profileDataNews };
    default:
      return state;
  }
};