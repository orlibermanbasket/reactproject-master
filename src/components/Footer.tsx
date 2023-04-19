import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    let navigate = useNavigate()
    return <>
        <footer>
            <div className="jumbotron jumbotron-fluid bg-secondary p-4 mt-5 mb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 cizgi">
                            <div className="card bg-secondary border-0">
                                <div className="card-body text-light text-center">
                                    <h5 className="card-title text-white display-4" style={{ fontSize: "30px" }}>Or Liberman</h5>
                                    <p className="d-inline lead">Or Liberman © 2023

                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 cizgi">
                            <div className="card bg-secondary border-0">
                                <div className="card-body text-center">
                                    <h5 className="card-title text-white display-4" style={{ fontSize: "30px" }}>My Details</h5>
                                    <a className="text-light d-block lead" style={{ marginLeft: "-20px" }} href="#"><i className="fa fa-phone mr-2"></i>+972 0533392334</a>
                                    <a className="text-light d-block lead" href="#"><i className="fa fa-envelope mr-2"></i>tur6380@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="card bg-secondary border-0">
                                <div className="card-body text-center">
                                    <h5 className="card-title text-white display-4" style={{ fontSize: "30px" }}> <i className="fa-solid fa-hashtag"></i>Social Media</h5>

                                    <a className="text-light" href="https://www.facebook.com/profile.php?id=100000355803737"><i className="fa-brands fa-facebook fa-2x"  ></i></a>

                                    <a className="text-light" href="#"><i className="fa-brands fa-instagram fa-2x"></i></a>

                                    <a className="text-light" href="https://web.whatsapp.com/"><i className="fa-brands fa-whatsapp fa-2x"></i></a>

                                    <a className="text-light" href="https://www.linkedin.com/in/%D7%90%D7%95%D7%A8-%D7%9C%D7%99%D7%91%D7%A8%D7%9E%D7%9F-6b2435"><i className="fa-brands fa-linkedin fa-2x "></i></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default Footer;