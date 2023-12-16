import img from "../images/homePg.jpg"
import img2 from "../images/image-2.png"
import img1 from "../images/image-1.png"
import Button from "../components/Button";
import {Link} from "react-router-dom"

function Home() {
    return (
        <div className="content">
            <div className="home">
                <div className="home--imageContainer">
                    <img className="home--backgroundImage" src={img} alt="homePage" />
                </div>
                <section className="home--section">

                    <div className="home--Desc">
                        <p>We crush your competitors, goals, and sales records - without the B.S.</p>
                        <Link to="contact" ><Button content={"Get free consultation"} /></Link>
                    </div>
                </section>
                <section className="pt-xl-0 py-5">
                    <div className="container  home--contentContainer" fluid>
                        <div className="row mx-auto">
                            <div className="col-12 col-md-5 d-flex p-0">
                                <img className="home-contentImg" src={img2} alt="" />
                            </div>
                            <div className="col-12 col-md-7 home--content">
                                <h1 className="home--header mb-0">Web & Mobile App Development</h1>
                                <p className="mb-0">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                                <Link to="services" ><Button content={"learn more"} /></Link>
                            </div>
                        </div>
                        <div className="row mx-auto ">
                            <div className="col-12 col-md-7 home--content">
                                <h1 className="home--header mb-0">Digital Strategy Consulting</h1>
                                <p className="mb-0">Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                                <Link to="services" ><Button content={"learn more"} /></Link>
                            </div>
                            <div className="col-12 col-md-5 d-flex p-0">
                                <img className="home-contentImg" src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home;