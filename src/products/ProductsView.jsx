import { useEffect, useState } from "react";
import { initialProducts } from "./productsData";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const ProductsView = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("productos")) || initialProducts;
    setProducts(stored);
  }, []);

  const eliminarProducto = (id) => {
    const confirmacion = confirm("¿Seguro que deseas eliminar este producto?");
    if (confirmacion) {
      const nuevos = products.filter((p) => p.id !== id);
      setProducts(nuevos);
      localStorage.setItem("productos", JSON.stringify(nuevos));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Lista de Productos</h2>
      <Button
        label="Agregar producto"
        icon="pi pi-plus"
        className="mb-4"
        onClick={() => navigate("/productos/crear")}
      />
      <div className="grid gap-3">
        {products.map((p) => (
          <Card key={p.id} title={p.name}>
            <p>Precio: ${p.price}</p>
            <Button
              label="Eliminar"
              icon="pi pi-trash"
              severity="danger"
              onClick={() => eliminarProducto(p.id)}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductsView;
