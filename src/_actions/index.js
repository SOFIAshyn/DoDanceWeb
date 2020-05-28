import { uploadProfile, uploadProfileNews } from './entranceActions';

const fetchProfile = () => (dispatch) => {
    fetch('/profile').then(resp => {
        return resp.json();
    }).then( body => {
        dispatch(uploadProfile(body))
    })
};

const fetchProfileNewsFeed = () => (dispatch) => {
    fetch('/profileNewsFeed').then(resp => {
        return resp.json();
    }).then( body => {
        dispatch(uploadProfileNews(body))
    })
};

export { fetchProfile as uploadProfile , fetchProfileNewsFeed as uploadProfileNews };