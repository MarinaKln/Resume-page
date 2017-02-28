let Sidebar = React.createClass({
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
    },
    handleScroll: function (e) {
        let scrollTop = e.target.body.scrollTop,
            height = this.state.heightScreen;
        console.log(scrollTop, height);
        return this.setState({
            visibility: (scrollTop >= height)
        });
    },
    Scroll: function (e) {
        let target;
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
    render: function () {
        let sidebar;
        if (this.state.visibility) {
            sidebar = (
                <div className="sidebar">
                    <a className="sidebar_top-link" onClick={this.Scroll}> </a>
                    <a className="sidebar_resume-link" onClick={this.Scroll}> </a>
                    <a className="sidebar_portf-link" onClick={this.Scroll}> </a>
                    <a className="sidebar_cont-link" onClick={this.Scroll}> </a>
                </div>)
        }
        return (
            <div>
                {sidebar}
            </div>

        )
    }
});

export default Sidebar;
