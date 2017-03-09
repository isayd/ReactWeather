var React = require('react');
var {Link, IndexLink} = require('react-router');


// var Nav = React.createClass({
//
//   render: function(){
//     return (
//       <div>
//         <h2>Revisando Nav!!</h2>
//         <IndexLink to ="/" activeClassName="active" activeStyle = {{fontWeight: 'bold'}}>Get Weather</IndexLink>
//         <Link to ="/about" activeClassName="active" activeStyle = {{fontWeight: 'bold'}}>About</Link>
//         <Link to = "/examples" activeClassName="active" activeStyle = {{fontWeight: 'bold'}}>Examples!!</Link>
//       </div>
//     );
//   }
//
// });

var Nav = React.createClass({

  // Perform search on navigation component
  onSearch: function(e){
    e.preventDefault();

    var location = this.refs.locationNav.value;
    // encode String so the Browser know how to read the location
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0){
      this.refs.locationNav.value = '';
      //set url with encodedLocation
      window.location.hash = '#/?location=' + encodedLocation;
    }

  },

  render: function(){
    return (
      <div className = "top-bar">
        <div className = "top-bar-left">
          <ul className = "menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to ="/" activeClassName="active" activeStyle = {{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to ="/about" activeClassName="active" activeStyle = {{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to = "/examples" activeClassName="active" activeStyle = {{fontWeight: 'bold'}}>Examples!!</Link>
            </li>
          </ul>
        </div>
      <div className = "top-bar-right">
          <form onSubmit = {this.onSearch}>
              <ul className="menu">
                <li>
                  <input type = "search" placeholder="Search weather by city" ref="locationNav"/>
                </li>
                <li>
                  <input type = "submit" className = "button" value = "Get Weather"/>
                </li>
              </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;


// <div>
//   <h2>Revisando Nav!!</h2>
//   <IndexLink to ="/" activeClassName="active" activeStyle = {{fontWeight: 'bold'}}>Get Weather</IndexLink>
//   <Link to ="/about" activeClassName="active" activeStyle = {{fontWeight: 'bold'}}>About</Link>
//   <Link to = "/examples" activeClassName="active" activeStyle = {{fontWeight: 'bold'}}>Examples!!</Link>
// </div>
