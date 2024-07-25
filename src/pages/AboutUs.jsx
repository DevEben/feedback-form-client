import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import './Homepage.css';


export default function () {
    return (
        <>
            <div className="bodyContainer">
                <Header />
                <div className="contentContainer">
                    <AboutUs />
                </div>
                <Footer />
            </div>
        </>
    )
}