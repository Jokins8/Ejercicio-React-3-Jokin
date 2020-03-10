import React from 'react';
import axios from 'axios';

import './Comment.css';


class Comment extends React.Component {

    props = {
        Titulo: '',
        Opinion: '',
        Usuario: '',
        llave: ''
    }

    deleteDataHandler = () => {

        axios.delete('https://jokin-bdd.firebaseio.com/Comentarios/' + this.props.llave + '.json')
            .then(response => {
                console.log(response);
                alert('Comentario eliminado');
            });
    }
    render() {
        return (

            <article className="Comentario" >
                <h3>{this.props.Usuario}</h3>
                <div className="Info">


                </div>
                <div class="row justify-content-md-center">
                    <div class="col-10">
                        <p class="font-weight-bold">{this.props.Titulo}</p>
                    </div>
                    <div class="col-2">
                        <button type="button" class="btn btn-outline-danger" onClick={this.deleteDataHandler} >Eliminar</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-10">
                        <p class="text-justify">{this.props.Opinion}</p>
                    </div>
                </div>

            </article>

        );
    }

}

export default Comment;