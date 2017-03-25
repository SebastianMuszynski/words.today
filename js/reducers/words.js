const words = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WORD':
      return [...state]
    default:
      return state
  }
}

export default words