import { NEW_FILE, LOADING_FILES_STORAGE, EDIT_FILE, DELETE_FILE } from './actionsCreators'

const initialState = {
  currentEditFile: {},
  files: {}
}

const file = (state = initialState, action) => {
  switch (action.type) {
    case NEW_FILE:
      const newFile = {
        ...state,
        files: {
          ...state.files,
          [action.payload.id]: {
            ...action.payload
          }
        },
        currentEditFile: {
          [action.payload.id]: {
            ...action.payload
          }
        }
      }
      localStorage.setItem('@markdown', JSON.stringify({ ...newFile.files }))
      return {
        ...newFile
      }

    case DELETE_FILE:
      const { [action.payload]: id, ...files } = state.files
      return {
        ...state,
        files: {
          ...files
        }
      }

    case EDIT_FILE:
      let file
      if (action.payload.loadLastFile) {
        const ids = Object.keys(action.payload.files)
        file = action.payload.files[ids[ids.length - 1]]
        return {
          ...state,
          files: {
            ...state.files,
            [file.id]: {
              ...file
            }
          },
          currentEditFile: {
            [file.id]: {
              ...file
            }
          }
        }
      }
      const editFile = {
        ...state,
        files: {
          ...state.files,
          [action.payload.id]: {
            ...state.files[action.payload.id],
            text: action.payload.text
          }
        },
        currentEditFile: {
          [action.payload.id]: {
            ...state.files[action.payload.id],
            text: action.payload.text,
          }
        }
      }
      localStorage.setItem('@markdown', JSON.stringify({ ...editFile.files }))
      return {
        ...editFile
      }

    case LOADING_FILES_STORAGE:
      return {
        ...state,
        files: {
          ...action.payload
        }
      }

    default:
      return state
  }
}

export default file