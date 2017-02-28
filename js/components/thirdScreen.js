let portfolio = [
    {
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
    }
];

let PortfolioItem = React.createClass({
    render: function () {
        return (
            <a href={this.props.link} target="_blank" className="portfolio-item_link">
                <div className="portfolio-item">
                    <img className="portfolio-item_img" src={this.props.src}/>
                    <div className="portfolio-item_info">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.desc}</p>
                        <span>VIEW . . .</span>
                    </div>
                </div>
            </a>
        )
    }
});

let ThirdScreen = React.createClass({
    createPortfItem: function (item, index) {
        return (
            <PortfolioItem
                key = {index}
                src = {item.src}
                title = {item.title}
                desc = {item.desc}
                link = {item.link}
            />
        )
    },
    render: function() {
        return (
            <div className="third-screen">
                <div className="third-screen_title">
                    <a name="portfolio" className="portfolio"> </a>
                    <h1 className="third-screen_headline">PORTFOLIO</h1>
                </div>
                <div className="third-screen_content">
                    {portfolio.map(this.createPortfItem)}
                    <a className="button" href="https://github.com/MarinaKln" target="_blank">
                        VIEW GitHub PROFILE
                    </a>
                </div>
            </div>
        )
    }
});


export  default  ThirdScreen;
