import { useEffect } from "react";
import { useUnicorns } from "../context/UnicornContext";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

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

  const exportToPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Listado de Unicornios", 14, 20);

    const tableData = unicorns.map((u) => [
      u.name,
      u.color,
      u.power || "Desconocido",
      u.age,
      u.status || "Activo",
    ]);

    const fecha = new Date().toLocaleDateString();
    doc.text(`Fecha de exportación: ${fecha}`, 14, 28);


    autoTable(doc, {
      startY: 30,
      head: [["Nombre", "Color", "Poder", "Edad", "Estado"]],
      body: tableData,
      theme: "striped",
      styles: {
        fontSize: 11,
        halign: "center",
        cellPadding: 4,
        lineColor: [200, 200, 200],
        lineWidth: 0.3,
      },
      headStyles: {
        fillColor: [40, 40, 140],
        textColor: 255,
        fontStyle: "bold",
        halign: "center",
      },
      alternateRowStyles: {
        fillColor: [240, 248, 255],
      },
      margin: { top: 30 },
    });
    

    doc.save("unicornios.pdf");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Lista de Unicornios</h2>

      <div className="flex gap-2 mb-4">
        <Button
          label="Crear nuevo"
          icon="pi pi-plus"
          className="p-button-success"
          onClick={() => navigate("/unicornios/crear")}
        />
        <Button
          label="Exportar PDF"
          icon="pi pi-file-pdf"
          className="p-button-danger"
          onClick={exportToPDF}
        />
      </div>

      <div className="grid gap-3">
        {unicorns.map((unicorn) => (
          <Card key={unicorn._id} title={unicorn.name}>
            <p>Color: {unicorn.color}</p>
            <p>Edad: {unicorn.age}</p>
            <p>Poder: {unicorn.power || "Desconocido"}</p>
            <p>Estado: {unicorn.status || "Activo"}</p>
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
