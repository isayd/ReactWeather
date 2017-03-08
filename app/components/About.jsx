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
      <h3>About component</h3>
  )
};

module.exports = About;
