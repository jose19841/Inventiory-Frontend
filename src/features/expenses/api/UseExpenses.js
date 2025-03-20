import { useState, useEffect } from "react";
import apiClient from "../../../Config/axiosConfig";

<<<<<<< HEAD
const useExpenses = () => {
=======
const useExpense = () => {
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

<<<<<<< HEAD
  // Función para obtener los gastos
=======
  // ✅ Función mejorada para formatear fecha a "DD/MM/YYYY"
  const formatDateToDDMMYYYY = (dateString) => {
    if (!dateString) return ""; // Manejo seguro de valores null/undefined

    const timestamp = Date.parse(dateString);
    if (isNaN(timestamp)) {
      console.error("❌ Error al formatear la fecha:", dateString);
      return "";
    }

    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // ✅ Función para obtener los gastos y formatear las fechas
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
  const fetchExpenses = async () => {
    setLoading(true);
    setError(null);
    try {
<<<<<<< HEAD
      const response = await apiClient.get("/expenses/getAll"); 
      setExpenses(response.data);
=======
      const response = await apiClient.get("/expenses/getAll");

      
      const formattedExpenses = response.data.map((expense) => ({
        ...expense,
        date: expense.date, // ✅ Usamos la fecha tal cual la envía el backend
      }));
      

      setExpenses(formattedExpenses);
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
    } catch (err) {
      setError(err.response?.data?.message || "Error al obtener los gastos");
    } finally {
      setLoading(false);
    }
  };

<<<<<<< HEAD
  // Llamamos a fetchExpenses cuando el componente se monta
  useEffect(() => {
    fetchExpenses();
  }, []);

  return { expenses, loading, error, fetchExpenses }; 
};

export default useExpenses;
=======


  return { expenses, loading, error, fetchExpenses };
};

export default useExpense;
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
