import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';






const Signin = () => {
    const navigate = useNavigate();
    
const Handlesubmit= async (values)=>{
     
    console.log(values)

    const {email,password} = values;

    const res = await fetch("http://localhost:5003/api/users/login", {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                email,
                password//name:name, both same no need
            }
        ),

    });
    const resp = await res.json();
    if (resp.status=== 422 || !resp){
        // window.alert("Invalid Registration")
    }
    else{
        console.log("Successfully login")
    }
}

    return (
        <>

            <Formik
                initialValues={{ email: "", password: "" }}
                // validationSchema={LoginSchema}
                onSubmit={(values) => {
                    Handlesubmit(values);
                }}
            >
                <Form>
                    <div className="container">

                        <div className="wrapper">


                            <div className="right">
                                <div className="title">Welcome back, Manu</div>


                                <div className='email'>
                                    <label htmlFor="email"></label>
                                    <Field
                                        className="box"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        autocomplete="off"
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
                                        autocomplete="off"
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="password"
                                    />
                                </div>


                                <button type="submit" className="button1">Log in</button>


                                <div className="desc">
                                    Don't have an account? <Link to="/Signup">Sign up for free
                                    </Link>
                                </div>
                            </div>

                            <div className="left">
                                <img className="img2" src="te2.png" alt="Card immage cap" />
                            </div>



                        </div>


                    </div>



                </Form>
            </Formik>
        </>



    )
}

export default Signin