var React = require('react');
var ReactDom = require('react-dom');
var ReactDomServer = require('react-dom/server');

var ErrModal = React.createClass({

  getDefaultProps: function(){
    return{
      title: 'Error',
    };
  },

  // Define wich properties the component expects, the values and wheter or not is required
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },

  // To show the modal once the component is loaded
  // Calling the render method is not enough
  // By defaul, modals are hidden
  // The method componentDidMount gets called after the elements is rendered in the DOM
  // We can make any change to the actual DOM elements


  componentDidMount: function(){
    var {title, message} = this.props;

    // after react puts the elements in the dom, foundation is removing them
    // foundation make some changes in the dom, React doesnt work well with third
    // party libraries that ara gonna be updating the DOM
      var modalMarkup =  (
        <div id = "error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>{title}</h4>
          <p>{message}</p>
          <p>
            <button className="button hollow" data-close=""> OK </button>
          </p>
        </div>
      );

    var $modal = $(ReactDomServer.renderToString(modalMarkup));

    $(ReactDom.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

/* ----------------------------- RENDER FUNCTION ----------------------------- */

  render: function(){


    return (
      <div>
      </div>
    );
  }
});

module.exports = ErrModal;
