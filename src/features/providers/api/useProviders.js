import { useState, useEffect } from "react";
import apiClient from "../../../Config/axiosConfig";

const useProviders = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

<<<<<<< HEAD
  // Definimos fetchUsers fuera del useEffect para poder llamarlo después
=======
  // Función para obtener proveedores desde el backend
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
  const fetchProviders = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.get("/providers/getProviders"); 
      setProviders(response.data);
    } catch (err) {
<<<<<<< HEAD
      setError(err.response?.data?.message || "Error al obtener los proveedores");
=======
      setError(err.response?.data?.message || "Error al obtener proveedores");
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
    } finally {
      setLoading(false);
    }
  };

<<<<<<< HEAD
  // Llamamos a fetchUsers cuando el componente se monta
=======
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
  useEffect(() => {
    fetchProviders();
  }, []);

<<<<<<< HEAD
  return { providers, loading, error, fetchProviders }; 
=======
  return { providers, setProviders, loading, error, fetchProviders }; // 🔹 Ahora devuelve `setProviders`
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
};

export default useProviders;
