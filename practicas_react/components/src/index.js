// Importando las librerias React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Creando componentes de React
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail avatar={faker.image.image()} author="Sam" timeAgo="Hoy a las 4:15pm" content="Excelente información"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.image()} author="Alex" timeAgo="Hoy a las 2:00 pm" content="Muy buen blog!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.image()} author="Jane" timeAgo="Ayer a las 5:50pm" content="Lo dices todo en este blog"/>
            </ApprovalCard>
        </div>
    )
};

// Tomando y mostrando los componentes de React en la pantalla
ReactDOM.render(<App />, document.querySelector('#root'));

