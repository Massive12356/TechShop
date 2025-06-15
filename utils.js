import * as Yup from "yup";

export const currencyToString = (price) => {
  price = Math.floor(price);
  const arr = price.toString().split("");
  arr.length > 3 && arr.splice(1, 0, ",");

  return arr.join("");
};

export const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  zipCode: "",
  city: "",
  country: "",
  eNumber: "",
  ePin: "",
};

export const checkoutSchema = {
  name: Yup.string().required("*Required"),
  email: Yup.string().email("Invalid email").required("*Required"),
  phone: Yup.string().required("*Required"),
  address: Yup.string().required("*Required"),
  zipCode: Yup.string().min(4, "Too short").required("*Required"),
  city: Yup.string().required("*Required"),
  country: Yup.string().required("*Required"),
};
