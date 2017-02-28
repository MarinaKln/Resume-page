let FourthScreen = React.createClass({
    getInitialState: function () {
        return ({
            top: null
        })
    },
    componentDidMount: function () {
        this.setState({
            top: document.getElementsByClassName("top")[0]
        })
    },
    Scroll: function () {
        Velocity(this.state.top, "scroll", {
            duration: 1000
        })
    },
    render: function() {
        return (
            <div className="fourth-screen">
                <div className="fourth-screen_title">
                    <a name="contacts" className="contacts"> </a>
                    <h1 className="fourth-screen_headline">CONTACTS</h1>
                </div>
                <div className="fourth-screen_content">
                    <h2>LOOKING FOR ME?</h2>
                    <div className="contacts-box">
                        <div className="fourth-screen_e-mail-box">
                            <span className="fourth-screen_e-title">EMAIL:</span>
                            <span className="fourth-screen_e-mail">marina_kln@ukr.net</span>
                        </div>
                        <div className="fourth-screen_git-hub-box">
                            <span className="fourth-screen_git-hub-title">GIT-HUB PROFILE:</span>
                            <span className="fourth-screen_git-hub-link">
                                <a href="https://github.com/MarinaKln" target="_blank">https://github.com/MarinaKln</a>
                            </span>
                        </div>
                        <div className="fourth-screen_phone-box">
                            <span className="fourth-screen_phone-title">PHONE NUMBER:</span>
                            <span className="fourth-screen_phone-number">+ 380 (95) 681 20 85</span>
                        </div>
                    </div>
                    <a className="to-top-link" onClick={this.Scroll}> </a>
                </div>
            </div>
        )
    }
});

export default FourthScreen;
