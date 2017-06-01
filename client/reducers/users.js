const users = (state = [
  {
    userName: 'luke',
    userId: 1

  },
  {
    userName: 'jae',
    userId: 2

  },
  {
    userName: 'jack',
    userId: 3

  },
  {
    userName: 'sam',
    userId: 4

  },
  {
    userName: 'jules',
    userId: 5

  }
], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          userName: action.name,
          userId: action.id
        }
      ]

    default:
      return state
  }
}

export default users
