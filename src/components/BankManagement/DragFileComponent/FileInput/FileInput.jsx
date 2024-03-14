import PropTypes from "prop-types";

export const FileInput = ({
  isDragging,
  isClicked,
  file,
  handleFileChange,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  handleClick,
  handleReset,
  isLoading,
}) => {
  return (
    <>
      <input
        type="file"
        id="fileInput"
        multiple
        onChange={handleFileChange}
        style={{ display: "none" }}
        disabled={isLoading}
        accept=".xls,.xlsx"
      />
      <label
        htmlFor="fileInput"
        className={`drag-file ${isDragging ? "drag-file-hover" : ""} ${
          isClicked ? "drag-file-clicked" : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        style={{
          backgroundColor: file ? "#16334b" : "",
        }}>
        {isLoading ? (
          <div className="spinner-border text-secondary" role="status">
          <span className="sr-only"></span>
        </div>
        ) : (
          <div className="inside-label-drag">
            {file ? (
              <div className="name-file-inside">
                <span
                  className="label-inside"
                  style={{ color: "white", borderColor: "white" }}>
                  Archivo:
                </span>
                <span
                  className="fileName"
                  style={{ color: "white", borderColor: "white" }}>
                  {file.name}
                </span>
              </div>
            ) : (
              <span>
                Arrastra y suelta tus archivos aquí o haz clic para seleccionar
                archivos
              </span>
            )}
          </div>
        )}
      </label>
      {file && !isLoading &&(
        <button className="btn btn-secondary" onClick={handleReset}>Reset</button>
      )}
    </>
  );
};

FileInput.propTypes = {
  isDragging: PropTypes.bool.isRequired,
  isClicked: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  file: PropTypes.object,
  handleFileChange: PropTypes.func.isRequired,
  handleDragOver: PropTypes.func.isRequired,
  handleDragLeave: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};
