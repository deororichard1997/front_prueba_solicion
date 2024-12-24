import React, { useState, useEffect } from 'react';
import { FaSave, FaTrash, FaPlus } from 'react-icons/fa';
import '../css/AcademicInformation.css';

const AcademicInformation = () => {
    const [academicData, setAcademicData] = useState([]);
    const [formData, setFormData] = useState({
        titulo: '',
        institucion: '',
        fechaInicio: '',
        fechaFin: '',
    });

    // Cargar datos desde localStorage al iniciar
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('academicData')) || [];
        setAcademicData(storedData);
    }, []);

    // Guardar datos en localStorage cuando academicData cambie
    useEffect(() => {
        localStorage.setItem('academicData', JSON.stringify(academicData));
    }, [academicData]);

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    // Añadir datos al estado
    const handleAdd = () => {
        if (!formData.titulo || !formData.institucion || !formData.fechaInicio || !formData.fechaFin) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        setAcademicData((prev) => [...prev, formData]);
        setFormData({ titulo: '', institucion: '', fechaInicio: '', fechaFin: '' });
    };

    // Eliminar un registro
    const handleDelete = (index) => {
        const updatedData = academicData.filter((_, i) => i !== index);
        setAcademicData(updatedData);
    };

    return (
        <div className="academic-info container">
            <h4 className="title-genera-areas text-start    ">
                Formación académica.
            </h4>
            <div className="row mb-4">
                <div className="col-md-4">
                    <label className="form-label">Titulo obtenido</label>
                    <input
                        type="text"
                        id="titulo"
                        className="form-control"
                        placeholder="Escribe aquí..."
                        value={formData.titulo}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Institución</label>
                    <input
                        type="text"
                        id="institucion"
                        className="form-control"
                        placeholder="Escribe aquí..."
                        value={formData.institucion}
                        onChange={handleChange}
                    />
                </div>
                <div className="row col-md-4">
                    <div className="col-6">
                        <label className="form-label">Fecha de inicio</label>
                        <input
                            type="date"
                            id="fechaInicio"
                            className="form-control"
                            value={formData.fechaInicio}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-6">
                        <label className="form-label">Fecha de terminación</label>
                        <input
                            type="date"
                            id="fechaFin"
                            className="form-control"
                            value={formData.fechaFin}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col text-end">
                    <button id="btn-save" className="btn btn-save">
                        <FaSave /> Guardar
                    </button>
                    <button id="btn-añadir" className="btn btn-add me-1" onClick={handleAdd}>
                        <FaPlus /> Añadir
                    </button>
                    <button id="btn-delete-academia" className="btn btn-add me-1" onClick={() => setAcademicData([])}>
                        <FaTrash /> Eliminar todo
                    </button>                    
                </div>
            </div>

            <div className="mt-4">
                <h6 style={{color: "#023D6A"}}  >Registros Académicos:</h6>
                {academicData.length === 0 ? (
                    <p style={{color: "#023D6A"}}>No hay registros</p>
                ) : (
                    <ul className="list-group">
                        {academicData.map((data, index) => (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                <div className="row col-10">
                                    <div className='col-3'>
                                        <label className="form-label">Titulo obtenido</label>
                                        <input
                                            type="text"
                                            disabled
                                            className="form-control"
                                            value={data.titulo}
                                            style={{ color: "#023D6A" }}
                                        />
                                    </div>
                                    <div className='col-3'>
                                        <label className="form-label">Institución</label>
                                        <input
                                            type="text"
                                            disabled
                                            className="form-control"
                                            value={data.institucion}
                                            style={{ color: "#023D6A" }}
                                        />
                                    </div>
                                    <div className='col-3'>
                                        <label className="form-label">Fecha de inicio</label>
                                        <input
                                            type="text"
                                            disabled
                                            className="form-control"
                                            value={data.fechaInicio}
                                            style={{ color: "#023D6A" }}
                                        />
                                    </div>
                                    <div className='col-3'>
                                        <label className="form-label">Fecha de terminación</label>
                                        <input
                                            type="text"
                                            disabled
                                            className="form-control"
                                            value={data.fechaFin}
                                            style={{ color: "#023D6A" }}
                                        />
                                    </div>
                                </div>   
                                <button
                                    className="btn btn-sm btn"
                                    id="btn-delete-individual-academia"
                                    onClick={() => handleDelete(index)}
                                    >
                                    <FaTrash/>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default AcademicInformation;
