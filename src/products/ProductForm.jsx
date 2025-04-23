import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "primereact/button";

const ProductForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    price: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("El nombre es obligatorio"),
    price: Yup.number()
      .required("El precio es obligatorio")
      .positive("Debe ser mayor a 0"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    const stored = JSON.parse(localStorage.getItem("productos")) || [];
    const nuevoProducto = {
      ...values,
      id: Date.now(),
    };
    const actualizados = [...stored, nuevoProducto];
    localStorage.setItem("productos", JSON.stringify(actualizados));
    navigate("/productos");
    setSubmitting(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Crear Producto</h2>
      <Formik
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
              <label>Precio</label>
              <Field name="price" type="number" className="p-inputtext w-full" />
              <ErrorMessage name="price" component="div" className="text-red-500" />
            </div>

            <Button
              type="submit"
              label="Agregar"
              icon="pi pi-check"
              loading={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
