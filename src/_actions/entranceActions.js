import { UPLOAD_PROFILE, UPLOAD_PROFILE_NEWS, UPLOAD_PROFILE_NOTIFICATIONS, UPLOAD_POST } from './types';


const uploadProfile = (todoLists) => ({ type: UPLOAD_PROFILE, todoLists });

const uploadProfileNews = (todoLists) => ({ type: UPLOAD_PROFILE_NEWS, todoLists });