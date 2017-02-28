let technologies = [
    "HTML / HTML5",
    "CSS / CSS3",
    "SASS / SCSS",
    "Adaptive Markup",
    "Cross-Browser Compatibility",
    "JavaScript",
    "React.js",
    "Gulp",
    "Version Control ( GIT )",
    "Velocity.js",
    "jQuery",
    "Photoshop",
    "Task-manager ( JIRA )"
];

let ResumeList = React.createClass({
    render: function () {
        return (
            <li className="tech-item">{this.props.item}</li>
        )
    }
});

let SecondScreen = React.createClass({
    createResumeList: function (item, index) {
        return (
            <ResumeList
                key = {index}
                item = {item}
            />
        )
    },
    render: function() {
        return (
            <div className="second-screen">
                <div className="second-screen_title">
                    <a name="resume" className="resume" ref={"resume"}> </a>
                    <div className="second-screen_headline">RESUME</div>
                </div>
                <div className="second-screen_content">
                    <img className="resume-photo" src="style/images/me-bw.jpg" alt="Hi! It`s me!"/>
                    <div className="resume_about-me">
                        <h1>Marina Kaliuzhnaya</h1>
                        <p>
                            Hello!
                            My name is Marina and I am a junior front-end developer.
                        </p>
                    </div>
                    <div className="resume-item_tech">
                        <h2 className="second-screen_sub-title">TECHNOLOGIES</h2>
                        <ul>
                            {technologies.map(this.createResumeList)}
                        </ul>
                    </div>
                    <div className="resume-item_work">
                        <h2 className="second-screen_sub-title">WORK EXPERIENCE</h2>
                        <span>MODNAKASTA  · Trainee front-end developer  · Kiev, Ukraine</span>
                        <span>Dec 2016 - Current</span>
                    </div>
                    <div className="resume-item_edu">
                        <h2 className="second-screen_sub-title">EDUCATION</h2>
                        <span>Taras Shevchenko National University of Kyiv</span>
                        <span>Bachelor of Psychology, 2016</span>
                    </div>
                    <a className="button" href="cv/marina.kaliuzhnaya_cv.pdf" download>
                        DOWNLOAD RESUME
                    </a>
                </div>
            </div>
        )
    }
});

export default SecondScreen;
