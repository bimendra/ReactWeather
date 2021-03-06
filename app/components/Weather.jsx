var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

module.exports = React.createClass({
    getDefaultProps: function() {
        return {
            location: null
        }
    },
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(location) {
        var that = this;
        this.setState({
            isLoading: true
        });
              
        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                isLoading: false,
                location: location,
                temp: temp,                
            })
        }), function(errorMessage) {
            alert(errorMessage);
            that.setState({
                isLoading: false
            });
        }
    },
    render: function() {
        var {isLoading, temp, location} = this.state;
        function renderMessage() {
            if(isLoading) {
                return <h3>Fetching weather...</h3>
            } else if (location && temp) {
                return <WeatherMessage temp={temp} location={location} />;
            }
        }
        return(
            <div>
                <h1>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} placeholderText="Search city by name"/>
                {renderMessage()}
            </div>
        )
    }
})