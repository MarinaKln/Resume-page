var Button = React.createClass({
    render:function () {
       return (
           <button className="button" onClick={this.props.click}>{this.props.text}</button>
       )
    }
});

export default Button;
