import { UPLOAD_PROFILE, UPLOAD_PROFILE_NOTIFICATIONS, UPLOAD_POST } from '../_actions/types';

export default function userProfile(state=null, action=false) {
  switch (action.type) {
    case UPLOAD_PROFILE:
      return { ...state, profileData: action.profileData };

//     // case UPLOAD_PROFILE_NOTIFICATIONS:
//     //   return {
//     //     ...state,
//     //     todoLists: state.todoLists.map((list) => (list.id === action.listId ? action.list : list)),
//     //   };
//     //
//     // case UPLOAD_POST:
//     //   return { ...state, todoLists: [...state.todoLists, action.todoList] };
//
    default:
      return state;
  }
};