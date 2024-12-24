import React from 'react';
import '../css/Areas.css';

const Areas = () => (
    <div className="areas">
        {['Ciencia', 'Tecnología', 'Humanidad'].map((area) => (
            <div key={area} className="area-icon">
                <span>{area}</span>
            </div>
        ))}
    </div>
);

export default Areas;
