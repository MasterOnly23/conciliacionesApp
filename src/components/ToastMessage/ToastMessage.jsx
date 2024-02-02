import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import PropTypes from 'prop-types';



export const ToastMessage = ({resUpload, setShowToast, showToast, messageResponse} ) => {

    return (
        <div className='d-flex justify-content-center pb-3'>
            <Row>
                <Col xs={6}>
                {messageResponse !== '' && (
                    <Toast bg={resUpload !== 'error' ? 'success' : 'danger'} className='text-white text-center' onClose={() => setShowToast(false)} show={showToast} delay={5000} autohide>
                        
                            <Toast.Body>{messageResponse}</Toast.Body>
                        
                    </Toast>
                    )}
                </Col>
            </Row>
        </div>
    );
}

ToastMessage.propTypes = {
    resUpload: PropTypes.string,
    setShowToast: PropTypes.func.isRequired,
    showToast: PropTypes.bool.isRequired,
    messageResponse: PropTypes.string
  };