import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";

function Register() {
    const backgroundColor = `bg-brightColor`;
    const initialValues = { name: "", email: "", phone: "",  password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChangeR = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmitR = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
        }
    }, [formErrors, formValues, isSubmit]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const phoner = /^\d{10}$/;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.phone) {
            errors.phone = "A valid phone number (10 digits) is required!"
        } else if (!phoner.test(values.phone)) {
            errors.phone = "This is not a valid phone number!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };

/* <pre>{JSON.stringify(formValues, undefined, 2)} </pre> */
    return (
        <div className = "login-container">
            <div className = "login-content">
                {Object.keys(formErrors).length === 0 && isSubmit ? ( <div className = "ui message success"> Signed Up successfully </div>) : ( <pre> </pre> )} 
                <form className = "contact-form" onSubmit = {handleSubmitR}>
                <h1 className = "contact-h1">Sign Up</h1>
                    <div className = "details">
                        <label> Name </label>
                        <input className = "inputs" type = "text" name = "name" placeholder = "Enter your name" value = {formValues.name} onChange = {handleChangeR} required />
                    </div>
                    <p>{formErrors.name}</p>
                    <div className = "details">
                        <label> Phone No. </label>
                        <input className = "inputs" type = "tel" name = "phone" placeholder = "Enter your mobile number" value = {formValues.phone} onChange = {handleChangeR} required/>
                    </div>
                    <p>{formErrors.phone}</p>
                    <div className = "details">
                        <label> Email </label>
                        <input className = "inputs" type = "email" name = "email" placeholder = "Enter your email" value = {formValues.email} onChange = {handleChangeR} required/>
                    </div>
                    <p>{formErrors.email}</p>
                    <div className = "details">
                        <label> Password </label>
                        <input className = "inputs" type = "password" name = "password" placeholder = "Enter your password" value = {formValues.password} onChange = {handleChangeR} required/>
                    </div>
                    <p>{formErrors.password}</p>
                    <div className = "forgot-password"> Already have an account? <Link to = "login" spy = {true} smooth = {true} duration = {500} className="click-here"> Sign in here! </Link></div>
                    <div className = "submit-details">
                    {/* <Link to = "register" spy = {true} smooth = {true} duration = {500} className = "button"> Sign Up </Link> */}
                        <Button onClick = {handleSubmitR} title = "Sign Up" backgroundColor = {backgroundColor} />
                    </div>
                </form>
            </div>
        </div>
        );
}

export default Register;