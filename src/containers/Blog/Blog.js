import React from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import Comment from '../../components/Comment/Comment';
import NewComments from '../../components/NewComments/NewComments';
import './Blog.css';

class Blog extends React.Component {
    state = {
        posts: [],
        selectedPostId: null,
        comments: [],
        error: false
    }

    componentDidMount() {

        //PRODUCTOS
        axios.get('https://jokin-bdd.firebaseio.com/Bolsos.json')
            .then(response => {
                let posts = [];

                for (let key in response.data) {
                    posts.push({
                        ...response.data[key],
                        idb: key
                    });
                }
                posts = posts.slice(1);
                console.log(posts);
                this.setState({ posts: posts });


            }).catch(error => {
                this.setState({ error: true });
            });

        //COMENTARIOS
        axios.get('https://jokin-bdd.firebaseio.com/Comentarios.json')
            .then(response => {
                let comments = [];
                for (let key2 in response.data) {
                    comments.push({
                        ...response.data[key2],
                        idb: key2
                    });
                }
                comments = comments.slice(1);
                console.log(comments);
                this.setState({ comments: comments }
                );
            })
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

  

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.idb}
                    title={post.Nombre}
                    price={post.Precio}

                    clicked={() => this.postSelectedHandler(post.idb)} />;
            });


        }
        let comments = this.state.comments.map(comment => {
            return <Comment
                llave={comment.idb}
                Usuario={comment.Usuario}
                Titulo={comment.Titulo}
                Opinion={comment.Opinion}
                

            />;
        });
        return (

            
            
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section className="Comentarios">
                    {comments}
                </section>
                <section>
                    <NewComments />
                </section>
            </div>
        );
    }
}

export default Blog;