import { FunctionComponent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { errorMsg } from "../services/Feedbacks";

interface NavBarProps {
    isLoggedIn: boolean;
    setIsLoggedIn: Function
    isBuisness: boolean
}

const NavBar: FunctionComponent<NavBarProps> = ({ isLoggedIn, setIsLoggedIn, isBuisness }) => {
    let navigate = useNavigate()
    return <>
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: "#484848 ", }}>

                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/home"> <i className="fa-solid fa-house-flag"></i>HOME</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ textAlign: "center", margin: "auto 0" }}>
                        <ul className="navbar-nav me-auto mx-5 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/about"> <i className="fa-solid fa-address-card"></i>About</NavLink>
                            </li>
                            {!isLoggedIn ? (<>                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/"> <i className="fa-solid fa-hands"></i> Sign In</NavLink>
                            </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/signUp"> <i className="fa-solid fa-user-plus"></i>SignUp</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/business"> <i className="fa-solid fa-user-tie"></i>Business</NavLink>
                                </li>
                            </>) : (<>  {isBuisness && (<>
                                <NavLink className="nav-link" to="/newCard">  New Card</NavLink>


                                <NavLink className="nav-link" to="/myCards">  My cards</NavLink> </>)}


                                <NavLink className="nav-link" to="/allCards">  All Cards</NavLink>

                                <button style={{}} className="btn btn-success w-20" onClick={() => {
                                    navigate("/");
                                    setIsLoggedIn(false)
                                    errorMsg("bye bye")
                                }}>
                                    Log out
                                </button> </>)}

                        </ul>

                    </div>
                </div>
            </nav>
        </header>






    </>


}

export default NavBar;