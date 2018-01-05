var Movie = React.createClass({

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, React.createElement(moviesList, {film: film}))
      )
    )
  }

});

var moviesList = React.createClass({

	propTypes: {
    	film: React.PropTypes.object.isRequired,
  	},

	render: function() {
		return (
			React.createElement('li', {key: this.props.film.id},
	      	React.createElement('h2', {}, this.props.film.name),
	      	React.createElement('p', {}, this.props.film.description)
	    	)
	    )
	}
})

var film = {
	id: 1,
  	name: 'Kotek',
  	description: 'lalala'
};

var element = React.createElement(Movie);

ReactDOM.render(element, document.getElementById('app'));