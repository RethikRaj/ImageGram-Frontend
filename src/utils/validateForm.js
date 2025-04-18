export const validateForm = (values) => {
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