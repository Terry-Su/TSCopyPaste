import Inferno from 'inferno'
import { render } from 'inferno'
import App from '../component/App.js'
// redux
import { Provider } from 'inferno-redux'
import { createStore } from 'redux'
import reducer from '../reducer/index'
// remote(resolve main process)
import { dataManager, saveContentToLocal} from '../util/remote'

// action
import { UPDATE_STORE, MODIFY_VALUE } from '../action/index'

// css
import '../../../node_modules/antd/dist/antd.css'

let store = createStore(reducer)
const { dispatch } = store

function init() {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
}

init()

export function autoDetectAndUpdateStore() {
  let prevStore = store.getState()
  setInterval(() => {
    const currentStore = {
      copySettings: dataManager.getCopySetting()
    }
    if (JSON.stringify(currentStore) != JSON.stringify(prevStore)) {
      prevStore = currentStore
      dispatch(UPDATE_STORE(currentStore))
    }
  }, 100)
}

export function onTextAreaChange(id, value) {
  saveContentToLocal(value ,id)
}