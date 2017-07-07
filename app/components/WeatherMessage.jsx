var React = require('react');

module.exports = React.createClass({
    render: function() {
        return(
            <h3>It's {this.props.temp} in {this.props.location}.</h3>
        )
    }
})