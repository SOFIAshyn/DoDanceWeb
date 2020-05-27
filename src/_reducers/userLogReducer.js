import userLogConstants from '../_constants';

export function userLog(state={}, action) {
    switch (action.type) {
        case userLogConstants.DELETE_SUCCESS:
            // remove deleted user from state
            return {
                items: state.items.filter(user => user.id !== action.id)
            };
        case userLogConstants.DELETE_FAILURE:
            return {
                ...state,
                items: state.items.map(user => {
                  if (user.id === action.id) {
                    // make copy of user without 'deleting:true' property
                    const { deleting, ...userCopy } = user;
                    // return copy of user with 'deleteError:[error]' property
                    return { ...userCopy, deleteError: action.error };
                  }

                  return user;
                })
              };
        default:
          return state;
    }
}