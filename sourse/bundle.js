(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _main = require("./components/main");

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(_main2.default, null), document.getElementsByClassName("container")[0]);

},{"./components/main":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// require('velocity-animate');
// require('velocity-animate/velocity.ui');
// import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
// import SecondScreen from "./secondScreen";


var FirstScreen = React.createClass({
    displayName: "FirstScreen",

    getInitialState: function getInitialState() {
        return {
            visibility: true,
            resume: null,
            portfolio: null,
            contacts: null
        };
    },
    componentDidMount: function componentDidMount() {
        this.setState({
            resume: document.getElementsByClassName("resume")[0],
            portfolio: document.getElementsByClassName("portfolio")[0],
            contacts: document.getElementsByClassName("contacts")[0]
        });
        console.log(this.Top());
    },

    Top: function Top() {
        var top = void 0;
        return top = this.refs.top;
    },
    Scroll: function Scroll(e) {
        var target = void 0;
        switch (e.target.className) {
            case "to-resume-link":
                target = this.state.resume;
                break;
            case "to-portfolio-link":
                target = this.state.portfolio;
                break;
            case "to-contact-link":
                target = this.state.contacts;
                break;
            case "scroll-down_link":
                target = this.state.resume;
        }
        Velocity(target, "scroll", {
            duration: 800
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "first-screen" },
            React.createElement(
                "div",
                { className: "navigation-box" },
                React.createElement(
                    "a",
                    { name: "top", ref: "top", className: "top" },
                    " "
                ),
                React.createElement(
                    "nav",
                    { className: "navigation" },
                    React.createElement(
                        "a",
                        { className: "to-resume-link", onClick: this.Scroll },
                        " RESUME "
                    ),
                    React.createElement(
                        "a",
                        { className: "to-portfolio-link", onClick: this.Scroll },
                        " PORTFOLIO "
                    ),
                    React.createElement(
                        "a",
                        { className: "to-contact-link", onClick: this.Scroll },
                        " CONTACTS "
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "first-screen_title" },
                React.createElement(
                    "h1",
                    { className: "first-screen_headline" },
                    "MARINA KALIUZHNAYA"
                ),
                React.createElement(
                    "h2",
                    { className: "first-screen_sub-headline" },
                    "Front-end developer"
                )
            ),
            React.createElement(
                "a",
                { className: "scroll-down_link", onClick: this.Scroll },
                " "
            )
        );
    }
});

exports.default = FirstScreen;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Footer = React.createClass({
    displayName: "Footer",

    render: function render() {
        return React.createElement(
            "div",
            { className: "footer" },
            React.createElement(
                "span",
                null,
                "Marina Kaliuzhnaya"
            ),
            React.createElement(
                "span",
                null,
                "Kiev, Ukraine, 2017."
            )
        );
    }
});

exports.default = Footer;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var FourthScreen = React.createClass({
    displayName: "FourthScreen",

    getInitialState: function getInitialState() {
        return {
            top: null
        };
    },
    componentDidMount: function componentDidMount() {
        this.setState({
            top: document.getElementsByClassName("top")[0]
        });
    },
    Scroll: function Scroll() {
        Velocity(this.state.top, "scroll", {
            duration: 1000
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "fourth-screen" },
            React.createElement(
                "div",
                { className: "fourth-screen_title" },
                React.createElement(
                    "a",
                    { name: "contacts", className: "contacts" },
                    " "
                ),
                React.createElement(
                    "h1",
                    { className: "fourth-screen_headline" },
                    "CONTACTS"
                )
            ),
            React.createElement(
                "div",
                { className: "fourth-screen_content" },
                React.createElement(
                    "h2",
                    null,
                    "LOOKING FOR ME?"
                ),
                React.createElement(
                    "div",
                    { className: "contacts-box" },
                    React.createElement(
                        "div",
                        { className: "fourth-screen_e-mail-box" },
                        React.createElement(
                            "span",
                            { className: "fourth-screen_e-title" },
                            "EMAIL:"
                        ),
                        React.createElement(
                            "span",
                            { className: "fourth-screen_e-mail" },
                            "marina_kln@ukr.net"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "fourth-screen_git-hub-box" },
                        React.createElement(
                            "span",
                            { className: "fourth-screen_git-hub-title" },
                            "GIT-HUB PROFILE:"
                        ),
                        React.createElement(
                            "span",
                            { className: "fourth-screen_git-hub-link" },
                            React.createElement(
                                "a",
                                { href: "https://github.com/MarinaKln", target: "_blank" },
                                "https://github.com/MarinaKln"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "fourth-screen_phone-box" },
                        React.createElement(
                            "span",
                            { className: "fourth-screen_phone-title" },
                            "PHONE NUMBER:"
                        ),
                        React.createElement(
                            "span",
                            { className: "fourth-screen_phone-number" },
                            "+ 380 (95) 681 20 85"
                        )
                    )
                ),
                React.createElement(
                    "a",
                    { className: "to-top-link", onClick: this.Scroll },
                    " "
                )
            )
        );
    }
});

exports.default = FourthScreen;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _firstScreen = require("./firstScreen");

var _firstScreen2 = _interopRequireDefault(_firstScreen);

var _sidebar = require("./sidebar");

var _sidebar2 = _interopRequireDefault(_sidebar);

var _secondScreen = require("./secondScreen");

var _secondScreen2 = _interopRequireDefault(_secondScreen);

var _thirdScreen = require("./thirdScreen");

var _thirdScreen2 = _interopRequireDefault(_thirdScreen);

var _fourthScreen = require("./fourthScreen");

var _fourthScreen2 = _interopRequireDefault(_fourthScreen);

var _footer = require("./footer");

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = React.createClass({
    displayName: "Main",

    render: function render() {
        return React.createElement(
            "div",
            { className: "main" },
            React.createElement(_firstScreen2.default, null),
            React.createElement(_sidebar2.default, null),
            React.createElement(_secondScreen2.default, null),
            React.createElement(_thirdScreen2.default, null),
            React.createElement(_fourthScreen2.default, null),
            React.createElement(_footer2.default, null)
        );
    }
});

exports.default = Main;

},{"./firstScreen":2,"./footer":3,"./fourthScreen":4,"./secondScreen":6,"./sidebar":7,"./thirdScreen":8}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// require('velocity-animate');
// require('velocity-animate/velocity.ui');
// import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';


var technologies = ["HTML / HTML5", "CSS / CSS3", "SASS / SCSS", "Adaptive Markup", "Cross-Browser Compatibility", "JavaScript", "React.js", "Gulp", "Version Control ( GIT )", "Velocity.js", "jQuery", "Photoshop", "Task-manager ( JIRA )"];

var ResumeList = React.createClass({
    displayName: "ResumeList",

    render: function render() {
        return React.createElement(
            "li",
            { className: "tech-item", ref: "item" },
            this.props.item
        );
    }
});

var SecondScreen = React.createClass({
    displayName: "SecondScreen",

    createResumeList: function createResumeList(item, index) {
        return React.createElement(ResumeList, {
            key: index,
            item: item
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "second-screen" },
            React.createElement(
                "div",
                { className: "second-screen_title" },
                React.createElement(
                    "a",
                    { name: "resume", className: "resume", ref: "resume" },
                    " "
                ),
                React.createElement(
                    "div",
                    { className: "second-screen_headline" },
                    "RESUME"
                )
            ),
            React.createElement(
                "div",
                { className: "second-screen_content" },
                React.createElement("img", { className: "resume-photo", src: "style/images/me-bw.jpg", alt: "Hi! It`s me!" }),
                React.createElement(
                    "div",
                    { className: "resume_about-me" },
                    React.createElement(
                        "h1",
                        null,
                        "Marina Kaliuzhnaya"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Hello! My name is Marina and I am a junior front-end developer."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "resume-item_tech" },
                    React.createElement(
                        "h2",
                        { className: "second-screen_sub-title" },
                        "TECHNOLOGIES"
                    ),
                    React.createElement(
                        "ul",
                        null,
                        technologies.map(this.createResumeList)
                    )
                ),
                React.createElement(
                    "div",
                    { className: "resume-item_work" },
                    React.createElement(
                        "h2",
                        { className: "second-screen_sub-title" },
                        "WORK EXPERIENCE"
                    ),
                    React.createElement(
                        "span",
                        null,
                        "MODNAKASTA  \xB7 Trainee front-end developer  \xB7 Kiev, Ukraine"
                    ),
                    React.createElement(
                        "span",
                        null,
                        "Dec 2016 - Current"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "resume-item_edu" },
                    React.createElement(
                        "h2",
                        { className: "second-screen_sub-title" },
                        "EDUCATION"
                    ),
                    React.createElement(
                        "span",
                        null,
                        "Taras Shevchenko National University of Kyiv"
                    ),
                    React.createElement(
                        "span",
                        null,
                        "Bachelor of Psychology, 2016"
                    )
                ),
                React.createElement(
                    "a",
                    { className: "button", href: "cv/marina.kaliuzhnaya_cv.pdf", download: true },
                    "DOWNLOAD RESUME"
                )
            )
        );
    }
});

exports.default = SecondScreen;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Sidebar = React.createClass({
    displayName: "Sidebar",

    getInitialState: function getInitialState() {
        return {
            visibility: false,
            heightScreen: null,
            resume: null,
            portfolio: null,
            contacts: null,
            top: null
        };
    },
    componentDidMount: function componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.setState({
            heightScreen: document.getElementsByClassName("first-screen")[0].offsetHeight,
            resume: document.getElementsByClassName("resume")[0],
            portfolio: document.getElementsByClassName("portfolio")[0],
            contacts: document.getElementsByClassName("contacts")[0],
            top: document.getElementsByClassName("top")[0]
        });
    },

    handleScroll: function handleScroll(e) {
        var scrollTop = e.target.body.scrollTop,
            height = this.state.heightScreen;
        console.log(scrollTop, height);
        return this.setState({
            visibility: scrollTop >= height
        });
    },
    Scroll: function Scroll(e) {
        var target = void 0;
        switch (e.target.className) {
            case "sidebar_resume-link":
                target = this.state.resume;
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
    render: function render() {
        var sidebar = void 0;
        if (this.state.visibility) {
            sidebar = React.createElement(
                "div",
                { className: "sidebar" },
                React.createElement(
                    "a",
                    { className: "sidebar_top-link", onClick: this.Scroll },
                    " "
                ),
                React.createElement(
                    "a",
                    { className: "sidebar_resume-link", onClick: this.Scroll },
                    " "
                ),
                React.createElement(
                    "a",
                    { className: "sidebar_portf-link", onClick: this.Scroll },
                    " "
                ),
                React.createElement(
                    "a",
                    { className: "sidebar_cont-link", onClick: this.Scroll },
                    " "
                )
            );
        }
        return React.createElement(
            "div",
            null,
            sidebar
        );
    }
});

exports.default = Sidebar;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var portfolio = [{
    src: "style/images/portfolio/todo-mvc.png",
    title: "TODO app",
    desc: "Simple todo - application using React js. ",
    link: "https://github.com/MarinaKln/TODO-React "
}, {
    src: "style/images/portfolio/arcomen.png",
    title: "ARCO MEN landing page",
    desc: "",
    link: "https://github.com/MarinaKln/ARCOmen "
}, {
    src: "style/images/portfolio/modnakasta.png",
    title: "modnaKasta landing page",
    desc: "",
    link: "https://modnakasta.ua/l/black-friday_usa_2016/ "
}];

var PortfolioItem = React.createClass({
    displayName: "PortfolioItem",

    render: function render() {
        return React.createElement(
            "a",
            { href: this.props.link, target: "_blank", className: "portfolio-item_link" },
            React.createElement(
                "div",
                { className: "portfolio-item" },
                React.createElement("img", { className: "portfolio-item_img", src: this.props.src }),
                React.createElement(
                    "div",
                    { className: "portfolio-item_info" },
                    React.createElement(
                        "h2",
                        null,
                        this.props.title
                    ),
                    React.createElement(
                        "p",
                        null,
                        this.props.desc
                    ),
                    React.createElement(
                        "span",
                        null,
                        "VIEW . . ."
                    )
                )
            )
        );
    }
});

var ThirdScreen = React.createClass({
    displayName: "ThirdScreen",

    createPortfItem: function createPortfItem(item, index) {
        return React.createElement(PortfolioItem, {
            key: index,
            src: item.src,
            title: item.title,
            desc: item.desc,
            link: item.link
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "third-screen" },
            React.createElement(
                "div",
                { className: "third-screen_title" },
                React.createElement(
                    "a",
                    { name: "portfolio", className: "portfolio" },
                    " "
                ),
                React.createElement(
                    "h1",
                    { className: "third-screen_headline" },
                    "PORTFOLIO"
                )
            ),
            React.createElement(
                "div",
                { className: "third-screen_content" },
                portfolio.map(this.createPortfItem),
                React.createElement(
                    "a",
                    { className: "button", href: "https://github.com/MarinaKln", target: "_blank" },
                    "VIEW GitHub PROFILE"
                )
            )
        );
    }
});

exports.default = ThirdScreen;

},{}]},{},[1]);
