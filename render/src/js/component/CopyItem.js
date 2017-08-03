import Inferno from 'inferno'
import Component from 'inferno-component'
import { connect } from 'inferno-redux'
import { onClickCopyItem, onTextAreaChange } from '../controller/index'
import {
  Row,
  Col,
  Button,
  Input
} from 'antd'
const {
  TextArea
} = Input

export default class CopyItem extends Component {
  render() {
    const { setting, id } = this.props
    const { key, content } = setting
    const { save, load } = key


    const saveCommand = concatCommand(save)
    const loadCommand = concatCommand(load)
    return (
      <div>
        <Row style={{
          paddingTop: '20px'
        }}>
          <Col span={5} style={{
            textAlign: 'center'
          }}>{saveCommand}</Col>

          <Col span={5} style={{
            textAlign: 'center'
          }}>{loadCommand}</Col>

          <Col span={12} style={{
            textAlign: 'center'
          }}>
            <TextArea autosize value={content} onchange={e => onTextAreaChange(id, e.target.value)} style={{
              resize: 'none'
            }}></TextArea>
          </Col>
        </Row>
      </div>
    )
  }
}


function concatCommand(arr) {
  return arr.reduce(function (accumulator, current) { return accumulator + '+' + current })
}
