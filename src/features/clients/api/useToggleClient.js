import apiClient from "../../../Config/axiosConfig";
import { useState } from "react";

const useToggleClient = () => {
  const [loading, setLoading] = useState(false);

  const toggleClient = async (id) => {
    setLoading(true);
    try {
<<<<<<< HEAD
      const response = await apiClient.put(`/clients/${id}/toggle-status`);
=======
      const response = await apiClient.patch(`/clients/toggle-status/${id}`);
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
      setLoading(false);
      return { success: true, message: response.data.message || "Estado del cliente actualizado con éxito." };
    } catch (error) {
      setLoading(false);
      
      let errorMessage = "Error al actualizar el estado del cliente.";
      if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      } else if (error.message) {
        errorMessage = error.message;
      }

      return { success: false, message: errorMessage };
    }
  };

  return { toggleClient, loading };
};

export default useToggleClient;
