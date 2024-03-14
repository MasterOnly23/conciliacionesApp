
export const FilterNoResultComponent = () => {
    return (
        <div className="d-flex justify-content-center  ms-3 me-3">
        <div className="filtros-container d-flex gap-5 mt-5 p-3 border rounded bg-white">
            <div className="d-flex gap-2">
            <div className="d-flex align-items-center">
                <span className="mb-0">No se encontraron resultados...</span>
            </div>
            </div>
        </div>
        </div>
    );
}