import types from './counter/types'

const initial_state = {
  id: 1,
  username: "yuyu",
}

const userReducer = (state = initial_state, action) => {
  if (action.type === types.INCREMENT_COUNTER) {
    return {
      ...state,
      username: "yuyu"
    }
  }
  return state
}

export default userReducer;