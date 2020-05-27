import { UPLOAD_PROFILE, UPLOAD_PROFILE_NEWS, UPLOAD_PROFILE_NOTIFICATIONS, UPLOAD_POST } from './types';

const setTodoLists = (todoLists) => ({ type: SET_TODO_LISTS, todoLists });

const uploadProfile = () => ({ type: UPLOAD_PROFILE,  });