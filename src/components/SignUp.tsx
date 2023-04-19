import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import * as yup from "yup";
import { successMsg } from "../services/Feedbacks";
import { newUser } from "../services/UserServices";
import User from "../interfaces/User";
import Footer from "./Footer";

interface SignUpProps {

    setIsLoggedIn: Function;
    setIsBuisness: Function
}

const SignUp: FunctionComponent<SignUpProps> = ({ setIsLoggedIn, setIsBuisness }) => {
    let navigate = useNavigate();
    let formik = useFormik({
        initialValues: { name: "", email: "", password: "" },
        validationSchema: yup.object({
            name: yup.string().required().min(2, "Name too short"),
            email: yup.string().required().min(5).email(),
            password: yup.string().required().min(8, "Password too short"),
        }),
        onSubmit: (values: User) => {
            newUser({ ...values, isBuisness: false })
                .then((res) => {
                    successMsg("You  signed Up Successfully!");
                    navigate("/home");
                    setIsLoggedIn(true)
                    setIsBuisness(false)
                    console.log(res.data);
                    
                    sessionStorage.setItem(
                        "userData",
                        JSON.stringify({
                            isLoggedIn: true,
                            token:res.data,
                        })
                    );
                })
                .catch((err) => console.log(err));
        },
    });

    return (
        <>
            <div className="signUp">
                <div className="container col-md-4 mt-3  text-center">
                    <h1 style={{ color: "gold", fontFamily: "Comic Sans MS" }}> sign up! <i className="fa-solid fa-user-plus"></i><button className="btn btn-success" onClick={() => navigate("/")}> Already have an user? signIn</button> </h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                aria-describedby="emailHelp"
                                name="name"
                                value={formik.values.name}
                                placeholder="name"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.name && formik.errors.name && (
                                <p className="text-danger">{formik.errors.name}</p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name="email"
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-danger">{formik.errors.email}</p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                name="password"
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-danger">{formik.errors.password}</p>
                        )}
                        <button
                            type="submit"
                            className="btn btn-primary w-100 my-3"
                            disabled={!formik.isValid || !formik.dirty}
                        >
                            Sign In
                        </button>
                    </form>
                    {/* <Link to="/">Already have user? Click here</Link> */}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default SignUp;