import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

import NavBar from "./NavBar";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    return <>

        {/* <h1 style={{ color: "gold", fontFamily: "Comic Sans MS" }}> Welocme to Bizz! </h1> */}
        <div className="home">
            <div className="row">
                <div className="leftcolumn">
                    <div className="cardion" style={{ backgroundImage: "url(/public/buisness.jpg)", backgroundSize: "cover", color: " #EDEDE9", }}>
                        <h2>Welcome to our website <i className="fa-solid fa-champagne-glasses"></i></h2>
                        <h5>take care for you Since 2023 <i className="fa-regular fa-handshake"></i></h5>
                        <div className="fakeimgon" >  <p style={{ color: " #EDEDE9", textAlign: "center", fontFamily: "Comic Sans MS", fontSize: "1.5rem" }}> <b>At our company we give a special services for our costumers and we are making sure thier buisenss will success , and we even connect them with clients </b></p>  </div>


                    </div>
                    <div className="title">
                        <h1 style={{ color: "salmon", fontSize: "3rem", lineHeight: "8rem", backgroundColor: "#D5BDAF", }}>let us help you - this is our slogan</h1>

                    </div>
                </div>
                <div className="rightcolumn">
                    <div className="cardio">

                        <div className="fakeimg1" >
                            <h2 style={{ color: "#D5BDAF" }}> <b>About Me </b></h2>
                            <p style={{ color: "#EDEDE9" }}> <b>My name is Or liberman, I'm 21 years old and I'm here to help you!</b></p>


                        </div>

                    </div>
                    <hr></hr>
                    <Link to="/about" style={{ color: "brown", marginTop: "1px" }}> if yow wanna see more about Us</Link>
                    <div className="cardi">
                        <h3 style={{ color: "#D5BDAF" }}>Our happy clients</h3>
                        <div className="fakeimgMack"><link href="https://www.mcdonalds.co.il/"></link> </div>
                        <div className="fakeimgPizza mt-2"></div>
                        <div className="fakeimgSubway mt-2"><p></p></div>
                    </div>
                    <div className="cardi" style={{ color: "black" }}>
                        <h3>Follow Me <i className="fa-brands fa-golang"></i></h3>
                        <p>Or Liberman -   <a className="text" href="https://www.facebook.com/profile.php?id=100000355803737"><i className="fa-brands fa-facebook fa-2x"  ></i></a>
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    </>
}

export default Home;