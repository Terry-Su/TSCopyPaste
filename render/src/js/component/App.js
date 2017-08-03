import Inferno from 'inferno'
import CopyListContainer from '../container/CopyListContainer'
import { autoDetectAndUpdateStore } from '../controller/index'


export default class App {
  componentDidMount() {
    autoDetectAndUpdateStore()
  }
  render() {
    return (
      <div>
        <CopyListContainer />
      </div>
    )
  }
}