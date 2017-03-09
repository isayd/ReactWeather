var React = require('react');
var {Link} = require('react-router');
// var Examples = React.createClass({
//
//   render: function(){
//
//     return(
//       <h1>Examples!!!!</h1>
//     );
//   }
// });

var Examples = (props) =>{
  return (
      <div>
        <h1 className = "text-center">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Mexico_City'>Mexico City</Link>
          </li>
          <li>
            <Link to ='/?location=Fremont_California'>Fremont, California</Link>
          </li>
        </ol>
      </div>
  )
};

module.exports = Examples;
