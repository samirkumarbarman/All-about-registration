import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./App.css";

function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:4040/api/auth/register', data);
            console.log(response.data);
        } catch (error) {
            console.error('There was an error registering the user!', error);
        }
    };

    return (
        <>
            <p className="title">Register User</p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} />
                <input type="email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                <input type="password" {...register("password")} />
                <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
            </form>
        </>
    );
}
export default App;
