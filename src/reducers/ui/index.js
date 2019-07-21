import { MENU_TOGGLE, SAVING_CHANGE } from './actionsCreators'

const initialState = {
  isMenuOpen: false,
  isSaving: false,
  lengthMarkdown: 0
}

const ui = (state = initialState, action) => {
  switch (action.type) {
    case MENU_TOGGLE:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      }
    case SAVING_CHANGE:
      return {
        ...state,
        isSaving: action.payload.isSaving,
        lengthMarkdown: action.payload.length === 'vazio' ? state.lengthMarkdown : action.payload.length
      }
    default:
      return state
  }
}

export default ui