import {
  MENU_TOGGLE,
  SAVING_CHANGE,
  MODAL_TOGGLE,
  LIST_FILES_TOGGLE,
  CONTAINERS_MARKDOWN_TOGGLE
} from './actionsCreators'

const initialState = {
  isMenuOpen: false,
  isSaving: false,
  lengthMarkdown: 0,
  isModalOpen: false,
  isListFileOpen: false,
  containersView: {
    markIn: true,
    markOut: true
  }
}

const ui = (state = initialState, action) => {
  switch (action.type) {
    case MENU_TOGGLE:
      return {
        ...state,
        isMenuOpen: action.payload
      }
    case LIST_FILES_TOGGLE:
      return {
        ...state,
        isListFileOpen: action.payload
      }
    case SAVING_CHANGE:
      return {
        ...state,
        isSaving: action.payload.isSaving,
        lengthMarkdown: action.payload.length === 'vazio' ? state.lengthMarkdown : action.payload.length
      }
    case MODAL_TOGGLE:
      return {
        ...state,
        isModalOpen: action.payload
      }
    case CONTAINERS_MARKDOWN_TOGGLE:
      return {
        ...state,
        containersView: {
          ...state.containersView,
          markIn: action.payload.markIn,
          markOut: action.payload.markOut
        }
      }
    default:
      return state
  }
}

export default ui