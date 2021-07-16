// Importando las librerias React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err)
    );
  };

  render () {

    return <div>Latitud: {this.state.lat}</div>;
  };
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
