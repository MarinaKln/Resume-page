import FirstScreen from "./firstScreen";
import SecondScreen from "./secondScreen";
import ThirdScreen from "./thirdScreen";
import FourthScreen from "./fourthScreen";
import Footer from "./footer";

let Main = React.createClass({
    render: function() {
        return (
            <div className="main">
                <FirstScreen />
                <SecondScreen />
                <ThirdScreen />
                <FourthScreen />
                <Footer />
            </div>
        )
    }
});

export default Main;