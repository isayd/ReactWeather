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
      <h3>About</h3>
      <p>Welcome to the About Page!</p>
    </div>
  )
};

module.exports = About;
