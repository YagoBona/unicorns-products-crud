import { useEffect } from "react";
import { useUnicorns } from "../context/UnicornContext";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const UnicornsView = () => {
  const { unicorns, getUnicorns, deleteUnicorn } = useUnicorns();
  const navigate = useNavigate();

  useEffect(() => {
    getUnicorns();
  }, []);

  const handleEdit = (id) => {
    navigate(`/unicornios/editar/${id}`);
  };

  const handleDelete = (id) => {
    if (confirm("¿Seguro que queres eliminar este unicornio?")) {
      deleteUnicorn(id);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Lista de Unicornios</h2>
      <Button
        label="Crear nuevo"
        icon="pi pi-plus"
        className="mb-4"
        onClick={() => navigate("/unicornios/crear")}
      />
      <div className="grid gap-3">
        {unicorns.map((unicorn) => (
          <Card key={unicorn._id} title={unicorn.name}>
            <p>Color: {unicorn.color}</p>
            <p>Edad: {unicorn.age}</p>
            <div className="flex gap-2 mt-2">
              <Button
                label="Editar"
                icon="pi pi-pencil"
                onClick={() => handleEdit(unicorn._id)}
              />
              <Button
                label="Eliminar"
                icon="pi pi-trash"
                severity="danger"
                onClick={() => handleDelete(unicorn._id)}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UnicornsView;
