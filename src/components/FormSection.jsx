import React from "react";
import "../css/FormSection.css";

const FormSection = () => (
  <form className="form-section container">
    <div className="row mb-4">
      <div className="col-md-6">
        <label className="form-label">Rango Salarial</label>
        <select id="rango_salario" className="form-select">
          <option value="">Seleccione</option>
          <option value="1">$1,000 - $2,000</option>
          <option value="2">$2,001 - $3,000</option>
        </select>
      </div>
      <div className="col-md-6">
        <label className="form-label">Años de experiencia</label>
        <select id="experiencia" className="form-select">
          <option value="">Seleccione</option>
          <option value="1">0-2 años</option>
          <option value="2">3-5 años</option>
        </select>
      </div>
    </div>

    <div className="row mb-4">
      <div className="col-md-4">
        <label className="form-label">Nombre completo</label>
        <input
          type="text"
          id="nombre_completo"
          className="form-control"
          placeholder="Escribe aqui..."
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">Profesión</label>
        <input
          type="text"
          id="profesion"
          className="form-control"
          placeholder="Escribe aqui..."
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">Especializacíon</label>
        <input
          type="text"
          id="especializacion"
          className="form-control"
          placeholder="Escribe aqui..."
        />
      </div>
    </div>

    <div className="row mb-4">
      <div className="col-md-4">
        <label className="form-label">Número de documento</label>
        <input
          type="text"
          id="numero_documento"
          className="form-control"
          placeholder="Escribe aqui..."
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">Ciudad donde buscabas empleo</label>
        <input
          type="text"
          id="ciudad_de_empleo"
          className="form-control"
          placeholder="Escribe aqui..."
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">¿Estás dispuesto a trasladarte?</label>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="traslado"
            // checked={formData.traslado} // Si usas un estado
            // onChange={handleSwitchChange}
          />
          <label className="form-check-label" htmlFor="traslado">
            {/* {formData.traslado ? "Sí" : "No"} */}
          </label>
        </div>
      </div>
    </div>

    <div className="row mb-4">
      <div className="col-md-4">
        <label className="form-label">Correo electrónico</label>
        <input
          type="text"
          id="email"
          className="form-control"
          placeholder="Escribe aqui..."
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">Número de celular</label>
        <input
          type="text"
          id="celular"
          className="form-control"
          placeholder="Escribe aqui..."
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">Linkedin</label>
        <input
          type="text"
          id="linkedin"
          className="form-control"
          placeholder="Escribe aqui..."
        />
      </div>
    </div>

    <div className="row mb-4">
      <div className="col-md-12">
        <label className="form-label">
          ¿Qué valor agregado le ofreces a una empresa que te contrata? ¿Qué te
          diferencia de otras personas?
        </label>
        <textarea
          id="valor_agregado"
          className="form-control"
          rows="4"
          placeholder="Escribelas aqui..."
        ></textarea>
      </div>
    </div>

    <div className="row mb-4">
      <div className="col-md-6">
        <label className="form-label">Qué te hace feliz a nivel laboral</label>
        <input
          type="text"
          id="feliz_en_la_labor"
          className="form-control"
          placeholder="Escribe aqui..."
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Cúal es tu talento profesional</label>
        <input
          type="text"
          id="talento_profesional"
          className="form-control"
          placeholder="Escribe aqui..."
        />
      </div>
    </div>

    <div className="row mb-4">
      <div className="col-md-12">
        <label className="form-label">
          Qué ideas, proyectos o actividades has implementado que quieras
          contar. / Si no tienes experiencia ¿qué ideas tienes para implementar?
        </label>
        <textarea
          id="ideas"
          className="form-control"
          rows="4"
          placeholder="Escribelas aqui..."
        ></textarea>
      </div>
    </div>
  </form>
);

export default FormSection;
