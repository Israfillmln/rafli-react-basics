import types from './counter/types'
import user_types from './types/user'

const initial_state = {
  id: 1,
  username: "",
  email:"",
  full_name:"",
  role:""
}

const userReducer = (state = initial_state, action) => {
  if (action.type === user_types.LOGIN_USER) {
    return {
      ...state,
      id: 1,
      username: action.payload.username,
      email: action.payload.email,
      full_name: action.payload.full_name,
      role: action.payload.role
    }
  }
  return state
}

export default userReducer;