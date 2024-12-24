import React from 'react';
import '../css/FormSection.css';

const FormSection = () => (
    <form className="form-section">
        <input type="text" placeholder="Nombre" />
        <select>
            <option>Opción 1</option>
            <option>Opción 2</option>
        </select>
        <label>
            <span>Activar</span>
            <input type="checkbox" />
        </label>
    </form>
);

export default FormSection;
