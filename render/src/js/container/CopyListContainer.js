import Inferno from 'inferno'
import { connect } from 'inferno-redux'
import CopyItem from '../component/CopyItem'
import {
  Row,
  Col
} from 'antd'

function CopyList({ copySettings }) {
  return (
    <div style={{
      padding: '20px 0 10px 0'
    }}>
      <Row>
        <Col span={5} style={{
          textAlign: 'center'
        }}>
          <span>Store clipboard text</span>
        </Col>
        <Col span={5} style={{
          textAlign: 'center'
        }}>
          <span>Load storage to clipboard</span>
        </Col>
        <Col span={12} style={{
          textAlign: 'center'
        }}>
          <span>Content</span>
        </Col>
      </Row>
      {
        copySettings.map((setting, id) => <CopyItem setting={setting} id={id} />)
      }
      <br />
      <br />
    </div>
  )
}


function mapStateToProps(state) {
  const { copySettings } = state
  return {
    copySettings
  }
}


export default connect(mapStateToProps)(CopyList)