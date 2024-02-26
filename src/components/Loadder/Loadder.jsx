export const Loadder = () => {
    return (
        <div style={{
            position: 'fixed', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            zIndex: 10
        }}>
            <div className="spinner-border text-secondary" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
}