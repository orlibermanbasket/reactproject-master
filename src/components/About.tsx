import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    let navigate = useNavigate()
    return <>

        <div className="about">

            <div className="about-section">

                <h1 style={{ fontFamily: "Comic Sans MS" }}>About Us Page <i className="fa-solid fa-address-card" ></i></h1>
                <p style={{ fontFamily: "Comic Sans MS" }}>Some words about who we are and what we do.</p>
                <p>We strive to have the best and lowest pricing in the market, all without sacrificing the quality and integrity of our products.
                    We help companies all over the world & in every industry to marketing themselves and helping them success in the internet </p>
            </div>

            <h2 style={{ textAlign: "center" }} >Our Team</h2>
            <div className="row">
                <div className="column">
                    <div className="cardAbout">
                        <img src="https://th.bing.com/th/id/OIP.NUlwNjPkWPWiDx6B-3ZjyQHaEu?pid=ImgDet&rs=1" alt="Or" style={{ color: "#EDEDE9", width: "100%" }} />
                        <div className="contain">
                            <h2>Or Liberman</h2>
                            <p className="titleo">CEO & Founder</p>
                            <p>I'm a fullstack developer - and here for helping You!</p>
                            <p>tur@gmail.com</p>
                            <p><button className="button" onClick={() => {
                                navigate("/home")
                            }}>Contact me</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="list">
                        <h1 style={{ color: "#D6CCC2" }}>People said about us...</h1>
                        <ul className="listUl">
                            <li> "The best in the world"</li>
                            <li> "Thank you on every thing"</li>
                            <li> "They really helped my company!"</li>
                            <li> "what a nice service"</li>
                            <li> "They always do their best!"</li>
                            <li> "The right choice for you!"</li>
                        </ul>
                    </div>
                </div>

                <div className="column">

                    <div className="cardAbout">

                        <div className="contain">
                            <h2>What are we doing</h2>
                            <p style={{ backgroundColor: "beige", fontSize: "1.3rem" }}>
                                <b>Premium Business Card Designs</b><br></br>
                                Every business card in our library is created by professional designers from around the world.</p>
                            <hr></hr>
                            <p style={{ backgroundColor: "lightgrey", fontSize: "1.3rem" }}><b>Support</b><br></br>
                                24/7 support from our team of design experts, means you're always looked after. Help with customization, download and print.</p>
                            <p style={{ backgroundColor: "wheat", fontSize: "1.3rem" }}>Getting a stunning business card doesn't have to be a pain. In fact, you can create the perfect card design in minutes.</p>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
}

export default About;