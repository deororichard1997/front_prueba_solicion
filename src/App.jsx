// import logo from './logo.svg';

import React, { useState, useEffect } from "react";
import { login } from "../src/services/authService";
import Header from './components/Header';
import Slider from './components/Slider';
import UserProfile from './components/UserProfile';
import Areas from './components/Areas';
import FormSection from './components/FormSection';
import FormSection2 from './components/FormSection2';
import AcademicInfo from './components/AcademicInformation';
import WorkExperience from './components/WorkExperience';
import api from './services/api';
import { FaUserAlt, FaMoneyBillWave, FaIndustry, FaTruck, FaHeart, FaBrain, FaCog, FaGlobe, FaBook, FaRegQuestionCircle, FaLaptop, FaExchangeAlt, FaRegMeh } from 'react-icons/fa';
import './App.css';

const App = () => {

  const [user, setUser] = useState(null); // Estado para almacenar la información del usuario
  const [error, setError] = useState(null);

    const areasData = [
      { id: 1, nombre: 'Áreas humanas', icono: <FaUserAlt /> },
      { id: 2, nombre: 'Áreas financieras', icono: <FaMoneyBillWave /> },
      { id: 3, nombre: 'Áreas Comerciales', icono: <FaIndustry /> },
      { id: 4, nombre: 'Áreas de logística', icono: <FaTruck /> },
      { id: 5, nombre: 'Genérica', icono: <FaRegQuestionCircle /> }
  ];

  const jornadas = [
      { id: 1, nombre: 'Presencial', icono: <FaUserAlt /> },
      { id: 2, nombre: 'Remoto', icono: <FaLaptop /> },
      { id: 3, nombre: 'Hibrido', icono: <FaExchangeAlt /> },
      { id: 4, nombre: 'Me es indiferente', icono: <FaRegMeh /> }
  ];

  const culturas = [
      { id: 1, nombre: 'Emocionales', icono: <FaHeart /> },
      { id: 2, nombre: 'Conocimiento', icono: <FaBook /> },
      { id: 3, nombre: 'Remoto', icono: <FaGlobe /> },
      { id: 4, nombre: 'Producción', icono: <FaCog /> },
      { id: 5, nombre: 'Intuitiva', icono: <FaBrain /> },
      { id: 6, nombre: 'Me es indiferente', icono: <FaRegMeh /> }
  ];

    useEffect(() => {
      const iniciarSesion = async () => {
        try {
          console.log(api);
          
          // Simular inicio de sesión
          const loginResponse = await login("richard.deoro@example.com", "password123");

          console.log(loginResponse);
          
          // Obtener información del usuario
          // const usuarioData = await obtenerUsuario(loginResponse.user.id); // Supone que `id` está en la respuesta
          // setUser({
          //   name: usuarioData.name || "Richard De Oro",
          //   email: usuarioData.email,
          //   photo: usuarioData.photo || "https://via.placeholder.com/150",
          //   document: usuarioData.document || "Sin documento",
          // });
        } catch (error) {
          setError("Error al iniciar sesión. Verifique las credenciales.");
          console.error(error);
        }
      };
  
      iniciarSesion();
    }, []);

    return (
      <div className="App" style={{width: '100%'}}>
          <Header />
          <Slider />
          {/* <UserProfile user={user} /> */}
          <div className="container configurar-perfil m-0">
            <h4 className="title-genera-areas text-center mb-4">
              Configura esta sesión para un perfil más detallado.
            </h4>
            <Areas data={areasData} title="Tipo de formación y empleo que buscas:" />
            <Areas data={jornadas} title="Opciones de jornadas:" />
            <Areas data={culturas} title="Qué tipos de cultura te gustan más" />
            <span className="text-fin-areas">
              Elegir una cultura específica no te descarta de ningún proceso.
            </span>
          </div>
          <div class="container-fluid mt-4">          
            <FormSection />
          </div>        
          <AcademicInfo />
          <WorkExperience />
          <div class="container-fluid mt-4">          
            <FormSection2 />
          </div>    
      </div>
    );
};

export default App;
