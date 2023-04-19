import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import * as yup from "yup";
import { checkUser } from "../services/UserServices";
import { errorMsg, successMsg } from "../services/Feedbacks";
import User from "../interfaces/User";
import Footer from "./Footer";

interface SignInProps {
    setIsLoggedIn: Function;
    setIsBuisness: Function
}

const SignIn: FunctionComponent<SignInProps> = ({ setIsLoggedIn, setIsBuisness }) => {
    let navigate = useNavigate();
    let formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: yup.object({
            email: yup.string().required().email("invalid email"),
            password: yup.string().required().min(6, "Too short ! password should be at least 6 charcacters")
        }),
        onSubmit: (values: User) => {
            checkUser(values).then((res) => {
               

                    navigate("/home");
                    setIsLoggedIn(true)
                    setIsBuisness(res.data[0].isBuisness)

                    sessionStorage.setItem("userData", JSON.stringify({
                        isLoggedIn: true,
                        token :res.data,



                    }));
                    successMsg("welcome you sign In successfully")
                
            })
                .catch((err) => {
                    errorMsg("somethimg wrong..."); console.log(err)
                })



        },
    })
    return <>

        <div className="signIn">


            <div className="container col-md-3">
                <form onSubmit={formik.handleSubmit}>
                    <h1 style={{ color: "gold", fontFamily: "Comic Sans MS" }}> Sign In! <i className="fa-solid fa-user-plus mb-3"></i>    <button className="btn btn-success" onClick={() => navigate("/signUp")}> New User? signUp</button></h1>

                    <div className="form-floating mb-3 text-primary">
                        <input type="email" className="form-control text-success" id="floatingInput" placeholder="name@example.com"
                            name="email"

                            onChange={formik.handleChange}

                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    {formik.touched.email && formik.errors.email && (<p className="text-danger">{formik.errors.email}</p>)}
                    <div className="form-floating text-primary">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                            name="password"

                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingPassword" >Password</label>
                    </div>
                    {formik.touched.password && formik.errors.password && (<p className="text-danger">{formik.errors.password}</p>)}
                    <button type="submit" className="btn btn-success my-3 w-100" disabled={!formik.isValid || !formik.dirty}>התחבר</button>

                </form>
                

            </div>;
            <Footer />
        </div>
    </>
}

export default SignIn;