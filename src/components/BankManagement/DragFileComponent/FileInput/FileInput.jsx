import PropTypes from 'prop-types';

export const FileInput = ({ isDragging, isClicked, file, handleFileChange, handleDragOver, handleDragLeave, handleDrop, handleClick }) => {
    return (
      <>
        <input 
          type="file"
          id="fileInput"
          multiple
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <label 
          htmlFor="fileInput" 
          className={`drag-file ${isDragging ? "drag-file-hover" : ""} ${isClicked ? "drag-file-clicked" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <div className="inside-label-drag">
            {file ? 
              <div className="name-file-inside"> 
                <span className="label-inside">Archivo:</span> 
                <span className="fileName">{file.name}</span> 
              </div> 
              : 
              <span>Arrastra y suelta tus archivos aquí o haz clic para seleccionar archivos</span> 
            }
          </div>
        </label>
      </>
    );
  };

  
FileInput.propTypes = {
    isDragging: PropTypes.bool.isRequired,
    isClicked: PropTypes.bool.isRequired,
    file: PropTypes.object,
    handleFileChange: PropTypes.func.isRequired,
    handleDragOver: PropTypes.func.isRequired,
    handleDragLeave: PropTypes.func.isRequired,
    handleDrop: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
  };