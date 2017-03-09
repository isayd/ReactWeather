var React = require('react');

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
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

/* ----------------------------- RENDER FUNCTION ----------------------------- */

  render: function(){

    var {title, message} = this.props;

    return (
        <div id = "error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>{title}</h4>
          <p>{message}</p>
          <p>
            <button className="button hollow" data-close=""> OK </button>
          </p>
        </div>
    );
  }
});

module.exports = ErrModal;
