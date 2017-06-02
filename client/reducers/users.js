const users = (state = 0, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.id
    default:
      return state
  }
}

export default users
