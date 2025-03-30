import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:4040/api/auth/login', data);
            console.log(response.data);
            navigate('/welcome');
        } catch (error) {
            console.error('There was an error logging in the user!', error);
        }
    };

    return (
        <>
            <p className="title">Login</p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <div>
                <label htmlFor="email">Email:</label>
                <input type="email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                </div>
                <label htmlFor="password">Password:</label>
                <input type="password" {...register("password", { required: true })} />
                {errors.password && <span style={{ color: "red" }}>
                    *Password* is mandatory </span>}
                <input type={"submit"} style={{ backgroundColor: "#008CBA" }} />
            </form>
        </>
    );
}

export default Login;