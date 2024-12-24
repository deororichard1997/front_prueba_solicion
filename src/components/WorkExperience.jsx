import React, { useState, useEffect } from 'react';
import { FaPaperclip, FaPlus, FaSave, FaTrash } from 'react-icons/fa';
import '../css/WorkExperience.css';

const WorkExperience = () => {
    const [workData, setWorkData] = useState([]);
    const [formData, setFormData] = useState({
        cargo: '',
        empresa: '',
        fechaInicio: '',
        fechaFin: '',
        descripcion: '',
    });

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('workData')) || [];
        setWorkData(storedData);
    }, []);

    useEffect(() => {
        localStorage.setItem('workData', JSON.stringify(workData));
    }, [workData]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleAdd = () => {
        if (!formData.cargo || !formData.empresa || !formData.fechaInicio || !formData.fechaFin || !formData.descripcion) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        setWorkData((prev) => [...prev, formData]);
        setFormData({ cargo: '', empresa: '', fechaInicio: '', fechaFin: '', descripcion: '' });
    };

    const handleDelete = (index) => {
        const updatedData = workData.filter((_, i) => i !== index);
        setWorkData(updatedData);
    };

    return (
        <div className="work-experience container">
            <h4 className="title-genera-experiencia text-start form-label-white mt-3">Experiencia Laboral</h4>
            <div className="row mb-4">
                <div className="col-md-4">
                    <label className="form-label form-label-white">Cargo</label>
                    <input
                        type="text"
                        id="cargo"
                        className="form-control"
                        placeholder="Ingrese el cargo"
                        value={formData.cargo}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-4">
                    <label className="form-label form-label-white">Empresa</label>
                    <input
                        type="text"
                        id="empresa"
                        className="form-control"
                        placeholder="Ingrese el nombre de la empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                    />
                </div>
                <div className="row col-md-4">
                    <div className="col-6">
                        <label className="form-label form-label-white">Fecha de inicio</label>
                        <input
                            type="date"
                            id="fechaInicio"
                            className="form-control"
                            value={formData.fechaInicio}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-6">
                        <label className="form-label form-label-white">Fecha de terminación</label>
                        <input
                            type="date"
                            id="fechaFin"
                            className="form-control"
                            value={formData.fechaFin}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <label className="form-label form-label-white">Menciona 3 principales logros</label>
                    <textarea
                        id="descripcion"
                        className="form-control"
                        rows="4"
                        placeholder="Describe tus responsabilidades o logros"
                        value={formData.descripcion}
                        onChange={handleChange}
                    ></textarea>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col text-start">
                    <button id="btn-adjuntar" className="btn btn-attach me-2">
                        <FaPaperclip /> Añadir certificación, fotos o premios
                    </button>
                </div>
            </div>

            <div className="row mb-4">
                <div className='text-start col-7'>
                    <span id="text-adjuntar-doc">Si tienes fotos de tu experiencia laboral compártela con nosotros (fotos con el equipo de trabajo, en eventos realizados, dando una charla, recibiendo un premio) recuerda que el mal uso de este espacio puede generar que tu perfil no sea aprobado. Si no tienes fotos que generen valor, deja este espacio en blanco.</span>
                </div>
                <div className="col-3">
                    <label className="form-label form-label-white">Trabaja aquí actualmente</label>
                    <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="trabaja_actualmente"
                        />
                    <label className="form-check-label" htmlFor="trabaja_actualmente">
                    </label>
                    </div>
                </div>
            </div>

            <div className="row mb-4">                    
                <div className="col text-end">                    
                    <button id="btn-anadir-experiencia" className="btn btn-add me-2" onClick={handleAdd}>
                        <FaPlus /> Agregar
                    </button>
                    <button id="btn-save" className="btn btn-save me-2">
                        <FaSave /> Guardar
                    </button>
                    <button id="btn-delete-experiencia" className="btn btn-delete me-2" onClick={() => setWorkData([])}>
                        <FaTrash /> Eliminar todo
                    </button>
                </div>
            </div>

            <div className="mt-4 mb-4">
                <h6 style={{ color: "#023D6A" }}>Registros de Experiencia Laboral:</h6>
                {workData.length === 0 ? (
                    <p style={{ color: "#023D6A" }}>No hay registros</p>
                ) : (
                    <ul className="list-group">
                        {workData.map((data, index) => (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                <div className="row col-10">
                                    <div className="col-md-3">
                                        <label className="form-label">Cargo</label>
                                        <input
                                            type="text"
                                            disabled
                                            className="form-control"
                                            value={data.cargo}
                                            style={{ color: "#023D6A" }}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label">Empresa</label>
                                        <input
                                            type="text"
                                            disabled
                                            className="form-control"
                                            value={data.empresa}
                                            style={{ color: "#023D6A" }}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label">Fecha de inicio</label>
                                        <input
                                            type="text"
                                            disabled
                                            className="form-control"
                                            value={data.fechaInicio}
                                            style={{ color: "#023D6A" }}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label">Fecha de terminación</label>
                                        <input
                                            type="text"
                                            disabled
                                            className="form-control"
                                            value={data.fechaFin}
                                            style={{ color: "#023D6A" }}
                                        />
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <label className="form-label">Descripción</label>
                                        <textarea
                                            disabled
                                            className="form-control"
                                            value={data.descripcion}
                                            style={{ color: "#023D6A" }}
                                            rows="2"
                                        ></textarea>
                                    </div>
                                </div>
                                <button
                                    className="btn btn-sm btn"
                                    id="btn-delete-individual"
                                    onClick={() => handleDelete(index)}
                                >
                                    <FaTrash />
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default WorkExperience;
