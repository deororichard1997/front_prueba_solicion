import api from './Api';  // Importa la configuración base de Axios

export const login = async (email, password) => {
    console.log(email);
    console.log(password);
    
    try {
        const response = await api.post('/api/login', {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error("Error al hacer login:", error);
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await api.post('/api/logout', {}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error al hacer logout:", error);
        throw error;
    }
};

export const restablecerPassword = async (email) => {
    try {
        const response = await api.post('/api/restablecer-password', {
            email,
        });
        return response.data;
    } catch (error) {
        console.error("Error al restablecer la contraseña:", error);
        throw error;
    }
};

// export default {
//     login,
//     logout,
//     restablecerPassword,
// };
