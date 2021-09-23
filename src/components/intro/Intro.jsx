import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/woman.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Emily Garcia</h1>
                    <h3>Freelance <span></span></h3>
                </div>
                <a href="#portafolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
