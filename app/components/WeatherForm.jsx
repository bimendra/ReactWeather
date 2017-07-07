var React = require('react');

module.exports = React.createClass({
    getDefaultProps: function() {
        return {
            placeholderText: 'Enter something'
        }
    },
    onFormSubmit: function(e) {
        e.preventDefault();
        var location = this.refs.location.value;
        if(location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="location" placeholder={this.props.placeholderText}/>
                <button>Get Weather</button>
            </form>
        )
    }
})