import { useState } from "react";
import apiClient from "../../../Config/axiosConfig";
<<<<<<< HEAD
=======
import { format, isValid, parseISO } from "date-fns";
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)

const useRegisterExpense = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

<<<<<<< HEAD
=======
  // 🔹 Función para formatear la fecha a "dd/MM/yyyy"
  const formatDateToDDMMYYYY = (date) => {
    if (!date) return null;
    try {
      const parsedDate = new Date(date);
      if (!isValid(parsedDate)) throw new Error("Fecha inválida");
      return format(parsedDate, "dd/MM/yyyy"); // Enviamos el formato esperado por el backend
    } catch (error) {
      console.error("❌ Error al formatear la fecha:", error);
      return null;
    }
  };

>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
  const registrationExpense = async (expenseData) => {
    setLoading(true);
    setError(null);

    try {
<<<<<<< HEAD
      const response = await apiClient.post("/expenses/register", expenseData);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.error || "Error al registrar el gasto");
=======
      // 🔹 Convertimos la fecha antes de enviarla si existe
      const formattedExpense = {
        ...expenseData,
        expenseDate: expenseData.expenseDate
          ? formatDateToDDMMYYYY(expenseData.expenseDate)
          : null,
      };

      console.log("📤 Enviando a backend:", formattedExpense); // Depuración

      const response = await apiClient.post("/expenses/register", formattedExpense);
      console.log("✅ Respuesta del backend:", response.data); // Depuración
      return response.data;
    } catch (err) {
      console.error("❌ Error al registrar gasto:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Error al registrar el gasto");
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { registrationExpense, loading, error };
};

export default useRegisterExpense;
