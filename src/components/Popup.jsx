import  { Col, Container, Form, Row } from 'react-bootstrap';
import './styles/styles.css'

export default function Popup() {

  return (
    <div className='popup'>
      <Container>
        <Row>
          <Col />
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Job Title</Form.Label>
                <Form.Control type="text" placeholder="Enter your title." />
              </Form.Group>
            </Form>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  )
}
