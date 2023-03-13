import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Mask2.css";



const Signup = () => {

    const navigate = useNavigate();
    const [response, setResponse] = useState()

    const handleSubmit = async (data) => {
        console.log(data)

        const { username, email, password, Phone_Number, vehicle_Number } = data;

        const res = await fetch("http://localhost:5003/api/users/register", {
            method: "POST", 
            headers: {                                                 
                "Content-Type": "application/json"
            },
        
            body: JSON.stringify(                                    
                {
                    username, email, password, Phone_Number, vehicle_Number  
                }
            ),

        });

        const resp = await res.json();
        if (resp.status === 422 || !resp || resp.message) {
       
            console.log(resp.message)
            setResponse(resp.message)
        }
        else {
           
            navigate("/signin")
            console.log("Successfully Registered")

        }
    }


    return (
        <>

            <Formik
                method="POST"
                initialValues={{ email: "", password: "" }}
                // validationSchema={LoginSchema}
                onSubmit={(data) => { handleSubmit(data) }}
            >
                <Form>
                    <div>
                        <div className="container">
                            <div className="wrapper">
                                <div className="left">
                                    <div className="img1">
                                        <img src="./te.jpeg" alt="img" />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="title">Create an account</div>


                                    <div className='name'>
                                        <label htmlFor="name"></label>
                                        <Field
                                            className="box"
                                            type="text"
                                            name="username"
                                            placeholder="Username"
                                            autoComplete="off"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="name"
                                        />
                                    </div>
                                    <div className='email'>
                                        <label htmlFor="email"></label>
                                        <Field
                                            className="box"
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            autoComplete="off"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="email"
                                        />

                                    </div>


                                    <div className='password'>
                                        <label htmlFor="password"></label>
                                        <Field
                                            className="box"
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            autoComplete="off"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="password"
                                        />
                                    </div>

                                    <div className='phone'>
                                        <label htmlFor="phone"></label>
                                        <Field
                                            className="box"
                                            type="number"
                                            name="Phone_Number"
                                            placeholder="Phone"
                                            autoComplete="off"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="phone"
                                        />
                                    </div>



                                    <div className='vehicle'>
                                        <label htmlFor="work"></label>
                                        <Field
                                            className="box"
                                            type="text"
                                            name="vehicle_Number"
                                            placeholder="Vehicle Number"
                                            autoComplete="off"

                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="vehicle"
                                        />
                                    </div>

                                    <button type="submit" className='button1'>Create Account</button>
                                    <div>{response}</div>
                                    <div className="desc">Already have an account? <Link to="/Signin">Login
                                    </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>


    )
}

export default Signup