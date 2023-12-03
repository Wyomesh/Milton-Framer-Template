import "../componentStyles/Navbar.css";
function Navbar() {
    return (<div className="navContainer">
        <div className="homePageLinkContainer">
            <div className="homePageLinks">
                <a href="/" className="caretUp"><i class="fa-solid fa-caret-up"></i></a>
                <a href="/" className="companyName">Milton</a>
            </div>
        </div>
        <div className="navFeatures">
            <div className="navFeatureLists">
                <a href="/">Features</a>
                <a href="/">Testimonial</a>
                <a href="/">Pricing</a>
                <a href="/">FAQs</a>
                <a href="/">Blog</a>
            </div>
        </div>
        <div className="navBtn">
            <div className="navBtnLists">
                <button className="logInBtn">Log in</button>
                <button className="getStartedBtn">Get started</button>
            </div>
        </div>
    </div>);
}
export default Navbar;