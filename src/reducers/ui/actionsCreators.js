export const MENU_TOGGLE = 'markdown:MENU_TOGGLE'
export const SAVING_CHANGE = 'markdown:SAVING_CHANGE'
export const MODAL_TOGGLE = 'markdown:MODAL_TOGGLE'
export const LIST_FILES_TOGGLE = 'markdown:LIST_FILES_TOGGLE'
export const CONTAINERS_MARKDOWN_TOGGLE = 'markdown:CONTAINERS_MARKDOWN_TOGGLE'

export const menuToggle = (boolean = false) => dispatch => {
  dispatch({
    type: MENU_TOGGLE,
    payload: boolean
  })
}

export const modalToggle = (open = false) => dispatch => {
  dispatch({
    type: MODAL_TOGGLE,
    payload: open
  })
}

export const listFilesToggle = (open = false) => dispatch => {
  dispatch({
    type: LIST_FILES_TOGGLE,
    payload: open
  })
}

export const viewsContainerToggle = (markIn, markOut) => dispatch => {
  dispatch({
    type: CONTAINERS_MARKDOWN_TOGGLE,
    payload: {
      markIn,
      markOut
    }
  })
}

export const savingChange = (isSaving, length = 'vazio') => dispatch => {
  dispatch({
    type: SAVING_CHANGE,
    payload: {
      isSaving,
      length
    }
  })
}