import { useFormik } from "formik";
import { validateForm } from "../utils/validateForm";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";

const useAuthForm = (endpoint)=>{
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validate: validateForm,
        onSubmit: async (values) => {
            const response = await axiosInstance.post(`/users/${endpoint}`,{
                username: values.username,
                email: values.email,
                password: values.password
            })

            console.log(response.data);
            if(endpoint === 'signup'){
                navigate('/signin')
            }
        },
    });

    return formik;
}

export default useAuthForm;