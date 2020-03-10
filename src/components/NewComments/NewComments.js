import React from 'react';
import axios from 'axios';

import './NewComments.css';

class NewComments extends React.Component {
    state = {
        title: '',
        opinion: '',
        user: ''
    }

    postDataHandler = () => {
        const data = {
            Titulo: this.state.title,
            Opinion: this.state.opinion,
            Usuario: this.state.user

        };
        axios.post('https://jokin-bdd.firebaseio.com/Comentarios.json', data)
            .then(response => {
                alert('Saved order');
                //console.log(response);
            });
    }

    render() {
        return (
            <div class="container">

                <div className="Comments">
                    <h3>Añadir Comentario</h3>
                    <div class="row py-2">
                        <div class="col-6">
                            <p>Usuario:
                            <input type="text" value={this.state.user} onChange={(event) => this.setState({ user: event.target.value })} />
                            </p>
                        </div>
                        <div class="col-6">
                            <p>Título:
                            <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                            </p>
                        </div>
                    </div>
                    <div class=" row justify-content-md-center py-2">
                        <div class="col-2">
                            <p>Opinión:</p>
                        </div>
                        <div class="col-11 ">
                            <textarea class="form-control" rows="4" value={this.state.opinion} onChange={(event) => this.setState({ opinion: event.target.value })} />
                        </div>
                    </div>
                    <button onClick={this.postDataHandler}>Añadir producto</button>
                </div>
            </div>

        );
    }
}

export default NewComments;