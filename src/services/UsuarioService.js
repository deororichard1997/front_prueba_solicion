import api from './Api';  // Importa la configuración base de Axios

export const crearUsuario = async (usuarioData) => {
    try {
        const response = await api.post('/api/usuarios/store', usuarioData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        throw error;
    }
};

export const obtenerUsuario = async (id) => {
    try {
        const response = await api.get(`/api/usuarios/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        throw error;
    }
};

export const actualizarUsuario = async (id, usuarioData) => {
    try {
        const response = await api.put(`/api/usuarios/${id}`, usuarioData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        throw error;
    }
};

export const eliminarUsuario = async (id) => {
    try {
        const response = await api.delete(`/api/usuarios/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        throw error;
    }
};

