import { dataManager } from '../util/remote'

const copySetting = dataManager.getCopySetting()
const defaultStore = {
  copySettings: copySetting
}

export default function (state = defaultStore, action) {
  switch (action.type) {
    case 'UPDATE_STORE':
      return {
        ...state,
        ...action.store
      }
    case 'MODIFY_VALUE':
      const tmpState = {...state}
      tmpState.copySettings[action.id] = action.value
      return {
        ...state,
        ...tmpState
      }
    default:
      return state
  } 
}