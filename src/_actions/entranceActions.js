import { UPLOAD_PROFILE, UPLOAD_PROFILE_NEWS, UPLOAD_PROFILE_NOTIFICATIONS, UPLOAD_POST } from './types';

const uploadProfile = (profileData) => ({ type: UPLOAD_PROFILE, profileData });
const uploadProfileNews = (profileData, profileNews) => ({ type: UPLOAD_PROFILE_NEWS, profileData, profileNews });

export { uploadProfile, uploadProfileNews };