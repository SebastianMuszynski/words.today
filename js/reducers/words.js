import { FETCH_WORDS_SUCCESS } from '../constants'

const initialState = {
  words: []
}

const words = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORDS_SUCCESS: {
      console.log(action)
      const words = action.data
      return { ...state, words }
    }
    default:
      return state
  }
}

export default words
