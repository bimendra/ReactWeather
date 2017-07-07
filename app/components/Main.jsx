var React = require('react')
var Nav = require('Nav')

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <Nav />
                <h1>Main Component</h1>
                {this.props.children}
            </div>
        )
    }
})

