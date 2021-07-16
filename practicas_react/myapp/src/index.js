// Importando las librerias React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Creando componentes de React
const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="images">
                    <img src="{faker.image.avatar}" alt="avatar"/>
                </a>
            </div>
        </div>
    )
};

// Tomando y mostrando los componentes de React en la pantalla
ReactDOM.render(<App />, document.querySelector('#root'));
