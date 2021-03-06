var React = require('react')
var Nav = require('Nav')

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <Nav />
                <div className="row">
                    <div className="columns medium-6 large-4 small-centered">
                        {this.props.children}
                    </div>
                </div>               
            </div>
        )
    }
})

