import * as Yup from "yup";

const EmployeeSchema = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  line1: Yup.string().required("Required"),
  line2: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zipcode: Yup.string().required("Required"),
  skill: Yup.string().required("Required")
});

export default EmployeeSchema;
