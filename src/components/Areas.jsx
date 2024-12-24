import React, { useState } from "react";
import "../css/Areas.css";

const Areas = ({ data, title }) => {
  const [selectedArea, setSelectedArea] = useState(null);

  const handleAreaClick = (area) => {
    setSelectedArea(area.nombre);
  };

  return (
    <div>
      <h6 className="title-areas text-center mb-3 mt-3">{title}</h6>
      <div className="areas-container">
        {data.map((area) => (
          <div key={area.id} className="area-item">
            <div
              className={`area-icon ${selectedArea === area.nombre ? "selected" : ""}`}
              onClick={() => handleAreaClick(area)}
            >
              <div className={`icon-circle ${selectedArea === area.nombre ? "selected-circle" : ""}`}>
                {area.icono}
              </div>
            </div>
            <br />
            <span className={selectedArea === area.nombre ? "selected-text" : ""}>
              {area.nombre}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Areas;
