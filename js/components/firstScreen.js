var FirstScreen = React.createClass({
    getInitialState: function () {
       return ({
           visibility: true,
           resume: null,
           portfolio: null,
           contacts: null
       })
    },
    componentDidMount() {
        this.setState({
            resume: document.getElementsByClassName("resume")[0],
            portfolio: document.getElementsByClassName("portfolio")[0],
            contacts: document.getElementsByClassName("contacts")[0]
        });
        Velocity(document.getElementsByClassName("first-screen_title")[0],"fadeIn" , {
            duration: 3000
        });
    },
    Scroll: function (e) {
        switch (e.target.className) {
            case "to-resume-link":
                var target = this.state.resume;
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
    render: function() {
        return (
            <div className="first-screen">
                <a name="top" className="top"> </a>
                <div className="navigation-box">
                    <nav className="navigation">
                        <a className="to-resume-link" onClick={this.Scroll}> RESUME </a>
                        <a className="to-portfolio-link" onClick={this.Scroll}> PORTFOLIO </a>
                        <a className="to-contact-link" onClick={this.Scroll}> CONTACTS </a>
                    </nav>
                </div>
                <div className="first-screen_title">
                    <h1 className="first-screen_headline">MARINA KALIUZHNAYA</h1>
                    <h2 className="first-screen_sub-headline">Front-end developer</h2>
                </div>
                <a className="scroll-down_link" onClick={this.Scroll}> </a>
            </div>
        )
    }
});





export default FirstScreen;
