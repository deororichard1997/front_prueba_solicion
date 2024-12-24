// import logo from './logo.svg';

import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import UserProfile from './components/UserProfile';
import Areas from './components/Areas';
import FormSection from './components/FormSection';
import AcademicInfo from './components/AcademicInformation';
import WorkExperience from './components/WorkExperience';
import api from '../src/services/Api';
import './App.css';

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get('/user');
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, []);

    // if (!user) return <p>Cargando...</p>;

    return (
      <div className="app">
          <Header />
          <Slider />
          {/* <UserProfile user={user} /> */}
          <Areas />
          <FormSection />
          <AcademicInfo />
          <WorkExperience />
      </div>
    );
};

export default App;
