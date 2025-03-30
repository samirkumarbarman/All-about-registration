import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../App.css";

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:4040/api/auth/register', data);
            console.log(response.data);
            // Redirect to login page
            window.location.href = '/login';
        } catch (error) {
            console.error('There was an error registering the user!', error);
        }
    };

    return (
        <>
            <p className="title">Register User</p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <div>
                <label htmlFor="name">Name:</label>
                <input type="text" {...register("name")} />
                </div>
                <div>
                <label htmlFor="email">Email:</label>
                <input type="email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                </div>
                <div>
                <label htmlFor="password">Password:</label>
                <input type="password" {...register("password")} />
                </div>
                <input type={"submit"} style={{ backgroundColor: "#008CBA" }} />
            </form>
        </>
    );
}

export default Register;