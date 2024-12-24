import React, { useState } from "react";
import { FaSave } from 'react-icons/fa';
import "../css/FormSection2.css";

const FormSection2 = () => {
  const [selectedCompetencies, setSelectedCompetencies] = useState([]);

  const handleSelectChange = (event) => {
    // Captura las opciones seleccionadas
    const options = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedCompetencies(options);
  };

  return (
    <form className="form-section container">
      <div className="row mb-4">
        <div className="col-md-12">
          <label className="form-label">Datos complementarios</label>
          <label className="form-label">Opcional</label>
          <textarea
            id="datos_complementarios"
            className="form-control"
            rows="4"
            placeholder="Escríbelas aquí..."
          ></textarea>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-12">
          <label className="form-label">Elige las 5 competencias que más te caracterizan</label>
          <select
            id="competencias"
            className="form-select"
            // multiple
            onChange={handleSelectChange}
          >
            <option value="1">Comunicación</option>
            <option value="2">Trabajo en equipo</option>
            <option value="3">Resolución de problemas</option>
            <option value="4">Adaptabilidad</option>
            <option value="5">Liderazgo</option>
            <option value="6">Responsabilidad</option>
            <option value="7">Creatividad</option>
          </select>
        </div>
      </div>
      <div className="row mb-5 justify-content-center text-center" >
        <div className="col-12">
            <button
                className="btn btn-sm"
                id="btn-guardar-global"
                >
                <FaSave/> Guardar información
            </button>
        </div>
      </div>
    </form>
  );
};

export default FormSection2;
