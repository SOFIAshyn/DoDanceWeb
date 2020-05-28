import { UPLOAD_PROFILE, UPLOAD_PROFILE_NEWS, UPLOAD_PROFILE_NOTIFICATIONS, UPLOAD_POST } from './types';

const uploadProfile = (profileData) => ({ type: UPLOAD_PROFILE, profileData });
const uploadProfileNews = (profileDataNews) => ({ type: UPLOAD_PROFILE_NEWS, profileDataNews });

export { uploadProfile, uploadProfileNews };