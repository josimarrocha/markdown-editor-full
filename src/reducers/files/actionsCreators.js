export const NEW_FILE = 'files:NEW_FILE'
export const EDIT_FILE = 'files:EDIT_FILE'
export const DELETE_FILE = 'files:DELETE_FILE'
export const LOADING_FILES_STORAGE = 'files:LOADING_FILES_STORAGE'

export const newFile = (file) => async dispatch => {
  await dispatch({
    type: NEW_FILE,
    payload: file
  })
}

export const editFile = (id, text) => dispatch => {
  dispatch({
    type: EDIT_FILE,
    payload: {
      id,
      text
    }
  })
}

export const deleteFile = (id) => dispatch => {
  dispatch({
    type: DELETE_FILE,
    payload: id
  })
}

export const loadingFilesStorage = () => async dispatch => {
  const files = JSON.parse(await localStorage.getItem('@markdown'))
  await dispatch({
    type: LOADING_FILES_STORAGE,
    payload: files
  })
  if (files) {
    await dispatch({
      type: EDIT_FILE,
      payload: {
        files,
        loadLastFile: true
      }
    })
  }
}