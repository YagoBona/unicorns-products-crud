import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUnicorns } from "../context/UnicornContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "primereact/button";

const UnicornForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { unicorns, createUnicorn, editUnicorn } = useUnicorns();

  const unicornToEdit = id ? unicorns.find((u) => u._id === id) : null;

  const initialValues = {
    name: unicornToEdit?.name || "",
    color: unicornToEdit?.color || "",
    age: unicornToEdit?.age || "",
    power: unicornToEdit?.power || "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("El nombre es requerido"),
    color: Yup.string().required("El color es requerido"),
    age: Yup.number()
      .required("La edad es requerida")
      .positive("La edad debe ser mayor a 0")
      .integer("Debe ser un numero entero"),
    power: Yup.string().required("El poder es requerido"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      if (id) {
        await editUnicorn(id, values);
      } else {
        await createUnicorn(values);
      }
      navigate("/unicornios");
    } catch (error) {
      console.error("Error al guardar unicornio", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">{id ? "Editar Unicornio" : "Crear Unicornio"}</h2>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4 max-w-md">
            <div>
              <label>Nombre</label>
              <Field name="name" className="p-inputtext w-full" />
              <ErrorMessage name="name" component="div" className="text-red-500" />
            </div>

            <div>
              <label>Color</label>
              <Field name="color" className="p-inputtext w-full" />
              <ErrorMessage name="color" component="div" className="text-red-500" />
            </div>

            <div>
              <label>Edad</label>
              <Field name="age" type="number" className="p-inputtext w-full" />
              <ErrorMessage name="age" component="div" className="text-red-500" />
            </div>

            <div>
              <label>Poder</label>
              <Field name="power" className="p-inputtext w-full" />
              <ErrorMessage name="power" component="div" className="text-red-500" />
            </div>

            <Button
              type="submit"
              label={id ? "Guardar Cambios" : "Crear"}
              icon="pi pi-check"
              loading={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UnicornForm;
