var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

  getInitialState: function () {
    return {
      isLoading: false
    }
  },

  handleSearch: function (location) {
    // Clear data after every search
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },

  // componentDidMount() is invoked immediately after a component is mounted
  componentDidMount: function(){
    // React Router give access to a lot props, some of them are query strings
    var location = this.props.location.query.location;

    // validate query to execute handleSearch
    if (location && location.length > 0){
      this.handleSearch(location);
      //Update url so the location is no longer displayed in the component
      window.location.hash = '#/';
    }
  },
  // React Router is gonna update the props of weather.jsx when the url changes
  // Call every time the component props are updated
  // componentWillReceiveProps() is invoked before a mounted component receives new props.
  // React doesn't call componentWillReceiveProps with initial props during mounting
  // This solves the problem to update Weather conponent with data from Nav
  componentWillReceiveProps: function(newProps){
    var location = newProps.location.query.location;
    // validate query to execute handleSearch
    if (location && location.length > 0){
      this.handleSearch(location);
      //Update url so the location is no longer displayed in the component
      window.location.hash = '#/';
    }
  },


/* ------------------------ Render Function ------------------------ */
  render: function () {

    var {isLoading, temp, location, errorMessage} = this.state;
    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError(){
      if (typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
