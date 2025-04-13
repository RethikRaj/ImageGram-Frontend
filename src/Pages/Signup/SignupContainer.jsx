import axios from "axios";
import Signup from "./Signup";
import { useFormik } from 'formik';

const SignupContainer = ()=>{
    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Required';
        } else if (values.username.length < 4) {
            errors.username = 'Must be 4 characters or more';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 8) {
            errors.password = 'Must be 8 characters or more';
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validate: validate,
        onSubmit: async (values) => {
            const response = await axios.post("https://imagegram-to1p.onrender.com/api/v1/users/signup",{
                username: values.username,
                email: values.email,
                password: values.password
            })

            console.log(response);
        },
    });
    return (
        <Signup formik={formik}/>
    )
}

export default SignupContainer;