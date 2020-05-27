import { userLogConstants } from '../_constants';

export function registration(state = {}, action) {
  switch (action.type) {
    case userLogConstants.REGISTER_REQUEST:
      return { registering: true };
    case userLogConstants.REGISTER_SUCCESS:
      return {};
    case userLogConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}