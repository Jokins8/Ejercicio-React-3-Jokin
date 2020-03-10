import React from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends React.Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPost || this.state.loadedPost.idb !== this.props.id) {
                //axios.get('/posts.json?orderBy="id"&equalTo="' + this.props.id + '"')
                axios.get('https://jokin-bdd.firebaseio.com//Bolsos.json?orderBy="$key"&equalTo="' + this.props.id + '"')
                    .then(response => {
                        console.log(response);
                        const posts = [];
                        for (let key in response.data) {
                            posts.push({
                                ...response.data[key],
                                idb: key
                            });
                        }
                        console.log(posts);
                        this.setState({ loadedPost: posts[0] });
                    });
            }
        }

    }

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <div class="row">
                        <div class="col">
                            <img width="300" height="300" class="img-fluid" class="rounded" alt="Responsive image" src={this.state.loadedPost.imagen} />
                        </div>
                        <div class="col-8">
                            <h4>Descripción:</h4>
                            <p class="text-justify" >{this.state.loadedPost.Descripcion}</p>
                        </div>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;