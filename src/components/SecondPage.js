import "../componentStyles/SecondPage.css";
function SecondPage() {
    return (
        <div className="secondPage">
            <div className="secondPageContainer">
                <div className="featuresPower">
                    <div className="feature">
                        <p className="featurePara">Our main features 🦸🏼</p>
                    </div>
                    <div>
                        <p className="superPowPara">Discover your new superpowers</p>
                    </div>
                </div>
                <div className="contentContainer">
                    <div className="contentDiv">
                        <div className="secondHeadParaContainer">
                            <p className="secondHeadPara">Seamless Scheduling</p>
                        </div>
                        <div className="secondHeadContainer">
                            <p className="secondHead">Focus on what matters most for you</p>
                        </div>
                        <div className="secondParaContainer">
                            <p className="secondPara">Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</p>
                        </div>
                    </div>
                    <div className="feature1Img">
                        <img src="https://framerusercontent.com/images/KsZ6wO13QZewZKHzx7JNgFn88.png" alt="Feature 1" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SecondPage;