import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("User Email is Required"),
  password: Yup.string()
    .min(6, "Passord must not be too short!")
    .max(50, "Passowrd is too Long!")
    .required("Password is Required"),
});

export const SignupSchema = Yup.object().shape({
    customerType: Yup.string().required("Please Select an option"),
    citizenship: Yup.string().required("Please Select an option"),
    fname: Yup.string().min(2, "Name must not be two (2) characters long!")
    .max(50, "Name is too Long!")
    .required("Name is Required"),
    surname: Yup.string().min(2, "Name must not be two (2) characters long!")
    .max(50, "Name is too Long!")
    .required("Name is Required"),
    mobileNumber: Yup.string()
    .required("required")
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, "too short")
    .max(10, "too long"),
    Idnumber: Yup.string().required("User ID number is Required"),
    email: Yup.string().email("Invalid email").required("User Email is Required"),
    confirmEmail: Yup.string().email("Invalid email").required("User Email is Required"),
    password: Yup.string()
      .min(6, "Passord must not be too short!")
      .max(50, "Passowrd is too Long!")
      .required("Password is Required"),
  });
  
