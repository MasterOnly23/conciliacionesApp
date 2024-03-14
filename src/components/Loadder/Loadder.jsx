import PropTypes from 'prop-types';

export const Loadder = ({position='fixed'}) => {
    return (
        <div style={{
            position: position, 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
        }}>
            <div className="spinner-border text-secondary" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
}

Loadder.propTypes = {
    position: PropTypes.string,
};