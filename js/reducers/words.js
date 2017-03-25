import { ADD_WORD } from '../constants'

const words = (state = [], action) => {
  switch (action.type) {
    case ADD_WORD:
      return [
        ...state,
        action.word
      ]
    default:
      return state
  }
}

export default words