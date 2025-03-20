<<<<<<< HEAD
import DataTable from "../../../components/DataTable";

const LowStockProductsTable = () => {
  const productos = [
    { id: 1, nombre: "Monitor", stock: 2 },
    { id: 2, nombre: "Impresora", stock: 3 },
    { id: 3, nombre: "Cable HDMI", stock: 1 },
  ];

  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Producto", accessor: "nombre" },
    { Header: "Stock", accessor: "stock" },
  ];
=======
import React from "react";
import DataTable from "../../../components/DataTable";
import useLowStockProducts from "../api/useLowStockProducts";
import { LoadingScreen } from "../../../components/LoadingScreen"; // 🔹 Muestra carga mientras obtiene los datos

const LowStockProductsTable = () => {
  const { lowStockProducts, loading, error } = useLowStockProducts();

  const columns = [
    { Header: "CODE", accessor: "code" },
    { Header: "Producto", accessor: "name" }, // 🔹 Adaptado al formato del backend
    { Header: "Stock", accessor: "stock" },
    { Header: "Stock Mínimo", accessor: "minStock" },
  ];
  // Función para definir clases de fila según el stock
  const getRowClass = (row) => {
    const stock = row.values.stock;
    const minStock = row.values.minStock;
    
    if (stock === 0) return "table-danger"; // Stock agotado → Rojo
    if (stock <= minStock) return "table-warning"; // Stock bajo → Amarillo
    return ""; // Stock normal → Sin color
  };

  if (loading) return <LoadingScreen />;
  if (error) return <p className="text-danger text-center">{error}</p>;
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)

  return (
    <div className="card p-3">
      <h4 className="text-center">⚠️ Productos con Stock Bajo</h4>
<<<<<<< HEAD
      <DataTable columns={columns} data={productos} />
=======
      <DataTable columns={columns} data={lowStockProducts || []} getRowClass={getRowClass} striped={false}/>
>>>>>>> e98b248 (Updated ChangePassword component with password visibility toggle)
    </div>
  );
};

export default LowStockProductsTable;
