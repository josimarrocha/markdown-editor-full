export const MENU_TOGGLE = 'markdown:MENU_TOGGLE'
export const SAVING_CHANGE = 'markdown:SAVING_CHANGE'

export const menuToggle = () => dispatch => {
  dispatch({
    type: MENU_TOGGLE
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