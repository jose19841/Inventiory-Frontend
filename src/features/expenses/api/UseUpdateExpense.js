import { useState } from "react";
import apiClient from "../../../Config/axiosConfig";

const useUpdateExpense = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateExpense = async (expenseData) => {
    setLoading(true);
    setError(null);
<<<<<<< HEAD
    try {
      const { id, ...sanitizedData } = expenseData; // Extraemos el ID y enviamos solo los datos necesarios

      const response = await apiClient.put(
        `/expenses/${id}`, // ✅ ID en la URL
        sanitizedData       // ✅ Solo los datos válidos en el body
=======

    try {
      const { id, date, ...sanitizedData } = expenseData;

      // ✅ Verificar que `date` no sea null antes de enviar la solicitud
      if (!date) {
        throw new Error("La fecha del gasto es obligatoria.");
      }

      const response = await apiClient.put(
        `/expenses/${id}`, // ✅ ID en la URL
        { date, ...sanitizedData } // ✅ Asegura que `date` esté presente en el body
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
      );

      return response.data;
    } catch (err) {
<<<<<<< HEAD
      setError(err.response?.data?.error || "Error al actualizar el gasto");
      throw new Error(err.response?.data?.error || "Error al actualizar el gasto");
=======
      const errorMessage = err.response?.data?.error || "Error al actualizar el gasto";
      setError(errorMessage);
      throw new Error(errorMessage);
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
    } finally {
      setLoading(false);
    }
  };

  return { updateExpense, loading, error };
};

export default useUpdateExpense;
