import { NEW_FILE, LOADING_FILES_STORAGE, EDIT_FILE, DELETE_FILE } from './actionsCreators'

const initialState = {}

const file = (state = initialState, action) => {
  switch (action.type) {
    case NEW_FILE:
      const newFile = {
        ...state,
        [action.payload.id]: {
          ...action.payload
        }
      }
      localStorage.setItem('@markdown', JSON.stringify({ ...newFile }))
      return {
        ...newFile
      }

    case DELETE_FILE:
      const { [action.payload]: id, ...files } = state
      return {
        ...files

      }

    case EDIT_FILE:
      let file
      if (action.payload.loadLastFile) {
        const ids = Object.keys(action.payload.files)
        file = action.payload.files[ids[ids.length - 1]]
        return {
          ...state,
          [file.id]: {
            ...file
          }
        }
      }
      const editFile = {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          text: action.payload.text
        }
      }
      localStorage.setItem('@markdown', JSON.stringify({ ...editFile }))
      return {
        ...editFile
      }

    case LOADING_FILES_STORAGE:
      return {
        ...action.payload
      }

    default:
      return state
  }
}

export default file