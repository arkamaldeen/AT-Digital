import Logo from '../images/Logo.svg'
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className="footer">
            <section>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-xs-12 d-flex mb-5 flex-column align-items-start'>
                        <div>
                            <Link to="/"><img src={Logo} alt='AT Digital' className="footer--logo" /></Link>
                        </div>
                        <p className='footer--about'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.</p>
                    </div>

                    <div className='col-lg-3 col-md-5 col-xs-12 mb-5 footer--details'>
                        <h1>Our Technologies</h1>
                        <h6>ReactJS</h6>
                        <h6>Gatsby</h6>
                        <h6>NextJS</h6>
                        <h6>NodeJS</h6>
                        <h6>GraphQL</h6>
                        <h6>Laravel</h6>
                    </div>
                    <div className='col-lg-3 col-md-7 col-xs-12 mb-5 footer--details'>
                        <h1>Our Services</h1>
                        <h6>Social media Marketing</h6>
                        <h6>Web & Mobile App Development</h6>
                        <h6>Data & Analytics</h6>
                        <h6>Google Marketing solutions</h6>
                        <h6>Search Engine Optimization</h6>
                    </div>
                </div>

                <div className='row footer--bottom'>
                    <div className='col text-end border-end border-1 border-light pr-3 pe-3 p-0'>Privacy Policy</div>
                    <div className='col text-start ps-3 p-0'>Terms & Conditions</div>
                </div>

            </section>
        </div>
    )
}