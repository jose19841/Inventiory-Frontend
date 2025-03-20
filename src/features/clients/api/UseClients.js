import { useState, useEffect } from "react";
import apiClient from "../../../Config/axiosConfig";

const useClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Definimos fetchClients fuera del useEffect para poder llamarlo después
  const fetchClients = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.get("/clients/getClients"); 
      setClients(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Error al obtener los clientes");
    } finally {
      setLoading(false);
    }
  };

<<<<<<< HEAD
  // Llamamos a fetchClients cuando el componente se monta
  useEffect(() => {
    fetchClients();
  }, []);
=======

>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)

  return { clients, loading, error, fetchClients }; 
};

export default useClients;
