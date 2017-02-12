import Button from "../common/button";

var technology = [
    {item: "HTML / HTML5"},
    {item: "CSS / CSS3"},
    {item: "SASS / SCSS"},
    {item: "Adaptive Markup"},
    {item: "Cross-Browser Compatibility"},
    {item: "JavaScript"},
    {item: "React.js"},
    {item: "Gulp"},
    {item: "Version Control ( GIT )"},
    {item: "Velocity.js"},
    {item: "jQuery"},
    {item: "Photoshop"},
    {item: "Task-manager ( JIRA )"}
];

var ResumeList = React.createClass({
    render:function () {
        return (
            <li className="tech-item">{this.props.item}</li>
        )
    }
});

var SecondScreen = React.createClass({
    getInitialState: function () {
        return ({
            visibility: false,
            heightScreen: null,
            resume: null,
            portfolio: null,
            contacts: null,
            top: null
        })
    },
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.setState({
            heightScreen: document.getElementsByClassName("first-screen")[0].offsetHeight,
            resume: document.getElementsByClassName("resume")[0],
            portfolio: document.getElementsByClassName("portfolio")[0],
            contacts: document.getElementsByClassName("contacts")[0],
            top: document.getElementsByClassName("top")[0]
        });
        console.log(this.state.heightScreen);
    },
    handleScroll: function () {
        let scrollTop = event.target.body.scrollTop,
            Height = this.state.heightScreen;
        if (scrollTop > Height - 10) {
            this.setState({
                visibility: true
            });
        } else {
            this.setState({
                visibility: false
            })
        }
    },
    createResumeList: function (item, index) {
        return (
            <ResumeList
                key = {index}
                item = {item.item}
            />
        )
    },
    Scroll: function (e) {
        switch (e.target.className) {
            case "sidebar_resume-link":
               var target = this.state.resume;
               break;
            case "sidebar_portf-link":
                target = this.state.portfolio;
                break;
            case "sidebar_cont-link":
                target = this.state.contacts;
                break;
            case "sidebar_top-link":
                target = this.state.top;
        }
        Velocity(target, "scroll", {
            duration: 800
        });
    },
    render: function() {
        let sidebar = null,
            visibility = this.state.visibility;
        if (visibility) {
            sidebar = (
                <div className="sidebar">
                    <a className="sidebar_top-link" onClick={this.Scroll}> </a>
                    <a className="sidebar_resume-link" onClick={this.Scroll}> </a>
                    <a className="sidebar_portf-link" onClick={this.Scroll}> </a>
                    <a className="sidebar_cont-link" onClick={this.Scroll}> </a>
                </div>
            )
        }
        return (
            <div className="second-screen">
                <div className="second-screen_title">
                    <a name="resume" className="resume"> </a>
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
                            {technology.map(this.createResumeList)}
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
                    <Button text = {"DOWNLOAD RESUME"}/>
                    {sidebar}
                </div>
            </div>
        )
    }
});

export  default SecondScreen;
