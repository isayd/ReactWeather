var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return(
//       <h4>About component!!!</h4>
//     );//aqui podria haber un problema
//   }
// });

//Stateless Functional Component
var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About!</h1>
      <p>
        This is a weather application build on React
      </p>
      <p>
      Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react/">React</a> - This was the JavaScript
            frameworl used
        </li>
        <li>
          <a href="https://openweathermap.org/">Open Weather Map</a> - I used Open Weather Map
            to search for weather data by city name
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
